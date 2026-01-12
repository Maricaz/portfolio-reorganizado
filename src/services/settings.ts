import { supabase } from '@/lib/supabase/client'
import { SiteSettings } from '@/types'

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system'
  primary: string
  font: string
}

export const getSiteSettings = async (): Promise<
  Partial<SiteSettings> & {
    home_hero_image?: string
    theme_config?: ThemeConfig
    seo_global?: {
      title: string
      description: string
      keywords: string
    }
    theme_primary_color?: string
    theme_font_family?: string
  }
> => {
  const { data, error } = await supabase
    .from('site_settings')
    .select('key, value')

  if (error) {
    console.error('Error fetching site settings:', error)
    return {}
  }

  const settings: any = {}

  data.forEach((item) => {
    if (item.key === 'brand_config') {
      settings.brand_config = item.value
    } else if (item.key === 'resume_config') {
      settings.resume_config = item.value
    } else if (item.key === 'home_hero_image') {
      settings.home_hero_image =
        typeof item.value === 'string' ? item.value : String(item.value)
    } else if (item.key === 'seo_global') {
      settings.seo_global = item.value
    } else if (item.key === 'theme_config') {
      settings.theme_config = item.value
    } else if (item.key === 'theme_primary_color') {
      settings.theme_primary_color = String(item.value)
    } else if (item.key === 'theme_font_family') {
      settings.theme_font_family = String(item.value)
    }
  })

  return settings
}

export const upsertSiteSetting = async (key: string, value: any) => {
  const { error } = await supabase
    .from('site_settings')
    .upsert({ key, value }, { onConflict: 'key' })

  return { error }
}
