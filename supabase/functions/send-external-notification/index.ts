import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Validate Auth
    const authHeader = req.headers.get('Authorization')
    const apiKey = req.headers.get('x-api-key')
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const externalKey = Deno.env.get('EXTERNAL_NOTIF_KEY')

    let isAuthorized = false

    // Check Service Role (Bearer)
    if (
      authHeader &&
      serviceRoleKey &&
      authHeader === `Bearer ${serviceRoleKey}`
    ) {
      isAuthorized = true
    }
    // Check custom API Key
    else if (apiKey && externalKey && apiKey === externalKey) {
      isAuthorized = true
    }

    if (!isAuthorized) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // 2. Parse Body
    const { title, message, type, link } = await req.json()

    if (!title || !message) {
      return new Response(
        JSON.stringify({ error: 'Title and message are required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    // 3. Insert Notification
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const { data, error } = await supabaseClient
      .from('notifications')
      .insert({
        title,
        message,
        type: type || 'info',
        link: link || null,
        read: false,
      })
      .select()
      .single()

    if (error) throw error

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
