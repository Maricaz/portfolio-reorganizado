import { supabase } from '@/lib/supabase/client'
import { ContactFormData, Language, Book, Project } from '@/types'

export async function submitContactForm(data: ContactFormData) {
  return await (supabase as any).from('contact_submissions').insert(data)
}

export async function getLatestItem(language: Language = 'pt') {
  // Fetch latest project
  const { data: project } = await (supabase as any)
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  // Fetch latest book for the specific language
  const { data: book } = await supabase
    .from('books')
    .select('*')
    .eq('language_code', language)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (!project && !book) return null

  // If we have both, compare dates to see which is newer
  if (
    !book ||
    (project && new Date(project.created_at) > new Date(book.created_at))
  ) {
    return { type: 'project', item: project as Project }
  }

  return { type: 'book', item: book as Book }
}
