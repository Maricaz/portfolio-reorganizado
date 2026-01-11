import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    )

    const { email, password, role } = await req.json()

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email and password are required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    const { data: user, error: createError } =
      await supabaseClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      })

    if (createError) {
      throw createError
    }

    if (user.user && role) {
      // Update profile with role and email (in case trigger didn't catch it or for role update)
      const { error: profileError } = await supabaseClient
        .from('profiles')
        .upsert({
          id: user.user.id,
          email: email,
          role: role,
          updated_at: new Date().toISOString(),
        })

      if (profileError) {
        console.error('Error updating profile:', profileError)
      }
    }

    return new Response(JSON.stringify(user), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
