import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void
  }
}

export const useAnalytics = () => {
  const location = useLocation()
  const GA_ID = import.meta.env.VITE_GA_ID

  const gtagSafe = (command: string, ...args: any[]) => {
    if (typeof window.gtag === 'function') {
      window.gtag(command, ...args)
    } else {
      if (import.meta.env.DEV) {
        // console.log(`[Analytics Mock] ${command}`, ...args)
      }
    }
  }

  // Initialize page view tracking
  useEffect(() => {
    if (GA_ID) {
      gtagSafe('config', GA_ID, {
        page_path: location.pathname + location.search,
      })
    }
  }, [location, GA_ID])

  const trackEvent = (
    eventName: string,
    params?: Record<string, string | number | boolean>,
  ) => {
    gtagSafe('event', eventName, params)
  }

  const trackContactSubmit = (success: boolean) => {
    trackEvent('contact_submit', {
      success,
      timestamp: new Date().toISOString(),
    })
  }

  const trackResumeDownload = () => {
    trackEvent('resume_download', {
      timestamp: new Date().toISOString(),
    })
  }

  const trackProjectOpen = (projectTitle: string, url: string) => {
    trackEvent('project_open', {
      project_title: projectTitle,
      url: url,
    })
  }

  const trackAudioPlay = (trackTitle: string) => {
    trackEvent('audio_play', {
      track_title: trackTitle,
    })
  }

  const trackThemeToggle = (theme: 'light' | 'dark') => {
    trackEvent('theme_toggle', {
      theme,
    })
  }

  const trackLanguageChange = (languageLabel: string) => {
    trackEvent('language_change', {
      language: languageLabel,
    })
  }

  const trackCarouselNav = (direction: 'prev' | 'next') => {
    trackEvent('carousel_nav', {
      direction,
    })
  }

  const trackBookSynopsisToggle = (
    bookTitle: string,
    state: 'open' | 'closed',
  ) => {
    trackEvent('book_synopsis_toggle', {
      book_title: bookTitle,
      state,
    })
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

  return {
    trackEvent,
    trackContactSubmit,
    trackResumeDownload,
    trackProjectOpen,
    trackAudioPlay,
    trackThemeToggle,
    trackLanguageChange,
    trackCarouselNav,
    trackBookSynopsisToggle,
  }
}
