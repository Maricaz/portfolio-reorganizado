import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void
  }
}

export const RouteChangeTracker = () => {
  const location = useLocation()
  const GA_MEASUREMENT_ID = 'G-84ND40DRT6'

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search + location.hash,
      })
    }
  }, [location])

  return null
}
