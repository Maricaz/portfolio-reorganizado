export type Language = 'pt' | 'en' | 'ko'

export interface Book {
  id: string
  language_code: Language
  title: string
  author: string
  curatorship?: string | null
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
