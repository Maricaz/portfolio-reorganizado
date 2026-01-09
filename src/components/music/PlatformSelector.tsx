import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Play } from 'lucide-react'

export type Platform = 'native' | 'spotify' | 'deezer' | 'apple' | 'youtube'

interface PlatformSelectorProps {
  currentPlatform: Platform
  onSelect: (platform: Platform) => void
  availablePlatforms: {
    spotify?: boolean
    deezer?: boolean
    apple?: boolean
    youtube?: boolean
  }
}

export const PlatformSelector = ({
  currentPlatform,
  onSelect,
  availablePlatforms,
}: PlatformSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button
        variant={currentPlatform === 'native' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onSelect('native')}
        className={cn(
          'gap-2',
          currentPlatform === 'native' && 'bg-primary text-primary-foreground',
        )}
      >
        <Play className="h-3 w-3" />
        Native
      </Button>

      {availablePlatforms.spotify && (
        <Button
          variant={currentPlatform === 'spotify' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelect('spotify')}
          className="gap-2"
        >
          <img
            src="https://img.usecurling.com/i?q=spotify&shape=fill&color=green"
            alt="Spotify"
            className="h-4 w-4"
          />
          Spotify
        </Button>
      )}

      {availablePlatforms.deezer && (
        <Button
          variant={currentPlatform === 'deezer' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelect('deezer')}
          className="gap-2"
        >
          <img
            src="https://img.usecurling.com/i?q=deezer&shape=fill&color=multicolor"
            alt="Deezer"
            className="h-4 w-4"
          />
          Deezer
        </Button>
      )}

      {availablePlatforms.apple && (
        <Button
          variant={currentPlatform === 'apple' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelect('apple')}
          className="gap-2"
        >
          <img
            src="https://img.usecurling.com/i?q=apple&shape=fill&color=black"
            alt="Apple Music"
            className="h-4 w-4 dark:invert"
          />
          Apple Music
        </Button>
      )}

      {availablePlatforms.youtube && (
        <Button
          variant={currentPlatform === 'youtube' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelect('youtube')}
          className="gap-2"
        >
          <img
            src="https://img.usecurling.com/i?q=youtube&shape=fill&color=red"
            alt="YouTube"
            className="h-4 w-4"
          />
          YouTube
        </Button>
      )}
    </div>
  )
}
