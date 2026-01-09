import { supabase } from '@/lib/supabase/client'
import {
  Project,
  Book,
  MusicTrack,
  ResumeItem,
  // ContactSubmission, // Not used directly to avoid type mismatch with new fields
} from '@/types'

// Type definition for Contact Form Data that matches the new requirements
export interface ContactPayload {
  name: string
  email: string
  message: string
  origin?: string
  subject?: string
}

// Projects
export const getProjects = async () => {
  return await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<Project[]>()
}

// Latest Item (for Home)
export const getLatestItem = async () => {
  // Try to get latest project
  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  // Try to get latest book
  const { data: book } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  // Compare dates and return the latest
  if (project && book) {
    const projectDate = new Date(project.created_at)
    const bookDate = new Date(book.created_at)
    return projectDate > bookDate
      ? { type: 'project', item: project as Project }
      : { type: 'book', item: book as Book }
  } else if (project) {
    return { type: 'project', item: project as Project }
  } else if (book) {
    return { type: 'book', item: book as Book }
  }
  return null
}

// Books
export const getBooks = async () => {
  return await supabase
    .from('books')
    .select('*')
    .order('rating', { ascending: false }) // Show highest rated first
    .returns<Book[]>()
}

// Music
export const getMusicTracks = async () => {
  return await supabase
    .from('music_tracks')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<MusicTrack[]>()
}

export const getMusicTrackById = async (id: string) => {
  return await supabase
    .from('music_tracks')
    .select('*')
    .eq('id', id)
    .single<MusicTrack>()
}

// Resume
export const getResumeData = async () => {
  return await supabase
    .from('resume_items')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<ResumeItem[]>()
}

// Contact
export const submitContactForm = async (data: ContactPayload) => {
  // We cast to any here because existing database types might be outdated regarding the 'origin' column
  // and we want to avoid typescript errors while still sending the data.
  return await supabase
    .from('contact_submissions')
    .insert([data as any])
    .select()
    .single()
}
