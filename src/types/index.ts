export type Language = 'pt' | 'en' | 'ko'

export interface Project {
  id: string
  title: string
  description_pt: string
  description_en: string
  description_ko: string
  tags: string[]
  image_url: string
  demo_url: string | null
  github_url: string | null
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

export interface MusicTrack {
  id: string
  title: string
  artist: string
  deezer_id: string
  lyrics_pt: string | null
  lyrics_en: string | null
  lyrics_ko: string | null
  created_at: string
}

export interface ResumeItem {
  id: string
  category: 'experience' | 'education' | 'skills'
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
  subject: string
  message: string
  created_at: string
}

export interface ProfileContent {
  id: string
  bio_pt: string
  bio_en: string
  bio_ko: string
  created_at: string
}

export interface SocialLink {
  id: string
  platform: 'instagram' | 'linkedin' | 'github' | 'lattes' | 'resume'
  url: string
  icon?: string
  created_at: string
}

export interface ProfessionalSkill {
  id: string
  name: string
  proficiency: number
  category?: string
  created_at: string
}
