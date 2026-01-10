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
  // We need to join with auth.users to get email, but supabase client doesn't support joining auth schema directly easily usually.
  // However, often profiles table has email if synced. Let's assume profiles has role and we might need to use an edge function for full user management or just manage roles on profiles table.
  // The context migration example showed syncing email to profiles. So we assume profiles has email.

  // Actually, standard profile tables usually duplicate email or we rely on profile fields.
  // Let's assume profiles table has what we need based on migration in context: "INSERT INTO profiles (user_id, name, email, password) VALUES..."
  // Wait, the migration example in instructions was just an example.
  // The actual `src/lib/supabase/types.ts` shows `profiles` has `id`, `role`, `created_at`, `updated_at`. No email.
  // So we can only manage roles by ID unless we have a way to match emails.
  // For the purpose of this task, we'll just list profiles by ID or fetch emails if possible.
  // Since we can't access auth.users from client, we will just list IDs and Roles, or assume we can't show emails without a backend function.
  // To fulfill the User Story "User Management page", ideally we see emails.
  // I'll add an edge function call placeholder or just use the IDs for now, or check if I can use a view.
  // But wait, the prompt says "Supabase authentication MUST be implemented".
  // Let's try to fetch profiles. If we can't get emails, we'll just show IDs.

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
