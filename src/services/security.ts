import { supabase } from '@/lib/supabase/client'
import { sendPushNotification } from '@/services/push'

export interface SessionInfo {
  id: string
  user_id: string
  created_at: string
  updated_at: string
  user_agent: string
  ip: string
  last_sign_in_at: string
}

// Session Management
export const listActiveSessions = async (): Promise<SessionInfo[]> => {
  const { data, error } = await supabase.functions.invoke('manage-sessions', {
    method: 'GET',
  })

  if (error) throw error
  return data.sessions || []
}

export const revokeSession = async (sessionId: string) => {
  const { data, error } = await supabase.functions.invoke('manage-sessions', {
    method: 'POST',
    body: { sessionId },
    headers: {
      // Passing action via query param if needed, but handled in body/method logic
    },
    // We append query param to URL manually in the client usually,
    // but supabase.functions.invoke handles URL.
    // Let's rely on the body being parsed by the function as 'revoke' if DELETE or POST with body
  })

  // Actually, the edge function expects action param or DELETE method.
  // invoke() doesn't easily let us change the method to DELETE without some tricks or just using POST with body.
  // Let's try passing 'action=revoke' in the options URL? No, invoke takes function name.
  // We will update the call to be robust:
  const { data: res, error: invokeError } = await supabase.functions.invoke(
    'manage-sessions?action=revoke',
    {
      method: 'POST',
      body: { sessionId },
    },
  )

  if (invokeError) throw invokeError
  return res
}

// Security Events
export const logSecurityEvent = async (action: string, details: any = {}) => {
  const { error } = await supabase.rpc('log_security_activity', {
    action_text: action,
    details,
  })

  if (error) console.error('Failed to log security event:', error)
  return { error }
}

export const triggerSecurityAlert = async (
  type: '2FA_CHANGE' | 'PASSWORD_RESET',
  details: {
    title: string
    message: string
    email?: string
  },
) => {
  // 1. Send Push Notification
  try {
    await sendPushNotification(
      details.title,
      details.message,
      '/admin/settings',
    )
  } catch (e) {
    console.error('Push notification failed:', e)
  }

  // 2. Send Email Notification via send-external-notification
  // We need to fetch the user's email if not provided (usually current user)
  // For password reset, email is provided. For 2FA, it's current user.

  try {
    const { error } = await supabase.functions.invoke(
      'send-external-notification',
      {
        body: {
          title: details.title,
          message: details.message,
          type: 'security',
          link: window.location.origin,
        },
      },
    )
    if (error) console.error('Email notification failed:', error)
  } catch (e) {
    console.error('Email notification exception:', e)
  }
}
