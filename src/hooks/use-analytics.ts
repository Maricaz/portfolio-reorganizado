import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>,
    ) => void
  }
}

export const useAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  const trackEvent = (
    eventName: string,
    params?: Record<string, string | number | boolean>,
  ) => {
    if (window.gtag) {
      window.gtag('event', eventName, params)
    }
    // Log to console for dev environment or verification
    if (import.meta.env.DEV) {
      console.log(`[Analytics] ${eventName}`, params)
    }
  }

  useEffect(() => {
    const handleOutboundClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const anchor = target.closest('a')
      if (
        anchor &&
        anchor.href &&
        anchor.href.startsWith('http') &&
        !anchor.href.includes(window.location.host)
      ) {
        trackEvent('click', {
          event_category: 'outbound',
          event_label: anchor.href,
          transport_type: 'beacon',
        })
      }
    }

    document.addEventListener('click', handleOutboundClick)
    return () => document.removeEventListener('click', handleOutboundClick)
  }, [])

  return { trackEvent }
}
