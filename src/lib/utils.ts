import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export function getLocalizedValue(item: any, field: string, lang: string) {
  if (!item) return ''
  const key = `${field}_${lang}`
  // Fallback chain: specific lang -> english -> base field -> empty string
  return item[key] || item[`${field}_en`] || item[field] || ''
}
