import { useState, useEffect } from 'react'
import { MusicTrack, AlbumSettings, Language } from '@/types'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Eye, EyeOff, Music, Disc } from 'lucide-react'
import { LanguageSwitchControlled } from '@/components/LanguageSwitch'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface SidePanelProps {
  track: MusicTrack | null
  albumSettings: AlbumSettings | null
  globalLanguage: Language
}

export const SidePanel = ({
  track,
  albumSettings,
  globalLanguage,
}: SidePanelProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lyricsLang, setLyricsLang] = useState<Language>(globalLanguage)

  // Sync lyrics language with global language when it changes
  useEffect(() => {
    setLyricsLang(globalLanguage)
  }, [globalLanguage])

  // Save preference to local storage
  useEffect(() => {
    const saved = localStorage.getItem('lyrics_language')
    if (saved) {
      setLyricsLang(saved as Language)
    }
  }, [])

  const handleLangChange = (lang: Language) => {
    setLyricsLang(lang)
    localStorage.setItem('lyrics_language', lang)
  }

  const getLyrics = () => {
    if (!track) return ''
    if (track.lyrics && track.lyrics[lyricsLang])
      return track.lyrics[lyricsLang]
    // Fallback order: language specific col -> pt -> en -> 'Not found'
    // Also check legacy columns if jsonb is not populated correctly in type (though we rely on JSONB mainly)
    const specific = track.lyrics?.[lyricsLang]
    if (specific) return specific

    // Fallback to PT then EN
    return (
      track.lyrics?.['pt'] ||
      track.lyrics?.['en'] ||
      'Lyrics not available for this language.'
    )
  }

  const getAlbumDescription = () => {
    if (!albumSettings) return ''
    const key = `description_${globalLanguage}` as keyof AlbumSettings
    return (albumSettings[key] as string) || albumSettings.description_en || ''
  }

  if (!isVisible) {
    return (
      <div className="h-full border rounded-xl flex items-center justify-center bg-muted/10 p-4 min-h-[100px]">
        <Button
          variant="outline"
          onClick={() => setIsVisible(true)}
          className="gap-2"
        >
          <Eye className="h-4 w-4" />
          Show Details
        </Button>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col border rounded-xl bg-card shadow-sm overflow-hidden min-h-[400px]">
      <div className="p-4 border-b flex items-center justify-between bg-muted/20">
        <div className="flex items-center gap-2 font-semibold">
          {track ? (
            <>
              <Music className="h-4 w-4 text-primary" />
              <span>Lyrics</span>
            </>
          ) : (
            <>
              <Disc className="h-4 w-4 text-primary" />
              <span>Album Concept</span>
            </>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsVisible(false)}
          title="Hide panel"
        >
          <EyeOff className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 max-h-[calc(100vh-200px)]">
        <div className="p-6">
          {track ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-lg font-bold">{track.title}</h2>
                <LanguageSwitchControlled
                  value={lyricsLang}
                  onChange={handleLangChange}
                />
              </div>
              <div className="whitespace-pre-line text-muted-foreground leading-relaxed text-center font-medium animate-fade-in">
                {getLyrics()}
              </div>
            </div>
          ) : albumSettings ? (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">
                {albumSettings.title}
              </h2>
              {albumSettings.cover_url && (
                <div className="rounded-lg overflow-hidden shadow-md max-w-[200px] mx-auto">
                  <AspectRatio ratio={1}>
                    <img
                      src={albumSettings.cover_url}
                      alt={albumSettings.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              )}
              {albumSettings.video_url && (
                <div className="rounded-lg overflow-hidden shadow-md">
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src={albumSettings.video_url}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      title="Album Concept Video"
                    />
                  </AspectRatio>
                </div>
              )}
              <p className="text-lg leading-relaxed text-muted-foreground indent-pt text-justify">
                {getAlbumDescription()}
              </p>
            </div>
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              Select a track to see lyrics or wait for album details to load.
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
