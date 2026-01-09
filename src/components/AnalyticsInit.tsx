import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const AnalyticsInit = () => {
  const location = useLocation()

  useEffect(() => {
    // Inject Google Analytics Script
    if (!document.getElementById('ga-script')) {
      const script1 = document.createElement('script')
      script1.id = 'ga-script'
      script1.async = true
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.id = 'ga-init'
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `
      document.head.appendChild(script2)
    }

    // Inject CSP Meta Tag
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const meta = document.createElement('meta')
      meta.httpEquiv = 'Content-Security-Policy'
      // Relaxed CSP to allow images from external sources and inline styles/scripts typical in React apps
      meta.content =
        "default-src 'self' https:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https: data:; frame-src 'self' https:;"
      document.head.appendChild(meta)
    }
  }, [])

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  return null
}
