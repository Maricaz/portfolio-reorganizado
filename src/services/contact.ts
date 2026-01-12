import { supabase } from '@/lib/supabase/client'
import { ContactFormData } from '@/types'
import { sendPushNotification } from '@/services/push'

export const submitContactForm = async (data: ContactFormData) => {
  // 1. Send to Supabase Database
  const { error: dbError } = await supabase.from('contact_submissions').insert({
    name: data.name,
    email: data.email,
    message: data.message,
    origin: data.origin || 'web',
  })

  if (dbError) throw dbError

  // 2. Send Push Notification (Client-side trigger for immediate feedback)
  // Note: Ideally this is done via Database Webhooks, but for robustness in this demo environment:
  try {
    await sendPushNotification(
      'New Contact',
      `From: ${data.name}`,
      '/admin/contacts',
    )
  } catch (err) {
    console.warn('Failed to trigger push notification:', err)
  }

  // 3. Send to Formspree (Legacy/Backup)
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT
  if (FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.includes('PLACEHOLDER')) {
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error('Formspree submission failed:', error)
    }
  }

  return true
}

export const getContactSubmissions = async () => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
