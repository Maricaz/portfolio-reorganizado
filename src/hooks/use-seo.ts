import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface SeoProps {
  title?: string
  description?: string
}

export const useSEO = ({ title, description }: SeoProps) => {
  const { language } = useLanguage()

  useEffect(() => {
    // Set Title
    if (title) {
      document.title = `${title} | Portfolio`
    } else {
      document.title = 'Portfolio'
    }

    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    if (description) {
      metaDescription.setAttribute('content', description)
    }

    // Set HTML Lang Attribute
    document.documentElement.lang = language
  }, [title, description, language])
}
