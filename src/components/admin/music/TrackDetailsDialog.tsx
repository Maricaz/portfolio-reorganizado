import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { MusicTrack } from '@/types'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Music } from 'lucide-react'

interface TrackDetailsDialogProps {
  track: MusicTrack | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TrackDetailsDialog({
  track,
  open,
  onOpenChange,
}: TrackDetailsDialogProps) {
  if (!track) return null

  const lyrics = track.lyrics || {}
  const platforms = track.platforms || {}

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Music className="w-6 h-6" />
            Track Details
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex gap-6 items-start">
                {track.image_url ? (
                  <img
                    src={track.image_url}
                    alt={track.title}
                    className="w-32 h-32 rounded-lg object-cover shadow-md"
                  />
                ) : (
                  <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                    <Music className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{track.title}</h3>
                  <p className="text-muted-foreground text-lg">
                    {track.artist}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(platforms).map((p) => (
                      <Badge key={p} variant="outline" className="capitalize">
                        {p}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Audio Player */}
              {track.src_url && (
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-sm text-muted-foreground">
                    Preview
                  </h4>
                  <audio controls className="w-full h-10">
                    <source src={track.src_url} />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}

              {/* Lyrics */}
              <div className="space-y-2">
                <h4 className="font-semibold">Lyrics</h4>
                {Object.keys(lyrics).length > 0 ? (
                  <Tabs
                    defaultValue={Object.keys(lyrics)[0]}
                    className="w-full"
                  >
                    <TabsList>
                      {Object.keys(lyrics).map((lang) => (
                        <TabsTrigger
                          key={lang}
                          value={lang}
                          className="uppercase"
                        >
                          {lang}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {Object.entries(lyrics).map(([lang, text]) => (
                      <TabsContent key={lang} value={lang}>
                        <div className="p-4 bg-muted/20 rounded-lg whitespace-pre-wrap text-sm leading-relaxed border">
                          {text}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : (
                  <p className="text-muted-foreground italic">
                    No lyrics available.
                  </p>
                )}
              </div>

              {/* Platforms */}
              <div className="space-y-2">
                <h4 className="font-semibold">Platform Links</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(platforms).map(([platform, id]) => (
                    <div
                      key={platform}
                      className="flex items-center justify-between p-3 border rounded-md"
                    >
                      <span className="capitalize font-medium">{platform}</span>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {id}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
