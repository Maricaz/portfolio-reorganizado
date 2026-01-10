export type Language = 'pt' | 'en' | 'ko'

export interface SocialLink {
  id: string
  platform: string
  url: string
  icon?: string
}

export interface Skill {
  id: string
  label: string
  value: number
}

export interface Book {
  id: string
  title: string
  author: string
  category: string
  rating: number
  synopsis?: string
  review_pt?: string
  review_en?: string
  review_ko?: string
  curation?: string
  original_title?: string
  translation?: string
  language_code: string
  image_url: string
  created_at: string
}

export interface ITProject {
  id: string
  title: string
  title_ko?: string
  description_pt: string
  description_en: string
  description_ko: string
  category: string
  tags: string[]
  image_url: string
  demo_url: string | null
  github_url: string | null
  link?: string
  featured?: boolean
  created_at: string
}

export interface MusicTrack {
  id: string
  track_id?: string
  title: string
  artist: string
  src_url?: string
  deezer_id: string
  lyrics?: Record<string, string>
  platforms?: {
    spotify?: string
    deezer?: string
    apple?: string
    youtube?: string
  }
  created_at: string
}

export interface AlbumConcept {
  id: string
  title: Record<string, string>
  description: Record<string, string>
  cover_url: string
  video_url: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  origin?: string
}

export interface SiteSettings {
  brand_config: any
  resume_config: {
    url: string
  }
}

export interface Project {
  id: string
  title: string
  description: string
  created_at: string
}
