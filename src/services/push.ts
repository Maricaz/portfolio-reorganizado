import { supabase } from '@/lib/supabase/client'
import { PushSubscriptionData } from '@/types'

const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY

export const registerPush = async () => {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    throw new Error('Push notifications are not supported by your browser')
  }

  if (!VAPID_PUBLIC_KEY) {
    throw new Error('VAPID Public Key is missing in environment variables')
  }

  const registration = await navigator.serviceWorker.ready
  let subscription = await registration.pushManager.getSubscription()

  if (!subscription) {
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    })
  }

  await saveSubscription(subscription)
  return subscription
}

export const unsubscribePush = async () => {
  const registration = await navigator.serviceWorker.ready
  const subscription = await registration.pushManager.getSubscription()

  if (subscription) {
    await subscription.unsubscribe()
    // Remove from DB
    // We match by endpoint usually
    const { error } = await supabase
      .from('push_subscriptions')
      .delete()
      .eq('endpoint', subscription.endpoint)

    if (error) console.error('Error removing subscription from DB', error)
  }
}

export const checkSubscription = async () => {
  if (!('serviceWorker' in navigator)) return false
  const registration = await navigator.serviceWorker.ready
  const subscription = await registration.pushManager.getSubscription()
  return !!subscription
}

const saveSubscription = async (subscription: PushSubscription) => {
  const subData: PushSubscriptionData = JSON.parse(JSON.stringify(subscription))
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error('User not authenticated')

  const { error } = await supabase.from('push_subscriptions').upsert(
    {
      user_id: user.id,
      endpoint: subData.endpoint,
      keys: subData.keys,
    },
    { onConflict: 'user_id, endpoint' },
  )

  if (error) throw error
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export const sendPushNotification = async (
  title: string,
  body: string,
  url?: string,
) => {
  const { error } = await supabase.functions.invoke('send-push', {
    body: { title, body, url },
  })
  return { error }
}
