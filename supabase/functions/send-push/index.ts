import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'
import webpush from 'web-push'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { title, body, url } = await req.json()

    if (!title || !body) {
      throw new Error('Missing title or body')
    }

    // Initialize Supabase Client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    // Setup Web Push
    // NOTE: In production, these should be set in Supabase Secrets
    const vapidPublicKey = Deno.env.get('VAPID_PUBLIC_KEY')
    const vapidPrivateKey = Deno.env.get('VAPID_PRIVATE_KEY')
    const vapidSubject =
      Deno.env.get('VAPID_SUBJECT') || 'mailto:admin@example.com'

    if (!vapidPublicKey || !vapidPrivateKey) {
      console.error('VAPID keys not configured')
      // For demo purposes, we might just log if keys aren't there, or fail.
      // We'll fail to alert the dev.
      throw new Error('Server VAPID configuration missing')
    }

    webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey)

    // Fetch all subscriptions
    // In a real app, you might filter by user role or permissions
    const { data: subscriptions, error: dbError } = await supabase
      .from('push_subscriptions')
      .select('*')

    if (dbError) throw dbError

    const results = await Promise.allSettled(
      subscriptions.map(async (sub) => {
        try {
          const pushSubscription = {
            endpoint: sub.endpoint,
            keys: sub.keys,
          }
          await webpush.sendNotification(
            pushSubscription,
            JSON.stringify({ title, body, url }),
          )
          return { status: 'fulfilled', id: sub.id }
        } catch (error: any) {
          if (error.statusCode === 410 || error.statusCode === 404) {
            // Subscription is gone, remove it
            await supabase.from('push_subscriptions').delete().eq('id', sub.id)
          }
          throw error
        }
      }),
    )

    const successCount = results.filter((r) => r.status === 'fulfilled').length

    return new Response(JSON.stringify({ success: true, sent: successCount }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
