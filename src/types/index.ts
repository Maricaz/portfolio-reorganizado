export type Language = 'pt' | 'en' | 'ko'

export interface Book {
  id: string
  language_code: Language
  title: string
  author: string
  curation?: string | null
  synopsis?: string | null
  original_title?: string | null
  translation?: string | null
  image_url?: string | null
  created_at: string
}

export interface Project {
  id: string
  title: string
  description_pt?: string | null
  description_en?: string | null
  description_ko?: string | null
  image_url?: string | null
  created_at: string
  tags?: string[] | null
  link?: string | null
  repo_url?: string | null
}

export interface SiteSettings {
  id?: string
  brand_config?: {
    primary_gradient?: string
  }
  resume_config?: {
    url?: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

export interface MusicTrack {
  id: string
  track_id?: string
  title: string
  artist: string
  src_url?: string
  platforms?: {
    spotify?: string
    deezer?: string
    apple?: string
    youtube?: string
  }
  lyrics?: Record<string, string>
  created_at?: string
}

export interface AlbumConcept {
  id: string
  title: Record<string, string>
  description: Record<string, string>
  cover_url?: string
  video_url?: string
  created_at?: string
}

export interface SocialLink {
  id: string
  platform: string
  url: string
  created_at?: string
}

export interface Skill {
  id: string
  label: string
  value: number
  created_at?: string
}
