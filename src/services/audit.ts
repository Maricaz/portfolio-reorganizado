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
