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

export const getAllBooks = async () => {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<Book[]>()

  if (error) throw error
  return data
}

export const createBook = async (book: Partial<Book>) => {
  const { data, error } = await supabase
    .from('books')
    .insert(book)
    .select()
    .single()

  if (error) throw error
  return data
}

export const updateBook = async (id: string, updates: Partial<Book>) => {
  const { data, error } = await supabase
    .from('books')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export const deleteBook = async (id: string) => {
  const { error } = await supabase.from('books').delete().eq('id', id)

  if (error) throw error
  return true
}
