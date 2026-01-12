import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  getTracksPaginated,
  createTrack,
  updateTrack,
  deleteTrack,
} from '@/services/music'
import { uploadFile } from '@/services/storage'
import { MusicTrack } from '@/types'
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
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import {
  Plus,
  Pencil,
  Trash,
  Image as ImageIcon,
  Loader2,
  Music,
  Eye,
  Search,
} from 'lucide-react'
import { ExportButton } from '@/components/admin/ExportButton'
import { TrackDetailsDialog } from './TrackDetailsDialog'
import { PaginationControl } from '@/components/PaginationControl'

const trackSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  artist: z.string().min(1, 'Artist is required'),
  src_url: z.string().optional(),
  image_url: z.string().optional(),
  lyrics_pt: z.string().optional(),
  lyrics_en: z.string().optional(),
  lyrics_ko: z.string().optional(),
  spotify_id: z.string().optional(),
  deezer_id: z.string().optional(),
  apple_id: z.string().optional(),
  youtube_id: z.string().optional(),
})

type TrackFormValues = z.infer<typeof trackSchema>

export function TracksTab() {
  const [tracks, setTracks] = useState<MusicTrack[]>([])
  const [totalTracks, setTotalTracks] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [audioUploading, setAudioUploading] = useState(false)
  const [viewTrack, setViewTrack] = useState<MusicTrack | null>(null)
  const { toast } = useToast()

  const pageSize = 10

  const form = useForm<TrackFormValues>({
    resolver: zodResolver(trackSchema),
    defaultValues: {
      title: '',
      artist: '',
      src_url: '',
      image_url: '',
      lyrics_pt: '',
      lyrics_en: '',
      lyrics_ko: '',
      spotify_id: '',
      deezer_id: '',
      apple_id: '',
      youtube_id: '',
    },
  })

  const loadTracks = async () => {
    try {
      setLoading(true)
      const {
        data,
        count,
        totalPages: total,
      } = await getTracksPaginated(currentPage, pageSize, search)
      setTracks((data as unknown as MusicTrack[]) || [])
      setTotalTracks(count)
      setTotalPages(total)
    } catch (error) {
      console.error('Failed to load tracks:', error)
      toast({
        title: 'Error',
        description: 'Failed to load tracks. Please try again.',
        variant: 'destructive',
      })
      setTracks([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPage !== 1 && search) {
        setCurrentPage(1)
      } else {
        loadTracks()
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [search, currentPage])

  const handleEdit = (track: MusicTrack) => {
    setEditingId(track.id)
    const lyrics = track.lyrics || {}
    const platforms = track.platforms || {}

    form.reset({
      title: track.title,
      artist: track.artist,
      src_url: track.src_url || '',
      image_url: track.image_url || '',
      lyrics_pt: lyrics.pt || '',
      lyrics_en: lyrics.en || '',
      lyrics_ko: lyrics.ko || '',
      spotify_id: platforms.spotify || '',
      deezer_id: platforms.deezer || '',
      apple_id: platforms.apple || '',
      youtube_id: platforms.youtube || '',
    })
    setIsOpen(true)
  }

  const handleAddNew = () => {
    setEditingId(null)
    form.reset({
      title: '',
      artist: '',
      src_url: '',
      image_url: '',
      lyrics_pt: '',
      lyrics_en: '',
      lyrics_ko: '',
      spotify_id: '',
      deezer_id: '',
      apple_id: '',
      youtube_id: '',
    })
    setIsOpen(true)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploading(true)
      const url = await uploadFile(file, 'portfolio-media', 'music-covers')
      form.setValue('image_url', url)
      toast({ title: 'Success', description: 'Album art uploaded' })
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

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setAudioUploading(true)
      const url = await uploadFile(file, 'music', 'tracks')
      form.setValue('src_url', url)
      toast({ title: 'Success', description: 'Audio track uploaded' })
    } catch (error) {
      console.error(error)
      toast({
        title: 'Upload Error',
        description:
          'Failed to upload audio file. Ensure "music" bucket exists.',
        variant: 'destructive',
      })
    } finally {
      setAudioUploading(false)
    }
  }

  const onSubmit = async (values: TrackFormValues) => {
    try {
      const trackData: any = {
        title: values.title,
        artist: values.artist,
        src_url: values.src_url,
        image_url: values.image_url,
        lyrics: {
          pt: values.lyrics_pt,
          en: values.lyrics_en,
          ko: values.lyrics_ko,
        },
        platforms: {
          spotify: values.spotify_id,
          deezer: values.deezer_id,
          apple: values.apple_id,
          youtube: values.youtube_id,
        },
      }

      if (editingId) {
        await updateTrack(editingId, trackData)
        toast({ title: 'Success', description: 'Track updated' })
      } else {
        await createTrack(trackData)
        toast({ title: 'Success', description: 'Track created' })
      }
      setIsOpen(false)
      loadTracks()
    } catch (error) {
      console.error('Operation failed:', error)
      toast({
        title: 'Error',
        description: 'Operation failed',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return
    try {
      await deleteTrack(id)
      loadTracks()
      toast({ title: 'Success', description: 'Track deleted' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Music Tracks</h2>
          <p className="text-muted-foreground">
            Upload and manage your music library. Total: {totalTracks}
          </p>
        </div>
        <div className="flex gap-2">
          <ExportButton data={tracks} filename="music_tracks_export" />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleAddNew}>
                <Plus className="mr-2 h-4 w-4" /> Add Track
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingId ? 'Edit Track' : 'Add Track'}
                </DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="artist"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Artist</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <FormLabel>Audio File</FormLabel>
                      <div className="flex gap-2 items-center">
                        <Input
                          type="file"
                          accept=".mp3,audio/*"
                          onChange={handleAudioUpload}
                          disabled={audioUploading}
                        />
                        {audioUploading && (
                          <Loader2 className="animate-spin h-4 w-4" />
                        )}
                      </div>
                      <FormField
                        control={form.control}
                        name="src_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Or audio URL..." {...field} />
                            </FormControl>
                            <FormDescription className="text-xs">
                              Upload an MP3 or paste a direct link.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-2">
                      <FormLabel>Album Art</FormLabel>
                      <div className="flex gap-2 items-center">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={uploading}
                        />
                        {form.watch('image_url') && (
                          <div className="relative h-10 w-10 border rounded overflow-hidden shrink-0">
                            <img
                              src={form.watch('image_url')}
                              alt="Preview"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                      <FormField
                        control={form.control}
                        name="image_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Or image URL..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="border rounded p-4 space-y-4">
                    <h3 className="font-semibold text-sm">Lyrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="lyrics_pt"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Portuguese</FormLabel>
                            <FormControl>
                              <Textarea className="h-24" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lyrics_en"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>English</FormLabel>
                            <FormControl>
                              <Textarea className="h-24" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lyrics_ko"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Korean</FormLabel>
                            <FormControl>
                              <Textarea className="h-24" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="border rounded p-4 space-y-4">
                    <h3 className="font-semibold text-sm">Platform IDs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <FormField
                        control={form.control}
                        name="spotify_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Spotify ID</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="deezer_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Deezer ID</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="apple_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Apple ID</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="youtube_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>YouTube ID</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={uploading || audioUploading}
                  >
                    {uploading || audioUploading
                      ? 'Uploading...'
                      : 'Save Track'}
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tracks..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="border rounded-md">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-8 space-y-2">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Loading tracks...</p>
          </div>
        ) : tracks.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 space-y-2 text-center">
            <div className="rounded-full bg-muted p-3">
              <ImageIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">No tracks found</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              You haven't added any music tracks yet. Click the "Add Track"
              button to get started.
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Art</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Artist</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tracks.map((track) => (
                <TableRow key={track.id}>
                  <TableCell>
                    {track.image_url ? (
                      <img
                        src={track.image_url}
                        alt=""
                        className="h-10 w-10 object-cover rounded"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-10 w-10 bg-muted rounded flex items-center justify-center">
                        <Music className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{track.title}</TableCell>
                  <TableCell>{track.artist}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewTrack(track)}
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(track)}
                      title="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => handleDelete(track.id)}
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

      <PaginationControl
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <TrackDetailsDialog
        track={viewTrack}
        open={!!viewTrack}
        onOpenChange={(open) => !open && setViewTrack(null)}
      />
    </div>
  )
}
