import { supabase } from '@/lib/supabase/client'
import { Book, Language } from '@/types'

export const getBooks = async (language: Language) => {
  return await supabase
    .from('books')
    .select('*')
    .eq('language', language)
    .order('created_at', { ascending: false })
    .returns<Book[]>()
}
