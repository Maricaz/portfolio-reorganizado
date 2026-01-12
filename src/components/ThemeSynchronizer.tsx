import { useEffect } from 'react'
import { getSiteSettings } from '@/services/settings'

export const ThemeSynchronizer = () => {
  useEffect(() => {
    const syncTheme = async () => {
      try {
        const settings = await getSiteSettings()

        // Apply Primary Color
        if (settings.theme_primary_color) {
          document.documentElement.style.setProperty(
            '--primary',
            settings.theme_primary_color,
          )
        }

        // Apply Font Family
        if (settings.theme_font_family) {
          document.documentElement.style.setProperty(
            '--font-primary',
            settings.theme_font_family,
          )
        }
      } catch (error) {
        console.error('Failed to sync theme settings', error)
      }
    }

    syncTheme()
  }, [])

  return null
}
