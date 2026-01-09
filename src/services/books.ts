import { supabase } from '@/lib/supabase/client'
import { Book, Language } from '@/types'

export const getBooks = async (language: Language) => {
  // Fallback to 'en' if language is 'ko' as we might not have Korean books yet
  const searchLanguage = language === 'ko' ? 'en' : language

  return await supabase
    .from('books')
    .select('*')
    .eq('language', searchLanguage)
    .order('created_at', { ascending: false })
    .returns<Book[]>()
}
