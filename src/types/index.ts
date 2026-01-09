export type Language = 'pt' | 'en' | 'ko'

export interface ITProject {
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
  review: string
  cover_url: string
  rating: number
  category: string
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
  audio_url: string | null
  lyrics_pt?: string | null
  lyrics_en?: string | null
  lyrics_ko?: string | null
  deezer_id: string | null
  duration: string | null
  created_at: string
}

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  message: string
  subject?: string
  created_at?: string
}
