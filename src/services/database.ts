import { supabase } from '@/lib/supabase/client'
import {
  Project,
  Book,
  ResumeItem,
  MusicTrack,
  ContactSubmission,
} from '@/types'

export const getProjects = async (language: string) => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('language', language)
    .order('created_at', { ascending: false })
  return { data: data as Project[], error }
}

export const getBooks = async (language: string) => {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('language', language)
    .order('created_at', { ascending: false })
  return { data: data as Book[], error }
}

export const getResumeItems = async (language: string) => {
  const { data, error } = await supabase
    .from('resume_items')
    .select('*')
    .eq('language', language)
    .order('created_at', { ascending: false })
  return { data: data as ResumeItem[], error }
}

export const getMusicTracks = async () => {
  // Music tracks are shared but lyrics are multilingual columns
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .order('created_at', { ascending: false })
  return { data: data as MusicTrack[], error }
}

export const submitContact = async (
  submission: Omit<ContactSubmission, 'id' | 'created_at'>,
) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([submission])
    .select()
  return { data, error }
}

export const getLatestItem = async (language: string) => {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('language', language)
    .limit(1)
    .order('created_at', { ascending: false })

  const { data: books } = await supabase
    .from('books')
    .select('*')
    .eq('language', language)
    .limit(1)
    .order('created_at', { ascending: false })

  const project = projects?.[0]
  const book = books?.[0]

  if (project && book) {
    return new Date(project.created_at) > new Date(book.created_at)
      ? { type: 'project', item: project as Project }
      : { type: 'book', item: book as Book }
  } else if (project) {
    return { type: 'project', item: project as Project }
  } else if (book) {
    return { type: 'book', item: book as Book }
  }

  return null
}
