import { supabase } from '@/lib/supabase/client'
import {
  Project,
  Book,
  ResumeEntry,
  MusicTrack,
  ContactSubmission,
} from '@/types'

export const getProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
  return { data: data as Project[], error }
}

export const getBooks = async () => {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })
  return { data: data as Book[], error }
}

export const getResumeEntries = async () => {
  // Casting to any to avoid type errors since table was renamed in migration but types might not be regenerated yet
  const { data, error } = await supabase
    .from('resume_entries' as any)
    .select('*')
    .order('start_date', { ascending: false })
  return { data: data as ResumeEntry[], error }
}

export const getMusicTracks = async () => {
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

export const getLatestItem = async () => {
  // Try fetching one project and one book to see which is newer
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .limit(1)
    .order('created_at', { ascending: false })
  const { data: books } = await supabase
    .from('books')
    .select('*')
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
