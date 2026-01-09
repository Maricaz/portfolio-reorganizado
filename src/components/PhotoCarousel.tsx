import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useAnalytics } from '@/hooks/use-analytics'

interface PhotoCarouselProps {
  auto?: boolean
  delay?: number
}

type GlobModule = {
  default: string
}

export function PhotoCarousel({
  auto = true,
  delay = 4000,
}: PhotoCarouselProps) {
  const [images, setImages] = useState<
    Array<{ src: string; alt: string; id: string }>
  >([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { trackCarouselNav } = useAnalytics()

  const plugins = []
  if (auto) {
    plugins.push(
      Autoplay({ delay, stopOnInteraction: true, stopOnMouseEnter: true }),
    )
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins)

  useEffect(() => {
    const globImports = import.meta.glob<GlobModule>(
      '../media/sobre/*.{jpg,jpeg,png,webp}',
      { eager: true },
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
      trackCarouselNav('prev')
    }
  }, [emblaApi, trackCarouselNav])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      trackCarouselNav('next')
    }
  }, [emblaApi, trackCarouselNav])

  if (images.length === 0) {
    return (
      <Card className="neon-card glass-soft w-full h-full min-h-[300px] flex items-center justify-center">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground space-y-4">
          <ImageIcon className="w-12 h-12 opacity-50" />
          <p>No photos found</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl neon-border glass-soft group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative flex-[0_0_100%] min-w-0 h-[400px] sm:h-[500px] flex items-center justify-center bg-black/5"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={scrollPrev}
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={scrollNext}
        aria-label="Next photo"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === selectedIndex ? 'bg-white w-6' : 'bg-white/50',
            )}
          />
        ))}
      </div>
    </div>
  )
}
