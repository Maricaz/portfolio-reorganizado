import { supabase } from '@/lib/supabase/client'
import { translations } from '@/lib/translations'

export interface SiteTranslation {
  key: string
  lang: string
  value: string
}

export const getSiteTranslations = async () => {
  const { data, error } = await supabase.from('site_translations').select('*')

  if (error) {
    console.error('Error fetching translations:', error)
    return []
  }
  return data as SiteTranslation[]
}

export const upsertTranslation = async (
  key: string,
  lang: string,
  value: string,
) => {
  const { error } = await supabase
    .from('site_translations')
    .upsert({ key, lang, value })

  return { error }
}

// Utility to flatten translations object for the UI
export const flattenTranslations = (
  obj: any,
  prefix = '',
): Record<string, string> => {
  return Object.keys(obj).reduce((acc: any, k: string) => {
    const pre = prefix.length ? prefix + '.' : ''
    if (
      typeof obj[k] === 'object' &&
      obj[k] !== null &&
      !Array.isArray(obj[k])
    ) {
      Object.assign(acc, flattenTranslations(obj[k], pre + k))
    } else {
      acc[pre + k] = obj[k]
    }
    return acc
  }, {})
}

// Utility to merge DB translations into standard translation object
export const mergeTranslations = (
  base: typeof translations,
  dbTranslations: SiteTranslation[],
) => {
  const newTranslations = JSON.parse(JSON.stringify(base))

  dbTranslations.forEach(({ key, lang, value }) => {
    if (newTranslations[lang]) {
      const keys = key.split('.')
      let current = newTranslations[lang]
      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          current[keys[i]] = value
        } else {
          if (!current[keys[i]]) current[keys[i]] = {}
          current = current[keys[i]]
        }
      }
    }
  })

  return newTranslations
}
