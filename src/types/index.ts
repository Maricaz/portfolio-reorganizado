export type Language = 'pt' | 'en' | 'ko'

export interface Project {
  id: string
  title: string
  description_pt: string | null
  description_en: string | null
  description_ko: string | null
  tech_stack: string[]
  image_url: string | null
  demo_url: string | null
  github_url: string | null
  created_at: string
}

export interface Book {
  id: string
  title: string
  author: string
  review_pt: string | null
  review_en: string | null
  review_ko: string | null
  cover_url: string
  rating: number
  category: string
  created_at: string
}

export interface MusicTrack {
  id: string
  title: string
  artist: string
  audio_url: string | null
  lyrics_pt: string | null
  lyrics_en: string | null
  lyrics_ko: string | null
  deezer_id: string | null
  spotify_id: string | null
  duration: string | null
  created_at: string
}

export interface ResumeItem {
  id: string
  category: 'experience' | 'education' | 'skills' | string
  title_pt: string | null
  title_en: string | null
  title_ko: string | null
  institution: string | null
  period: string | null
  description_pt: string | null
  description_en: string | null
  description_ko: string | null
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  subject: string
  created_at: string
}
