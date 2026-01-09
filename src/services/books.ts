import { supabase } from '@/lib/supabase/client'
import { Book, Language } from '@/types'

export const getBooks = async (language: Language) => {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('language_code', language)
    .order('created_at', { ascending: false })
    .returns<Book[]>()

  if (error) {
    console.error('Error fetching books:', error)
    return null
  }

  return data
}
