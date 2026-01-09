import { useState, useEffect } from 'react'
import { MusicTrack } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { PlatformSelector, Platform } from './PlatformSelector'
import { cn } from '@/lib/utils'
import { useAnalytics } from '@/hooks/use-analytics'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface TrackCardProps {
  track: MusicTrack
  isActive: boolean
  onPlay: (track: MusicTrack) => void
}

export const TrackCard = ({ track, isActive, onPlay }: TrackCardProps) => {
  const [platform, setPlatform] = useState<Platform>('native')
  const { trackMusicPlay } = useAnalytics()

  const handlePlatformChange = (p: Platform) => {
    setPlatform(p)
    if (p !== 'native' || isActive) {
      onPlay(track)
      trackMusicPlay(track.id, p)
    }
  }

  // If track becomes active, we can perform effects if needed
  useEffect(() => {
    if (!isActive) {
      setPlatform('native')
    }
  }, [isActive])

  const hasSpotify = !!track.spotify_track_id
  const hasDeezer = !!(track.deezer_track_id || track.deezer_id)
  const hasApple = !!track.apple_music_id
  const hasYoutube = !!track.youtube_video_id

  return (
    <Card
      className={cn(
        'overflow-hidden transition-all duration-300 border-l-4',
        isActive
          ? 'border-l-primary shadow-lg ring-1 ring-primary/20'
          : 'border-l-transparent hover:border-l-muted-foreground/50',
      )}
      id={`track-${track.id}`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div onClick={() => onPlay(track)} className="cursor-pointer group">
              <h3
                className={cn(
                  'text-xl font-bold transition-colors',
                  isActive ? 'text-primary' : 'group-hover:text-primary',
                )}
              >
                {track.title}
              </h3>
              <p className="text-sm text-muted-foreground">{track.artist}</p>
            </div>
            <PlatformSelector
              currentPlatform={platform}
              onSelect={handlePlatformChange}
              availablePlatforms={{
                spotify: hasSpotify,
                deezer: hasDeezer,
                apple: hasApple,
                youtube: hasYoutube,
              }}
            />
          </div>

          <div className="mt-2 rounded-lg overflow-hidden bg-muted/30">
            {platform === 'native' && (
              <div className="p-4 flex items-center justify-center bg-secondary/20">
                {track.audio_url ? (
                  <audio
                    controls
                    controlsList="nodownload"
                    className="w-full h-10 outline-none"
                    src={track.audio_url}
                    onPlay={() => {
                      if (!isActive) onPlay(track)
                      trackMusicPlay(track.id, 'native')
                    }}
                  >
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  <p className="text-sm text-muted-foreground py-2">
                    Preview not available
                  </p>
                )}
              </div>
            )}

            {platform === 'spotify' && track.spotify_track_id && (
              <iframe
                title={`Spotify - ${track.title}`}
                src={`https://open.spotify.com/embed/track/${track.spotify_track_id}`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="encrypted-media"
                className="rounded-md"
              />
            )}

            {platform === 'deezer' &&
              (track.deezer_track_id || track.deezer_id) && (
                <iframe
                  title={`Deezer - ${track.title}`}
                  src={`https://widget.deezer.com/widget/auto/track/${track.deezer_track_id || track.deezer_id}`}
                  width="100%"
                  height="130"
                  frameBorder="0"
                  allow="encrypted-media; clipboard-write"
                  className="rounded-md"
                />
              )}

            {platform === 'apple' && track.apple_music_id && (
              <iframe
                title={`Apple Music - ${track.title}`}
                src={`https://embed.music.apple.com/us/album/${track.apple_music_id}`}
                width="100%"
                height="150"
                frameBorder="0"
                allow="encrypted-media"
                className="rounded-md"
              />
            )}

            {platform === 'youtube' && track.youtube_video_id && (
              <AspectRatio ratio={16 / 9}>
                <iframe
                  title={`YouTube - ${track.title}`}
                  src={`https://www.youtube.com/embed/${track.youtube_video_id}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-md"
                />
              </AspectRatio>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
