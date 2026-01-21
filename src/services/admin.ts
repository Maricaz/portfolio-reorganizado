import { supabase } from '@/lib/supabase/client'
import { Notification, UserProfile, AdminPermissions } from '@/types'

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

const logAuditAction = async (
  action: 'UPDATE' | 'INSERT' | 'DELETE',
  tableName: string,
  recordId: string,
  oldData: any,
  newData: any,
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return

  await supabase.from('audit_logs').insert({
    user_id: user.id,
    action,
    table_name: tableName,
    record_id: recordId,
    old_data: oldData,
    new_data: newData,
  })
}

export const updateUserRole = async (userId: string, role: string) => {
  // Get old data for audit
  const { data: oldData } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single()

  const { error } = await supabase
    .from('profiles')
    .update({ role })
    .eq('id', userId)

  if (error) throw error

  await logAuditAction(
    'UPDATE',
    'profiles',
    userId,
    { role: oldData?.role },
    { role },
  )

  return true
}

export const updateUserPermissions = async (
  userId: string,
  permissions: AdminPermissions,
) => {
  const { data: oldData } = await supabase
    .from('profiles')
    .select('permissions')
    .eq('id', userId)
    .single()

  const { error } = await supabase
    .from('profiles')
    .update({ permissions })
    .eq('id', userId)

  if (error) throw error

  await logAuditAction(
    'UPDATE',
    'profiles',
    userId,
    { permissions: oldData?.permissions },
    { permissions },
  )

  return true
}

export const toggleUserBan = async (userId: string, isBanned: boolean) => {
  const { data: oldData } = await supabase
    .from('profiles')
    .select('is_banned')
    .eq('id', userId)
    .single()

  const { error } = await supabase
    .from('profiles')
    .update({ is_banned: isBanned })
    .eq('id', userId)

  if (error) throw error

  await logAuditAction(
    'UPDATE',
    'profiles',
    userId,
    { is_banned: oldData?.is_banned },
    { is_banned: isBanned },
  )

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
  // Get data before delete
  const { data: oldData } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  const { error } = await supabase.from('profiles').delete().eq('id', userId)
  if (error) throw error

  await logAuditAction('DELETE', 'profiles', userId, oldData, null)

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
