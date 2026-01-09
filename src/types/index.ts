export type Language = 'pt' | 'en' | 'ko'

export interface Project {
  id: string
  title: string
  description_pt: string
  description_en: string
  description_ko: string
  tags: string[]
  image_url: string
  demo_url?: string
  github_url?: string
  created_at: string
}

export interface Book {
  id: string
  title: string
  author: string
  category: string
  rating: number
  review_pt: string
  review_en: string
  review_ko: string
  image_url: string
  created_at: string
}

export interface ResumeEntry {
  id: string
  role_pt: string
  role_en: string
  role_ko: string
  company: string
  type: 'work' | 'education'
  start_date: string
  end_date?: string
  description_pt: string
  description_en: string
  description_ko: string
  created_at: string
}

export interface MusicTrack {
  id: string
  title: string
  artist: string
  deezer_id: string
  lyrics_pt?: string
  lyrics_en?: string
  lyrics_ko?: string
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
