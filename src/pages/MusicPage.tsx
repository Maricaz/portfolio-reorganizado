import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { getMusicTracks } from '@/services/database'
import { MusicTrack, Language } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlayCircle, Clock, Music as MusicIcon } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'

export default function MusicPage() {
  const { t, language } = useLanguage()
  const { trackId } = useParams()
  const navigate = useNavigate()

  const [tracks, setTracks] = useState<MusicTrack[]>([])
  const [selectedTrack, setSelectedTrack] = useState<MusicTrack | null>(null)
  const [loading, setLoading] = useState(true)
  const [lyricsLang, setLyricsLang] = useState<Language>(language)

  useSEO({
    title: selectedTrack
      ? `${selectedTrack.title} - ${t.music.title}`
      : t.music.title,
    description: selectedTrack
      ? `Listen to ${selectedTrack.title} by ${selectedTrack.artist}`
      : 'My music tracks and production portfolio',
    type: 'music.song',
    jsonLd: selectedTrack
      ? {
          '@context': 'https://schema.org',
          '@type': 'MusicRecording',
          name: selectedTrack.title,
          byArtist: {
            '@type': 'MusicGroup',
            name: selectedTrack.artist,
          },
          duration: selectedTrack.duration,
          inAlbum: {
            '@type': 'MusicAlbum',
            name: 'Portfolio Tracks',
          },
        }
      : undefined,
  })

  useEffect(() => {
    getMusicTracks().then(({ data }) => {
      if (data) {
        setTracks(data)
        if (trackId) {
          const found = data.find((t) => t.id === trackId)
          if (found) setSelectedTrack(found)
          else if (data.length > 0) setSelectedTrack(data[0])
        } else if (data.length > 0) {
          setSelectedTrack(data[0])
        }
      }
      setLoading(false)
    })
  }, [trackId])

  const handleTrackSelect = (track: MusicTrack) => {
    setSelectedTrack(track)
    navigate(`/music/${track.id}`)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-10rem)] min-h-[600px]">
      {/* Track List */}
      <Card className="lg:col-span-4 h-full flex flex-col border-border/50 shadow-md">
        <CardHeader className="pb-3 border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2">
            <MusicIcon className="h-5 w-5 text-primary" />
            {t.music.original}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-full">
            {loading ? (
              <div className="space-y-4 p-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            ) : (
              <div className="flex flex-col">
                {tracks.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => handleTrackSelect(track)}
                    className={`flex items-center gap-4 p-4 text-left transition-all border-l-4 hover:bg-muted/50 ${
                      selectedTrack?.id === track.id
                        ? 'bg-primary/5 border-l-primary'
                        : 'border-l-transparent'
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        selectedTrack?.id === track.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      <PlayCircle className="h-6 w-6" />
                    </div>
                    <div className="overflow-hidden flex-1">
                      <p
                        className={`font-bold truncate ${selectedTrack?.id === track.id ? 'text-primary' : ''}`}
                      >
                        {track.title}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {track.artist}
                      </p>
                    </div>
                    {track.duration && (
                      <div className="text-xs text-muted-foreground flex items-center gap-1 bg-muted px-2 py-1 rounded">
                        <Clock className="h-3 w-3" />
                        {track.duration}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Player and Lyrics */}
      <div className="lg:col-span-8 flex flex-col gap-6 h-full overflow-hidden">
        {selectedTrack ? (
          <>
            <div className="w-full bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 p-6 flex flex-col gap-4 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold">{selectedTrack.title}</h2>
                <p className="text-muted-foreground">{selectedTrack.artist}</p>
              </div>

              {selectedTrack.audio_url ? (
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <audio
                    controls
                    className="w-full focus:outline-none"
                    src={selectedTrack.audio_url}
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ) : selectedTrack.deezer_id ? (
                <iframe
                  title="Deezer Widget"
                  src={`https://widget.deezer.com/widget/auto/track/${selectedTrack.deezer_id}`}
                  width="100%"
                  height="130"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media; clipboard-write"
                  className="rounded-lg shadow-sm"
                />
              ) : (
                <div className="h-24 flex items-center justify-center bg-muted/30 rounded-lg text-muted-foreground">
                  No audio source available
                </div>
              )}
            </div>

            <Card className="flex-1 overflow-hidden flex flex-col shadow-md border-border/50 animate-slide-up">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 py-4 px-6 border-b bg-muted/10">
                <CardTitle className="text-lg font-medium">
                  {t.music.lyrics}
                </CardTitle>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-muted-foreground hidden sm:inline uppercase tracking-wider">
                    {t.music.select_lang}
                  </span>
                  <Tabs
                    value={lyricsLang}
                    onValueChange={(v) => setLyricsLang(v as Language)}
                    className="h-8"
                  >
                    <TabsList className="h-9">
                      <TabsTrigger value="pt" className="text-xs px-3">
                        PT
                      </TabsTrigger>
                      <TabsTrigger value="en" className="text-xs px-3">
                        EN
                      </TabsTrigger>
                      <TabsTrigger value="ko" className="text-xs px-3">
                        KO
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-8">
                <div className="max-w-2xl mx-auto text-center">
                  <div className="animate-fade-in key={lyricsLang} whitespace-pre-line text-lg leading-loose text-foreground/90 font-medium">
                    {selectedTrack[`lyrics_${lyricsLang}`] ? (
                      selectedTrack[`lyrics_${lyricsLang}`]
                    ) : (
                      <div className="flex flex-col items-center justify-center h-40 text-muted-foreground opacity-50">
                        <p>Lyrics not available in this language.</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground bg-muted/10 rounded-xl border border-dashed">
            <div className="text-center">
              <MusicIcon className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>Select a track to start listening</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
