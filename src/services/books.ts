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

export const getBooksPaginated = async (
  page: number = 1,
  limit: number = 10,
  search: string = '',
) => {
  const from = (page - 1) * limit
  const to = from + limit - 1

  let query = supabase
    .from('books')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })

  if (search) {
    query = query.ilike('title', `%${search}%`)
  }

  const { data, error, count } = await query.range(from, to)

  if (error) throw error

  return {
    data: data as Book[],
    count: count || 0,
    page,
    limit,
    totalPages: count ? Math.ceil(count / limit) : 0,
  }
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
