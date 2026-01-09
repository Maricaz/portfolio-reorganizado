import { supabase } from '@/lib/supabase/client'
import { SiteSettings } from '@/types'

export const getSiteSettings = async (): Promise<Partial<SiteSettings>> => {
  const { data, error } = await supabase
    .from('site_settings')
    .select('key, value')

  if (error) {
    console.error('Error fetching site settings:', error)
    return {}
  }

  const settings: Partial<SiteSettings> = {}

  data.forEach((item) => {
    if (item.key === 'brand_config') {
      settings.brand_config = item.value
    } else if (item.key === 'resume_config') {
      settings.resume_config = item.value
    }
  })

  return settings
}
