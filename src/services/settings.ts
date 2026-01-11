import { supabase } from '@/lib/supabase/client'
import { SiteSettings } from '@/types'

export const getSiteSettings = async (): Promise<
  Partial<SiteSettings> & { home_hero_image?: string }
> => {
  const { data, error } = await supabase
    .from('site_settings')
    .select('key, value')

  if (error) {
    console.error('Error fetching site settings:', error)
    return {}
  }

  const settings: Partial<SiteSettings> & { home_hero_image?: string } = {}

  data.forEach((item) => {
    if (item.key === 'brand_config') {
      settings.brand_config = item.value
    } else if (item.key === 'resume_config') {
      settings.resume_config = item.value
    } else if (item.key === 'home_hero_image') {
      settings.home_hero_image =
        typeof item.value === 'string' ? item.value : String(item.value)
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
