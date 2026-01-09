import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { Language } from '@/types'
import { translations } from '@/lib/translations'
import { useAnalytics } from '@/hooks/use-analytics'
import { supabase } from '@/lib/supabase/client'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.pt
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { trackEvent } = useAnalytics()
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language')
    return (saved as Language) || 'pt'
  })

  // Sync with Supabase on mount and auth state change
  useEffect(() => {
    const fetchProfileLanguage = async (userId: string) => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('language')
          .eq('id', userId)
          .single()

        if (!error && data?.language) {
          const profileLang = data.language as Language
          setLanguageState(profileLang)
          localStorage.setItem('app_language', profileLang)
          document.documentElement.lang = profileLang
        }
      } catch (error) {
        console.error('Error fetching language preference:', error)
      }
    }

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchProfileLanguage(session.user.id)
      }
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        fetchProfileLanguage(session.user.id)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('app_language', language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang)
    trackEvent('language_change', { language: lang })

    // Update Supabase if user is logged in
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (session?.user) {
      try {
        await supabase.from('profiles').upsert({
          id: session.user.id,
          language: lang,
          updated_at: new Date().toISOString(),
        })
      } catch (error) {
        console.error('Error saving language preference:', error)
      }
    }
  }

  // Fallback to 'pt' if translation is missing
  const t = translations[language] || translations.pt

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
