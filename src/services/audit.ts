import { supabase } from '@/lib/supabase/client'

export interface AuditLog {
  id: string
  user_id: string
  action: 'INSERT' | 'UPDATE' | 'DELETE'
  table_name: string
  record_id: string
  old_data: any
  new_data: any
  created_at: string
}

export const getAuditLogs = async () => {
  const { data, error } = await supabase
    .from('audit_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)
    .returns<AuditLog[]>()

  if (error) {
    console.error('Error fetching audit logs:', error)
    return []
  }

  return data
}

export const getAuditLogsPaginated = async (
  page: number = 1,
  limit: number = 10,
) => {
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error, count } = await supabase
    .from('audit_logs')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)
    .returns<AuditLog[]>()

  if (error) throw error

  return {
    data: data || [],
    count: count || 0,
    totalPages: count ? Math.ceil(count / limit) : 0,
  }
}
