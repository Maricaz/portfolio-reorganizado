export type Language = 'pt' | 'en' | 'ko'

export interface SocialLink {
  id: string
  platform: string
  url: string
  created_at: string
}

export interface Skill {
  id: string
  label: string
  value: number
  created_at: string
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

export interface ITProject {
  id: string
  title: string
  description_pt: string | null
  description_en: string | null
  description_ko: string | null
  tags: string[]
  link: string | null
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
  synopsis_pt?: string | null
  synopsis_en?: string | null
  synopsis_ko?: string | null
  image_url: string
  created_at: string
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
  } | null
  lyrics: {
    pt?: string
    en?: string
    ko?: string
  } | null
  created_at: string
}

export interface AlbumConcept {
  id: string
  title: {
    pt?: string
    en?: string
    ko?: string
  }
  description: {
    pt?: string
    en?: string
    ko?: string
  }
  video_url: string | null
  cover_url: string | null
  created_at: string
}

export interface SiteSettings {
  brand_config: {
    primary_gradient: string
  }
  resume_config: {
    url: string
  }
}

export interface ResumeItem {
  id: string
  created_at: string
}
