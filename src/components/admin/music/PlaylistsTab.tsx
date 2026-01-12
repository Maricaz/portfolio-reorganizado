import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  getPlaylists,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
  getPlaylistTracks,
  addTrackToPlaylist,
  removeTrackFromPlaylist,
  getMusicTracks,
} from '@/services/music'
import { uploadFile } from '@/services/storage'
import { Playlist, PlaylistTrack, MusicTrack } from '@/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import {
  Plus,
  Pencil,
  Trash,
  ListMusic,
  Loader2,
  Image as ImageIcon,
  X,
} from 'lucide-react'
import { ExportButton } from '@/components/admin/ExportButton'

const playlistSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  image_url: z.string().optional(),
})

type PlaylistFormValues = z.infer<typeof playlistSchema>

export function PlaylistsTab() {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  // Track Management
  const [managingId, setManagingId] = useState<string | null>(null)
  const [playlistTracks, setPlaylistTracks] = useState<PlaylistTrack[]>([])
  const [availableTracks, setAvailableTracks] = useState<MusicTrack[]>([])
  const [selectedTrackToAdd, setSelectedTrackToAdd] = useState<string>('')

  const { toast } = useToast()

  const form = useForm<PlaylistFormValues>({
    resolver: zodResolver(playlistSchema),
    defaultValues: {
      name: '',
      description: '',
      image_url: '',
    },
  })

  const loadPlaylists = async () => {
    try {
      setLoading(true)
      const data = await getPlaylists()
      setPlaylists(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load playlists',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const loadTracksForPlaylist = async (playlistId: string) => {
    try {
      const pTracks = await getPlaylistTracks(playlistId)
      setPlaylistTracks(pTracks)

      const allTracks = await getMusicTracks()
      setAvailableTracks(allTracks as MusicTrack[])
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: 'Failed to load playlist tracks',
        variant: 'destructive',
      })
    }
  }

  useEffect(() => {
    loadPlaylists()
  }, [])

  const handleEdit = (playlist: Playlist) => {
    setEditingId(playlist.id)
    form.reset({
      name: playlist.name,
      description: playlist.description || '',
      image_url: playlist.image_url || '',
    })
    setImagePreview(playlist.image_url || null)
    setIsOpen(true)
  }

  const handleAddNew = () => {
    setEditingId(null)
    form.reset({
      name: '',
      description: '',
      image_url: '',
    })
    setImagePreview(null)
    setIsOpen(true)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Show preview immediately
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    try {
      setUploading(true)
      // Upload to 'playlist-covers' bucket
      const url = await uploadFile(file, 'playlist-covers', 'covers')
      form.setValue('image_url', url)
      toast({ title: 'Success', description: 'Cover image uploaded' })
    } catch (error) {
      toast({
        title: 'Upload Error',
        description: 'Failed to upload image',
        variant: 'destructive',
      })
    } finally {
      setUploading(false)
    }
  }

  const onSubmit = async (values: PlaylistFormValues) => {
    try {
      if (editingId) {
        await updatePlaylist(editingId, values)
        toast({ title: 'Success', description: 'Playlist updated' })
      } else {
        await createPlaylist(values)
        toast({ title: 'Success', description: 'Playlist created' })
      }
      setIsOpen(false)
      loadPlaylists()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Operation failed',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: string) => {
    if (
      !confirm(
        'Are you sure? This will delete the playlist but keep the tracks.',
      )
    )
      return
    try {
      await deletePlaylist(id)
      loadPlaylists()
      toast({ title: 'Success', description: 'Playlist deleted' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete',
        variant: 'destructive',
      })
    }
  }

  const handleManageTracks = (playlist: Playlist) => {
    setManagingId(playlist.id)
    loadTracksForPlaylist(playlist.id)
  }

  const onAddTrack = async () => {
    if (!managingId || !selectedTrackToAdd) return
    try {
      // Get current max order index
      const maxOrder = playlistTracks.reduce(
        (max, t) => Math.max(max, t.order_index),
        -1,
      )
      await addTrackToPlaylist(managingId, selectedTrackToAdd, maxOrder + 1)
      await loadTracksForPlaylist(managingId)
      setSelectedTrackToAdd('')
      toast({ title: 'Success', description: 'Track added to playlist' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add track',
        variant: 'destructive',
      })
    }
  }

  const onRemoveTrack = async (trackId: string) => {
    if (!managingId) return
    try {
      await removeTrackFromPlaylist(managingId, trackId)
      await loadTracksForPlaylist(managingId)
      toast({ title: 'Success', description: 'Track removed from playlist' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to remove track',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Playlists</h2>
          <p className="text-muted-foreground">
            Curate collections of music tracks with custom covers.
          </p>
        </div>
        <div className="flex gap-2">
          <ExportButton data={playlists} filename="playlists_export" />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleAddNew}>
                <Plus className="mr-2 h-4 w-4" /> Create Playlist
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingId ? 'Edit Playlist' : 'Create Playlist'}
                </DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="My Awesome Playlist" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="A short description..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormLabel>Cover Image</FormLabel>
                    <div className="flex flex-col gap-4">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading}
                      />
                      {imagePreview && (
                        <div className="relative aspect-square w-32 border rounded-md overflow-hidden bg-muted">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Save Playlist'}
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="border rounded-md">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-8 space-y-2">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Loading playlists...
            </p>
          </div>
        ) : playlists.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 space-y-2 text-center">
            <div className="rounded-full bg-muted p-3">
              <ListMusic className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">No playlists found</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Create your first playlist to get started.
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cover</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {playlists.map((playlist) => (
                <TableRow key={playlist.id}>
                  <TableCell>
                    {playlist.image_url ? (
                      <img
                        src={playlist.image_url}
                        alt=""
                        className="h-10 w-10 object-cover rounded"
                      />
                    ) : (
                      <div className="h-10 w-10 bg-muted rounded flex items-center justify-center">
                        <ImageIcon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{playlist.name}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {playlist.description}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleManageTracks(playlist)}
                      title="Manage Tracks"
                    >
                      <ListMusic className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(playlist)}
                      title="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => handleDelete(playlist.id)}
                      title="Delete"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Manage Tracks Dialog */}
      <Dialog
        open={!!managingId}
        onOpenChange={(open) => !open && setManagingId(null)}
      >
        <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Manage Playlist Tracks</DialogTitle>
          </DialogHeader>

          <div className="flex-1 flex flex-col gap-4 overflow-hidden">
            <div className="flex gap-2">
              <Select
                value={selectedTrackToAdd}
                onValueChange={setSelectedTrackToAdd}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a track to add..." />
                </SelectTrigger>
                <SelectContent>
                  {availableTracks
                    .filter(
                      (t) => !playlistTracks.some((pt) => pt.track_id === t.id),
                    )
                    .map((track) => (
                      <SelectItem key={track.id} value={track.id}>
                        {track.title} - {track.artist}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <Button onClick={onAddTrack} disabled={!selectedTrackToAdd}>
                Add
              </Button>
            </div>

            <div className="border rounded-md flex-1 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Artist</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {playlistTracks.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center text-muted-foreground h-32"
                      >
                        No tracks in this playlist yet.
                      </TableCell>
                    </TableRow>
                  ) : (
                    playlistTracks.map((pt, index) => (
                      <TableRow key={pt.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="font-medium">
                          {pt.track?.title || 'Unknown'}
                        </TableCell>
                        <TableCell>{pt.track?.artist || 'Unknown'}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => onRemoveTrack(pt.track_id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setManagingId(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
