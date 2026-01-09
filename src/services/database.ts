import { supabase } from '@/lib/supabase/client'
import {
  Project,
  Book,
  ResumeData,
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

export const getResumeData = async () => {
  const { data, error } = await supabase
    .from('resume_data')
    .select('*')
    .order('created_at', { ascending: false })
  return { data: data as ResumeData[], error }
}

export const getMusicTracks = async () => {
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .order('created_at', { ascending: false })
  return { data: data as MusicTrack[], error }
}

export const submitContact = async (submission: ContactSubmission) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([submission])
    .select()
  return { data, error }
}

export const getLatestItem = async () => {
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

  const project = projects?.[0] as Project
  const book = books?.[0] as Book

  if (project && book) {
    return new Date(project.created_at) > new Date(book.created_at)
      ? { type: 'project', item: project }
      : { type: 'book', item: book }
  } else if (project) {
    return { type: 'project', item: project }
  } else if (book) {
    return { type: 'book', item: book }
  }

  return null
}
