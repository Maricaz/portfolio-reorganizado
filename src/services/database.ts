import { supabase } from '@/lib/supabase/client'
import {
  Project,
  Book,
  MusicTrack,
  ResumeItem,
  ContactSubmission,
} from '@/types'

// Projects
export const getProjects = async () => {
  return await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<Project[]>()
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
    .from('resume_data')
    .select('*')
    .order('created_at', { ascending: false }) // Most recent first assumption
    .returns<ResumeItem[]>()
}

// Contact
export const submitContactForm = async (
  data: Omit<ContactSubmission, 'id' | 'created_at'>,
) => {
  return await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .single()
}
