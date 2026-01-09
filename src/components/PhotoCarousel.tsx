import { useState, useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card } from '@/components/ui/card'
import { Image as ImageIcon } from 'lucide-react'
import { useAnalytics } from '@/hooks/use-analytics'
import { cn } from '@/lib/utils'

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
  const { trackCarouselNav } = useAnalytics()

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

  if (images.length === 0) {
    return (
      <Card className="neon-card glass-soft w-full h-full min-h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground space-y-4">
          <ImageIcon className="w-12 h-12 opacity-50" />
          <p>No photos found</p>
        </div>
      </Card>
    )
  }

  return (
    <div className="w-full relative group">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        plugins={auto ? [Autoplay({ delay })] : []}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl neon-border glass-soft">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                    <p className="text-white font-medium text-lg truncate">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="left-4 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => trackCarouselNav('prev')}
        />
        <CarouselNext
          className="right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => trackCarouselNav('next')}
        />
      </Carousel>
    </div>
  )
}
