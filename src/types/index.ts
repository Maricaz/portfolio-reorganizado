export type Language = 'pt' | 'en' | 'ko'

export interface SiteSettings {
  id: string
  key: string
  value: any
  brand_config?: {
    primary_gradient: string
  }
  resume_config?: {
    url: string
  }
}

export interface ITProject {
  id: string
  title: string
  title_ko?: string
  description_pt: string
  description_en: string
  description_ko: string
  tags: string[]
  image_url: string
  demo_url?: string | null
  github_url?: string | null
  link?: string
  created_at: string
}

export interface Book {
  id: string
  title: string
  title_ko?: string
  author: string
  category: string
  rating: number
  review_pt: string
  review_en: string
  review_ko: string
  synopsis_pt?: string
  synopsis_en?: string
  synopsis_ko?: string
  image_url: string
  created_at: string
}

export interface MusicTrack {
  id: string
  track_id?: string
  title: string
  artist: string
  src_url?: string
  lyrics?: {
    pt?: string
    en?: string
    ko?: string
  }
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
  cover_url?: string
  video_url?: string
}

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

export interface ResumeItem {
  id: string
  title: string
  type: 'experience' | 'education' | 'skill' | 'certification'
  start_date: string
  end_date?: string
  is_current?: boolean
  description: string
  created_at: string
}
