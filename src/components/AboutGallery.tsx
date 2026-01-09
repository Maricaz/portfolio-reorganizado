import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { useAnalytics } from '@/hooks/use-analytics'
import { cn } from '@/lib/utils'

type GlobModule = {
  default: string
}

export function AboutGallery() {
  const { t } = useLanguage()
  const { trackEvent } = useAnalytics()
  const [images, setImages] = useState<
    Array<{ src: string; alt: string; id: string }>
  >([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Embla setup with Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ])

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches && emblaApi) {
      emblaApi.plugins().autoplay?.stop()
    }
  }, [emblaApi])

  useEffect(() => {
    const globImports = import.meta.glob<GlobModule>(
      '../media/sobre/*.{jpg,jpeg,png,webp}',
      {
        eager: true,
      },
    )

    const loadedImages = Object.entries(globImports)
      .map(([path, mod]) => {
        const filename = path.split('/').pop() || ''
        const caption = filename
          .split('.')
          .slice(0, -1)
          .join('.')
          .replace(/[-_]/g, ' ')

        return {
          src: mod.default,
          alt: caption,
          id: filename,
        }
      })
      .sort((a, b) => a.alt.localeCompare(b.alt))

    setImages(loadedImages)
  }, [])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      trackEvent('carousel_nav', { direction: 'prev' })
    }
  }, [emblaApi, trackEvent])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      trackEvent('carousel_nav', { direction: 'next' })
    }
  }, [emblaApi, trackEvent])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index)
        trackEvent('carousel_nav', { direction: 'dot', index })
      }
    },
    [emblaApi, trackEvent],
  )

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowLeft') scrollPrev()
      if (event.key === 'ArrowRight') scrollNext()
    },
    [scrollPrev, scrollNext],
  )

  if (images.length === 0) {
    return (
      <Card className="neon-card glass-soft w-full max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-12 text-center text-muted-foreground space-y-4">
          <ImageIcon className="w-16 h-16 opacity-50" />
          <p>{t.about.carousel_hint}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div
      className="relative w-full max-w-5xl mx-auto glass-soft rounded-2xl p-4 sm:p-6 overflow-hidden neon-border"
      role="region"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative flex-[0_0_100%] min-w-0 pl-4 first:pl-0 h-[40vh] sm:h-[50vh] md:h-[60vh] max-h-[560px] flex items-center justify-center"
            >
              <div
                className={cn(
                  'w-full h-full relative transition-opacity duration-500 ease-out',
                  Math.abs(selectedIndex - index) <= 1
                    ? 'opacity-100'
                    : 'opacity-0',
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center text-sm backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full shadow-lg backdrop-blur-sm transition-all"
        onClick={scrollPrev}
        aria-label={t.about.carousel_prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full shadow-lg backdrop-blur-sm transition-all"
        onClick={scrollNext}
        aria-label={t.about.carousel_next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm',
              index === selectedIndex
                ? 'bg-primary scale-110'
                : 'bg-primary/30 hover:bg-primary/50',
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
