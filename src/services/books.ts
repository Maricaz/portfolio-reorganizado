import { supabase } from '@/lib/supabase/client'
import { Book } from '@/types'

export const getBooks = async () => {
  return await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<Book[]>()
}
