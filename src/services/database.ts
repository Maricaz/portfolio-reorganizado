import { supabase } from '@/lib/supabase/client'

export interface ContactFormData {
  name: string
  email: string
  message: string
  origin: string
}

export async function submitContactForm(data: ContactFormData) {
  // Using any cast to avoid type errors since we cannot update types.ts to include the new table
  return await (supabase as any).from('contact_messages').insert(data)
}

export async function getLatestItem() {
  // Using any cast for tables that might be missing in the provided types definition
  const { data: project } = await (supabase as any)
    .from('it_projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  const { data: book } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (!project && !book) return null

  if (
    !book ||
    (project && new Date(project.created_at) > new Date(book.created_at))
  ) {
    return { type: 'project', item: project }
  }

  return { type: 'book', item: book }
}
