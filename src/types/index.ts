export type Language = 'pt' | 'en' | 'ko'

export interface Project {
  id: string
  title: string
  description: string
  tech_stack: string[]
  link: string | null
  image_url: string
  language: string
  created_at: string
}

export interface Book {
  id: string
  title: string
  author: string
  category: string
  rating: number
  review: string
  cover_url: string
  language: string
  created_at: string
}

export interface ResumeItem {
  id: string
  category: string
  title: string
  period: string
  description: string
  language: string
  created_at: string
}

export interface MusicTrack {
  id: string
  title: string
  artist: string
  deezer_id: string
  audio_url: string | null
  duration: string | null
  lyrics_pt?: string
  lyrics_en?: string
  lyrics_ko?: string
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject?: string
  message: string
  created_at: string
}
