export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      books: {
        Row: {
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
        }
        Insert: {
          id?: string
          title: string
          author: string
          category: string
          rating?: number
          review_pt: string
          review_en: string
          review_ko: string
          image_url: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          author?: string
          category?: string
          rating?: number
          review_pt?: string
          review_en?: string
          review_ko?: string
          image_url?: string
          created_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          created_at?: string
        }
        Relationships: []
      }
      experience: {
        Row: {
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
        Insert: {
          id?: string
          role_pt: string
          role_en: string
          role_ko: string
          company: string
          type: string
          start_date: string
          end_date?: string | null
          description_pt: string
          description_en: string
          description_ko: string
          created_at?: string
        }
        Update: {
          id?: string
          role_pt?: string
          role_en?: string
          role_ko?: string
          company?: string
          type?: string
          start_date?: string
          end_date?: string | null
          description_pt?: string
          description_en?: string
          description_ko?: string
          created_at?: string
        }
        Relationships: []
      }
      music_tracks: {
        Row: {
          id: string
          title: string
          artist: string
          deezer_id: string
          lyrics_pt: string | null
          lyrics_en: string | null
          lyrics_ko: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          artist: string
          deezer_id: string
          lyrics_pt?: string | null
          lyrics_en?: string | null
          lyrics_ko?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          artist?: string
          deezer_id?: string
          lyrics_pt?: string | null
          lyrics_en?: string | null
          lyrics_ko?: string | null
          created_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
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
        Insert: {
          id?: string
          title: string
          description_pt: string
          description_en: string
          description_ko: string
          tags?: string[]
          image_url: string
          demo_url?: string | null
          github_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description_pt?: string
          description_en?: string
          description_ko?: string
          tags?: string[]
          image_url?: string
          demo_url?: string | null
          github_url?: string | null
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
