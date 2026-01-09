import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface JsonLdProps {
  '@context': string
  '@type': string
  [key: string]: any
}

interface SeoProps {
  title?: string
  description?: string
  image?: string
  type?: string
  jsonLd?: JsonLdProps
}

export const useSEO = ({
  title,
  description,
  image = '/og-image.png',
  type = 'website',
  jsonLd,
}: SeoProps) => {
  const { language } = useLanguage()

  useEffect(() => {
    // Set Title
    const finalTitle = title ? `${title} | Portfolio` : 'Portfolio'
    document.title = finalTitle

    // Helper to set meta tag
    const setMeta = (
      name: string,
      content: string,
      attr: 'name' | 'property' = 'name',
    ) => {
      let element = document.querySelector(`meta[${attr}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attr, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Standard Meta
    if (description) setMeta('description', description)

    // Open Graph
    setMeta('og:title', finalTitle, 'property')
    if (description) setMeta('og:description', description, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:locale', language, 'property')

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image', 'name')
    setMeta('twitter:title', finalTitle, 'name')
    if (description) setMeta('twitter:description', description, 'name')
    setMeta('twitter:image', image, 'name')

    // Set HTML Lang Attribute
    document.documentElement.lang = language

    // JSON-LD
    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]')
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    }

    // CSP is handled in index.html, but we should ensure valid meta tags
  }, [title, description, image, type, language, jsonLd])
}
