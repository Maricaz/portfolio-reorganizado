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
  synopsis?: string
}

export interface MusicTrack {
  id: string
  track_id: string
  title: string
  artist: string
  src_url: string | null
  platforms: {
    spotify?: string
    deezer?: string
    apple?: string
    youtube?: string
  }
  lyrics: {
    pt?: string
    en?: string
    ko?: string
    [key: string]: string | undefined
  }
  created_at: string
}

export interface AlbumConcept {
  id: string
  title: {
    pt?: string
    en?: string
    ko?: string
    [key: string]: string | undefined
  }
  description: {
    pt?: string
    en?: string
    ko?: string
    [key: string]: string | undefined
  }
  video_url: string | null
  cover_url: string | null
  created_at: string
}

export interface ResumeItem {
  id: string
  role_pt: string
  role_en: string
  role_ko: string
  company: string
  type: string
  start_date: string
  end_date: string | null
  description_pt: string
  description_en: string
  description_ko: string
  created_at: string
}

export interface Skill {
  id: string
  label: string
  value: number
}

export interface SocialLink {
  id: string
  platform: string
  url: string
}

export interface SiteSettings {
  brand_config: {
    primary_gradient: string
  }
  resume_config: {
    url: string
  }
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}
