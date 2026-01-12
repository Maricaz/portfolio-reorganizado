import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getSiteSettings } from '@/services/settings'

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
  keywords?: string
}

export const useSEO = ({
  title,
  description,
  image = '/og-image.png',
  type = 'website',
  jsonLd,
  keywords,
}: SeoProps) => {
  const { language } = useLanguage()
  const [globalSeo, setGlobalSeo] = useState<{
    title: string
    description: string
    keywords: string
  } | null>(null)

  useEffect(() => {
    // Ideally we would cache this or fetch it once in a provider,
    // but for now we fetch if not present to support the SEO requirement.
    const fetchGlobalSeo = async () => {
      const settings = await getSiteSettings()
      if (settings.seo_global) {
        setGlobalSeo(settings.seo_global)
      }
    }
    fetchGlobalSeo()
  }, [])

  useEffect(() => {
    // Set Title
    const siteTitle = globalSeo?.title || 'Portfolio'
    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle
    document.title = finalTitle

    // Meta Description
    const finalDescription = description || globalSeo?.description || ''

    // Meta Keywords
    const finalKeywords = keywords || globalSeo?.keywords || ''

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
    if (finalDescription) setMeta('description', finalDescription)
    if (finalKeywords) setMeta('keywords', finalKeywords)

    // Open Graph
    setMeta('og:title', finalTitle, 'property')
    if (finalDescription)
      setMeta('og:description', finalDescription, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:locale', language, 'property')

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image', 'name')
    setMeta('twitter:title', finalTitle, 'name')
    if (finalDescription)
      setMeta('twitter:description', finalDescription, 'name')
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
  }, [title, description, image, type, language, jsonLd, keywords, globalSeo])
}
