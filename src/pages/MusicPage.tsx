import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { getMusicTracks } from '@/services/database'
import { MusicTrack, Language } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlayCircle } from 'lucide-react'
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

  // Sync initial lyrics lang with page lang, but allow divergence
  useEffect(() => {
    setLyricsLang(language)
  }, [language])

  const handleTrackSelect = (track: MusicTrack) => {
    setSelectedTrack(track)
    navigate(`/music/${track.id}`)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-8rem)]">
      {/* Track List */}
      <Card className="lg:col-span-1 h-full flex flex-col border-border/50">
        <CardHeader>
          <CardTitle>{t.music.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-full px-4">
            {loading ? (
              <div className="space-y-4 pt-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            ) : (
              <div className="space-y-2 pb-4">
                {tracks.map((track) => (
                  <div
                    key={track.id}
                    onClick={() => handleTrackSelect(track)}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${selectedTrack?.id === track.id ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted'}`}
                  >
                    <div className="h-10 w-10 bg-secondary rounded flex items-center justify-center">
                      <PlayCircle
                        className={`h-6 w-6 ${selectedTrack?.id === track.id ? 'text-primary' : 'text-muted-foreground'}`}
                      />
                    </div>
                    <div className="overflow-hidden">
                      <p
                        className={`font-medium truncate ${selectedTrack?.id === track.id ? 'text-primary' : ''}`}
                      >
                        {track.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {track.artist}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Player and Lyrics */}
      <div className="lg:col-span-2 space-y-6 flex flex-col h-full overflow-hidden">
        {selectedTrack ? (
          <>
            <div className="w-full bg-background rounded-xl overflow-hidden shadow-elevation border border-border/50">
              <iframe
                title="Deezer Widget"
                src={`https://widget.deezer.com/widget/auto/track/${selectedTrack.deezer_id}`}
                width="100%"
                height="150"
                frameBorder="0"
                allowTransparency={true}
                allow="encrypted-media; clipboard-write"
              />
            </div>

            <Card className="flex-1 overflow-hidden flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                <CardTitle className="text-lg font-medium">
                  {t.music.lyrics}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground hidden sm:inline">
                    {t.music.lyrics_lang}
                  </span>
                  <Tabs
                    value={lyricsLang}
                    onValueChange={(v) => setLyricsLang(v as Language)}
                    className="h-8"
                  >
                    <TabsList className="h-8">
                      <TabsTrigger value="pt" className="text-xs h-6 px-2">
                        PT
                      </TabsTrigger>
                      <TabsTrigger value="en" className="text-xs h-6 px-2">
                        EN
                      </TabsTrigger>
                      <TabsTrigger value="ko" className="text-xs h-6 px-2">
                        KO
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-6 font-medium text-lg text-center leading-loose text-muted-foreground/80">
                <div className="animate-fade-in key={lyricsLang}">
                  {selectedTrack[`lyrics_${lyricsLang}`] ? (
                    <div className="whitespace-pre-line">
                      {selectedTrack[`lyrics_${lyricsLang}`]}
                    </div>
                  ) : (
                    <p className="text-sm italic opacity-50">
                      No lyrics available for this language.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Select a track to play
          </div>
        )}
      </div>
    </div>
  )
}
