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
export type Project = {
  id: string
  title: string
  description_pt: string
  description_en: string
  description_ko: string
  image_url: string
  tech_stack: string[]
  demo_url?: string
  repo_url?: string
  created_at: string
}

export type ContactSubmission =
  Database['public']['Tables']['contact_submissions']['Row']

export interface PushSubscriptionData {
  endpoint: string
  keys: {
    p256dh: string
    auth: string
  }
}
