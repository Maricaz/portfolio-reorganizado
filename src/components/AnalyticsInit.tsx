import { useEffect } from 'react'

export const AnalyticsInit = () => {
  const GA_ID = import.meta.env.VITE_GA_ID || 'G-84ND40DRT6'

  useEffect(() => {
    if (!GA_ID) return

    // Inject Google Analytics Script if not present
    if (!document.getElementById('ga-script')) {
      const script1 = document.createElement('script')
      script1.id = 'ga-script'
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.id = 'ga-init'
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { 'send_page_view': false });
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
  }, [GA_ID])

  return null
}
