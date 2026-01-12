import { supabase } from '@/lib/supabase/client'
import { ContactSubmission } from '@/types'

export const getContactSubmissions = async () => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching contact submissions:', error)
    throw error
  }

  return (data as ContactSubmission[]) || []
}

export const deleteContactSubmission = async (id: string) => {
  const { error } = await supabase
    .from('contact_submissions')
    .delete()
    .eq('id', id)

  if (error) throw error
  return true
}
