import { useEffect } from 'react'
import { getSiteSettings } from '@/services/settings'
import { useTheme } from '@/components/theme-provider'

export const ThemeSynchronizer = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    const syncTheme = async () => {
      try {
        const settings = await getSiteSettings()
        const config = settings.theme_config

        // Handle Legacy or New Config
        const primary = config?.primary || settings.theme_primary_color
        const font = config?.font || settings.theme_font_family
        const mode = config?.mode

        // Apply Primary Color
        if (primary) {
          document.documentElement.style.setProperty('--primary', primary)
        }

        // Apply Font Family
        if (font) {
          document.documentElement.style.setProperty('--font-primary', font)
        }

        // Apply Theme Mode
        if (mode) {
          setTheme(mode)
        }
      } catch (error) {
        console.error('Failed to sync theme settings', error)
      }
    }

    syncTheme()
  }, [setTheme])

  return null
}
