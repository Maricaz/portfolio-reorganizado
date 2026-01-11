import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TracksTab } from '@/components/admin/music/TracksTab'
import { PlaylistsTab } from '@/components/admin/music/PlaylistsTab'

export default function MusicManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Music Manager</h1>
          <p className="text-muted-foreground">
            Manage your tracks, playlists and audio files.
          </p>
        </div>
      </div>

      <Tabs defaultValue="tracks" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="tracks">Tracks</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
        </TabsList>
        <TabsContent value="tracks" className="mt-6">
          <TracksTab />
        </TabsContent>
        <TabsContent value="playlists" className="mt-6">
          <PlaylistsTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
