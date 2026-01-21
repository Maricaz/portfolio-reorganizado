import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { fetchMusic } from '@/lib/queries'
import { getAlbumConcept } from '@/services/music' // Keeping this service for AlbumConcept as per AC focus on fetchMusic
import { MusicTrack, AlbumConcept } from '@/types'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'
import { TrackCard } from '@/components/music/TrackCard'
import { SidePanel } from '@/components/music/SidePanel'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Info } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MusicPage() {
  const { t, language } = useLanguage()
  const { trackId } = useParams()
  const navigate = useNavigate()

  const [tracks, setTracks] = useState<MusicTrack[]>([])
  const [albumConcept, setAlbumConcept] = useState<AlbumConcept | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<MusicTrack | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useSEO({
    title: selectedTrack
      ? `${selectedTrack.title} - ${t.music.title}`
      : t.music.title,
    description: selectedTrack
      ? `Listen to ${selectedTrack.title} by ${selectedTrack.artist}`
      : t.music.description,
    type: 'music.song',
  })

  // Fetch data
  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      setLoading(true)
      try {
        const [tracksData, albumData] = await Promise.all([
          fetchMusic().catch((err) => {
            console.error('Failed to fetch music tracks:', err)
            throw err
          }),
          getAlbumConcept().catch((err) => {
            console.error('Failed to fetch album concept:', err)
            return null
          }),
        ])

        if (isMounted) {
          if (Array.isArray(tracksData)) {
            setTracks(tracksData)
          }

          if (albumData) {
            setAlbumConcept(albumData)
          }
        }
      } catch (error) {
        console.error('Unexpected error in MusicPage data fetch:', error)
        if (isMounted) setError('Failed to load music tracks.')
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [])

  // Handle URL param
  useEffect(() => {
    if (tracks.length > 0 && trackId) {
      const found = tracks.find(
        (t) => t.track_id === trackId || t.id === trackId,
      )
      if (found) {
        setSelectedTrack(found)
        // Scroll to track
        setTimeout(() => {
          const el = document.getElementById(`track-${found.id}`)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, 100)
      }
    }
  }, [tracks, trackId])

  const handleTrackPlay = (track: MusicTrack) => {
    if (selectedTrack?.id !== track.id) {
      setSelectedTrack(track)
      navigate(`/music/${track.track_id || track.id}`, { replace: true })
    }
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        <Alert variant="destructive" className="max-w-md">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen space-y-12">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8">
        {/* Main Content - Track List */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2 mb-4 animate-fade-in-down">
            <h1 className="text-4xl font-bold tracking-tight">
              {t.music.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t.music.description}
            </p>
          </div>

          <Alert className="bg-muted/50 border-primary/20 animate-fade-in">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm text-muted-foreground">
              {t.music.local_file_note}
            </AlertDescription>
          </Alert>

          {loading ? (
            <div className="space-y-4 mt-8">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-40 w-full rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6 pb-20">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TrackCard
                    track={track}
                    isActive={selectedTrack?.id === track.id}
                    onPlay={handleTrackPlay}
                  />
                </div>
              ))}
              {tracks.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                  No tracks available at the moment.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Side Panel - Sticky on Desktop */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 animate-fade-in-left">
            <SidePanel
              track={selectedTrack}
              albumConcept={albumConcept}
              globalLanguage={language}
            />
          </div>
        </div>
      </div>

      {/* Footer Playlist */}
      <div className="mt-12 border-t pt-8 animate-fade-in">
        <h3 className="text-xl font-semibold mb-4">
          {t.music.listen_on} Deezer
        </h3>
        <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
          <iframe
            title="Deezer Playlist"
            src="https://widget.deezer.com/widget/auto/playlist/1479458365"
            width="100%"
            height="300"
            frameBorder="0"
            allow="encrypted-media; clipboard-write"
          />
        </div>
      </div>
    </div>
  )
}
