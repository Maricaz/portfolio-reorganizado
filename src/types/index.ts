import { Database } from '@/lib/supabase/types'

export type Language = 'pt' | 'en' | 'ko'

export type Playlist = Database['public']['Tables']['playlists']['Row']
export type PlaylistTrack =
  Database['public']['Tables']['playlist_tracks']['Row'] & {
    track?: MusicTrack
  }

export type MusicTrack = Database['public']['Tables']['music_tracks']['Row']

export interface AlbumConcept {
  title: Record<string, string>
  description: Record<string, string>
  cover_url?: string | null
  video_url?: string | null
}

export interface SiteSettings {
  home_hero_image?: string
  seo_global?: {
    title: string
    description: string
    keywords: string
  }
  brand_config?: any
  resume_config?: any
}

export type Notification =
  Database['public']['Tables']['notifications']['Row'] & {
    link?: string | null
  }

export type ContactFormData = {
  name: string
  email: string
  message: string
  origin?: string
}

export interface AdminPermissions {
  settings?: boolean
  users?: boolean
  content?: boolean
  audit?: boolean
}

export type UserProfile = Database['public']['Tables']['profiles']['Row'] & {
  is_banned?: boolean
  permissions?: AdminPermissions
}

export type Book = Database['public']['Tables']['books']['Row']

export interface ITProject {
  id: string
  created_at: string
  title: string
  title_ko?: string | null
  description_en?: string | null
  description_pt?: string | null
  description_ko?: string | null
  image_url?: string | null
  github_url?: string | null
  live_url?: string | null
  demo_url?: string | null
  link?: string | null
  featured?: boolean
  tags?: string[] | null
  category?: string | null
}

export type Project = ITProject

export type ContactSubmission =
  Database['public']['Tables']['contact_submissions']['Row']

export interface PushSubscriptionData {
  endpoint: string
  keys: {
    p256dh: string
    auth: string
  }
}

// Types for About Page and other public facing components
export type ResumeSkill = Database['public']['Tables']['resume_skills']['Row']

export interface SocialLink {
  id: string
  platform: string
  url: string
  created_at?: string
}
