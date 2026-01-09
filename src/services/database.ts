import { supabase } from '@/lib/supabase/client'

export interface ContactFormData {
  name: string
  email: string
  message: string
  origin: string
}

export async function submitContactForm(data: ContactFormData) {
  return await supabase.from('contact_messages').insert(data)
}

export async function getLatestItem() {
  const { data: project } = await supabase
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
