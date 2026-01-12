import { supabase } from '@/lib/supabase/client'
import { Notification, UserProfile } from '@/types'

export const getNotifications = async () => {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50)
    .returns<Notification[]>()

  if (error) {
    console.error('Error fetching notifications:', error)
    return []
  }
  return data
}

export const markNotificationAsRead = async (id: string) => {
  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('id', id)

  if (error) throw error
  return true
}

export const markAllNotificationsAsRead = async () => {
  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('read', false)

  if (error) throw error
  return true
}

export const getAllProfiles = async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<UserProfile[]>()

  if (error) throw error
  return data
}

export const updateUserRole = async (userId: string, role: string) => {
  const { error } = await supabase
    .from('profiles')
    .update({ role })
    .eq('id', userId)

  if (error) throw error
  return true
}

export const toggleUserBan = async (userId: string, isBanned: boolean) => {
  const { error } = await supabase
    .from('profiles')
    .update({ is_banned: isBanned })
    .eq('id', userId)

  if (error) throw error
  return true
}

export const triggerPasswordReset = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/admin/reset-password`,
  })
  if (error) throw error
  return true
}

export const deleteUserProfile = async (userId: string) => {
  // First, we need to delete the user from auth (via Edge Function ideally, but here just profile)
  // Note: Standard supabase client can't delete auth users unless using service role.
  // We assume there's a cascade or we just delete profile here as requested by context.
  // Actually, context shows 'deleteUserProfile' doing profile deletion.
  // To strictly follow rules, I stick to existing implementation logic + fixes.
  const { error } = await supabase.from('profiles').delete().eq('id', userId)

  if (error) throw error
  return true
}

export const createUser = async (
  data: any,
): Promise<{ data: any; error: any }> => {
  const { data: result, error } = await supabase.functions.invoke(
    'create-user',
    {
      body: data,
    },
  )
  return { data: result, error }
}
