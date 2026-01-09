export type Language = 'pt' | 'en' | 'ko'

export interface SiteSettings {
  brand_config: {
    primary_gradient: string
    [key: string]: any
  }
  resume_config: {
    url: string
    [key: string]: any
  }
  [key: string]: any
}

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
  language_code: Language
  title: string
  author: string
  curatorship: string | null
  synopsis: string | null
  original_title: string | null
  translation: string | null
  image_url: string | null
  created_at: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
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
