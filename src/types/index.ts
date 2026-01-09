export type Language = 'pt' | 'en' | 'ko'

export interface Book {
  id: string
  title: string
  author: string
  language: string
  curatorship?: string
  synopsis?: string
  original_title?: string
  translation?: string
  image_url?: string
  created_at?: string
}

export interface Project {
  id: string
  title: string
  description_pt: string
  description_en: string
  description_ko: string
  tags: string[]
  image_url: string
  demo_url?: string | null
  github_url?: string | null
  created_at: string
}

export interface MusicTrack {
  id: string
  title: string
  artist: string
  deezer_id: string
  lyrics_pt?: string | null
  lyrics_en?: string | null
  lyrics_ko?: string | null
  created_at: string
}

export interface ExperienceItem {
  id: string
  role_pt: string
  role_en: string
  role_ko: string
  company: string
  type: string
  start_date: string
  end_date?: string | null
  description_pt: string
  description_en: string
  description_ko: string
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}
