export type Language = 'pt' | 'en' | 'ko'

export interface Book {
  id: string
  title: string
  author: string
  synopsis: string
  language: string
  image_url: string
  created_at: string
  rating?: number
  category?: string
  // Legacy fields for backward compatibility if needed, though we prefer language-specific rows now
  review_pt?: string
  review_en?: string
  review_ko?: string
}

export interface Project {
  id: string
  title: string
  description_pt: string
  description_en: string
  description_ko: string
  image_url: string
  demo_url?: string
  github_url?: string
  tags: string[]
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

export interface ContactFormData {
  name: string
  email: string
  message: string
  origin: string
}
