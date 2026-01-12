import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Create Supabase Client with Service Role Key (for Admin API)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    // 2. Get User from Auth Header (verify session)
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('Missing Authorization header')
    }

    const {
      data: { user },
      error: userError,
    } = await supabaseAdmin.auth.getUser(authHeader.replace('Bearer ', ''))

    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // 3. Handle Requests
    const url = new URL(req.url)
    const action = url.searchParams.get('action')

    if (req.method === 'GET' || (req.method === 'POST' && action === 'list')) {
      // List Sessions
      // Note: auth.admin.listUserSessions is not always available in all client versions/configurations directly via SDK
      // if not configured, but we try standard method.
      // If the SDK version in Edge Runtime doesn't support listUserSessions, we might have to rely on internal tables or restricted APIs.
      // However, typical pattern is mostly available.
      // Actually, listUserSessions usually requires the user's ID.

      // Since supabase-js v2, auth.admin.listUserSessions(uid) exists.
      const { data, error } = await supabaseAdmin.auth.admin.listUserSessions(
        user.id,
      )

      if (error) throw error

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (
      req.method === 'DELETE' ||
      (req.method === 'POST' && action === 'revoke')
    ) {
      // Revoke Session
      const { sessionId } = await req.json()

      if (!sessionId) {
        throw new Error('Session ID is required')
      }

      // Verify session belongs to user (Security Check)
      // We list sessions first to check ownership
      const { data: sessions, error: listError } =
        await supabaseAdmin.auth.admin.listUserSessions(user.id)

      if (listError) throw listError

      const sessionExists = sessions.sessions.some(
        (s: any) => s.id === sessionId,
      )

      if (!sessionExists) {
        return new Response(
          JSON.stringify({ error: 'Session not found or access denied' }),
          {
            status: 404,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          },
        )
      }

      // Proceed to delete
      const { error: deleteError } =
        await supabaseAdmin.auth.admin.deleteSession(sessionId)

      if (deleteError) throw deleteError

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    throw new Error('Method not supported')
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
