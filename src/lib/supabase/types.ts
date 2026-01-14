// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.1'
  }
  public: {
    Tables: {
      audit_logs: {
        Row: {
          action: string
          created_at: string
          id: string
          new_data: Json | null
          old_data: Json | null
          record_id: string | null
          table_name: string
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          table_name: string
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          table_name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'audit_logs_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      books: {
        Row: {
          author: string
          category: string | null
          created_at: string
          curation: string | null
          id: string
          image_url: string | null
          language_code: string
          original_title: string | null
          rating: number | null
          review_en: string | null
          review_ko: string | null
          review_pt: string | null
          synopsis: string | null
          title: string
          translation: string | null
        }
        Insert: {
          author: string
          category?: string | null
          created_at?: string
          curation?: string | null
          id?: string
          image_url?: string | null
          language_code: string
          original_title?: string | null
          rating?: number | null
          review_en?: string | null
          review_ko?: string | null
          review_pt?: string | null
          synopsis?: string | null
          title: string
          translation?: string | null
        }
        Update: {
          author?: string
          category?: string | null
          created_at?: string
          curation?: string | null
          id?: string
          image_url?: string | null
          language_code?: string
          original_title?: string | null
          rating?: number | null
          review_en?: string | null
          review_ko?: string | null
          review_pt?: string | null
          synopsis?: string | null
          title?: string
          translation?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          origin: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          origin?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          origin?: string | null
        }
        Relationships: []
      }
      music_tracks: {
        Row: {
          artist: string
          created_at: string
          deezer_id: string | null
          id: string
          lyrics: Json | null
          platforms: Json | null
          src_url: string | null
          title: string
          track_id: string | null
        }
        Insert: {
          artist: string
          created_at?: string
          deezer_id?: string | null
          id?: string
          lyrics?: Json | null
          platforms?: Json | null
          src_url?: string | null
          title: string
          track_id?: string | null
        }
        Update: {
          artist?: string
          created_at?: string
          deezer_id?: string | null
          id?: string
          lyrics?: Json | null
          platforms?: Json | null
          src_url?: string | null
          title?: string
          track_id?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          link: string | null
          message: string
          read: boolean
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          id?: string
          link?: string | null
          message: string
          read?: boolean
          title: string
          type?: string
        }
        Update: {
          created_at?: string
          id?: string
          link?: string | null
          message?: string
          read?: boolean
          title?: string
          type?: string
        }
        Relationships: []
      }
      playlist_tracks: {
        Row: {
          created_at: string
          id: string
          order_index: number | null
          playlist_id: string
          track_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          order_index?: number | null
          playlist_id: string
          track_id: string
        }
        Update: {
          created_at?: string
          id?: string
          order_index?: number | null
          playlist_id?: string
          track_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'playlist_tracks_playlist_id_fkey'
            columns: ['playlist_id']
            isOneToOne: false
            referencedRelation: 'playlists'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'playlist_tracks_track_id_fkey'
            columns: ['track_id']
            isOneToOne: false
            referencedRelation: 'music_tracks'
            referencedColumns: ['id']
          },
        ]
      }
      playlists: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
          is_banned: boolean
          language: string | null
          permissions: Json | null
          role: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          is_banned?: boolean
          language?: string | null
          permissions?: Json | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          is_banned?: boolean
          language?: string | null
          permissions?: Json | null
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      push_subscriptions: {
        Row: {
          created_at: string
          endpoint: string
          id: string
          keys: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          endpoint: string
          id?: string
          keys: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          endpoint?: string
          id?: string
          keys?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'push_subscriptions_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      resume_certifications: {
        Row: {
          created_at: string
          date: string
          id: string
          institution: string
          name: string
          url: string | null
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          institution: string
          name: string
          url?: string | null
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          institution?: string
          name?: string
          url?: string | null
        }
        Relationships: []
      }
      resume_education: {
        Row: {
          created_at: string
          degree_en: string | null
          degree_ko: string | null
          degree_pt: string | null
          end_date: string | null
          id: string
          institution: string
          is_current: boolean | null
          location_en: string | null
          location_ko: string | null
          location_pt: string | null
          start_date: string
        }
        Insert: {
          created_at?: string
          degree_en?: string | null
          degree_ko?: string | null
          degree_pt?: string | null
          end_date?: string | null
          id?: string
          institution: string
          is_current?: boolean | null
          location_en?: string | null
          location_ko?: string | null
          location_pt?: string | null
          start_date: string
        }
        Update: {
          created_at?: string
          degree_en?: string | null
          degree_ko?: string | null
          degree_pt?: string | null
          end_date?: string | null
          id?: string
          institution?: string
          is_current?: boolean | null
          location_en?: string | null
          location_ko?: string | null
          location_pt?: string | null
          start_date?: string
        }
        Relationships: []
      }
      resume_experience: {
        Row: {
          company: string
          created_at: string
          description_en: string | null
          description_ko: string | null
          description_pt: string | null
          end_date: string | null
          id: string
          is_current: boolean | null
          location_en: string | null
          location_ko: string | null
          location_pt: string | null
          role_en: string | null
          role_ko: string | null
          role_pt: string | null
          start_date: string
        }
        Insert: {
          company: string
          created_at?: string
          description_en?: string | null
          description_ko?: string | null
          description_pt?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          location_en?: string | null
          location_ko?: string | null
          location_pt?: string | null
          role_en?: string | null
          role_ko?: string | null
          role_pt?: string | null
          start_date: string
        }
        Update: {
          company?: string
          created_at?: string
          description_en?: string | null
          description_ko?: string | null
          description_pt?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          location_en?: string | null
          location_ko?: string | null
          location_pt?: string | null
          role_en?: string | null
          role_ko?: string | null
          role_pt?: string | null
          start_date?: string
        }
        Relationships: []
      }
      resume_languages: {
        Row: {
          created_at: string
          id: string
          language_en: string | null
          language_ko: string | null
          language_pt: string | null
          level_en: string | null
          level_ko: string | null
          level_pt: string | null
          proficiency: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          language_en?: string | null
          language_ko?: string | null
          language_pt?: string | null
          level_en?: string | null
          level_ko?: string | null
          level_pt?: string | null
          proficiency?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          language_en?: string | null
          language_ko?: string | null
          language_pt?: string | null
          level_en?: string | null
          level_ko?: string | null
          level_pt?: string | null
          proficiency?: number | null
        }
        Relationships: []
      }
      resume_publications: {
        Row: {
          created_at: string
          date: string
          id: string
          summary_en: string | null
          summary_ko: string | null
          summary_pt: string | null
          title: string
          url: string | null
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          summary_en?: string | null
          summary_ko?: string | null
          summary_pt?: string | null
          title: string
          url?: string | null
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          summary_en?: string | null
          summary_ko?: string | null
          summary_pt?: string | null
          title?: string
          url?: string | null
        }
        Relationships: []
      }
      resume_skills: {
        Row: {
          category: string | null
          created_at: string
          id: string
          name: string
          proficiency: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          name: string
          proficiency?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          name?: string
          proficiency?: number | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          key: string
          value: Json
        }
        Insert: {
          created_at?: string
          key: string
          value: Json
        }
        Update: {
          created_at?: string
          key?: string
          value?: Json
        }
        Relationships: []
      }
      site_translations: {
        Row: {
          created_at: string
          key: string
          lang: string
          value: string
        }
        Insert: {
          created_at?: string
          key: string
          lang: string
          value: string
        }
        Update: {
          created_at?: string
          key?: string
          lang?: string
          value?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: never; Returns: boolean }
      is_admin_safe: { Args: never; Returns: boolean }
      log_security_activity: {
        Args: { action_text: string; details?: Json }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
