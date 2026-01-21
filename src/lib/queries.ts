import { supabase } from '@/lib/supabaseClient'
import {
  ITProject,
  Book,
  MusicTrack,
  ResumeExperience,
  ContactFormData,
} from '@/types'

/**
 * Retrieves featured projects for the Home page and all projects for the IT/Projects page.
 * @param featured - If true, returns only featured projects.
 */
export async function fetchProjects(featured?: boolean) {
  let query = supabase
    .from('it_projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (featured) {
    query = query.eq('featured', true)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching projects:', error)
    throw error
  }

  return data as ITProject[]
}

/**
 * Retrieves all books from the database.
 */
export async function fetchBooks() {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching books:', error)
    throw error
  }

  return data as Book[]
}

/**
 * Retrieves music tracks and their platform links.
 */
export async function fetchMusic() {
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching music:', error)
    throw error
  }

  return data as MusicTrack[]
}

/**
 * Retrieves professional experience records.
 */
export async function fetchExperiences() {
  const { data, error } = await supabase
    .from('resume_experience')
    .select('*')
    .order('start_date', { ascending: false })

  if (error) {
    console.error('Error fetching experiences:', error)
    throw error
  }

  return data as ResumeExperience[]
}

/**
 * Saves contact form data to the database.
 */
export async function insertContact(contact: ContactFormData) {
  const { error } = await supabase.from('contact_submissions').insert({
    name: contact.name,
    email: contact.email,
    message: contact.message,
    origin: contact.origin || 'web',
  })

  if (error) {
    console.error('Error inserting contact:', error)
    throw error
  }
}
