import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  getMusicTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} from '@/services/music'
import { uploadFile } from '@/services/storage'
import { Database } from '@/lib/supabase/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
} from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { Plus, Pencil, Trash, Image as ImageIcon, Loader2 } from 'lucide-react'
import { ExportButton } from '@/components/admin/ExportButton'

type MusicTrack = Database['public']['Tables']['music_tracks']['Row']
type MusicTrackInsert = Database['public']['Tables']['music_tracks']['Insert']

const trackSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  artist: z.string().min(1, 'Artist is required'),
  src_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  image_url: z.string().optional(),
})

type TrackFormValues = z.infer<typeof trackSchema>

export default function MusicManager() {
  const [tracks, setTracks] = useState<MusicTrack[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  const form = useForm<TrackFormValues>({
    resolver: zodResolver(trackSchema),
    defaultValues: {
      title: '',
      artist: '',
      src_url: '',
      image_url: '',
    },
  })

  const loadTracks = async () => {
    try {
      setLoading(true)
      const data = await getMusicTracks()
      // Ensure data is an array before setting state
      setTracks(Array.isArray(data) ? data : [])
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
    loadTracks()
  }, [])

  const handleEdit = (track: MusicTrack) => {
    setEditingId(track.id)
    form.reset({
      title: track.title,
      artist: track.artist,
      src_url: track.src_url || '',
      // Cast to any to access potentially missing image_url property
      image_url: (track as any).image_url || '',
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
    })
    setIsOpen(true)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploading(true)
      const url = await uploadFile(file, 'portfolio-media', 'music')
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

  const onSubmit = async (values: TrackFormValues) => {
    try {
      // Cast values to compatible types since image_url might not exist in strict DB types
      if (editingId) {
        await updateTrack(editingId, values as any)
        toast({ title: 'Success', description: 'Track updated' })
      } else {
        await createTrack(values as any)
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
          <h1 className="text-3xl font-bold">Music Manager</h1>
          <p className="text-muted-foreground">
            Manage your tracks and albums.
          </p>
        </div>
        <div className="flex gap-2">
          <ExportButton data={tracks} filename="music_export" />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleAddNew}>
                <Plus className="mr-2 h-4 w-4" /> Add Track
              </Button>
            </DialogTrigger>
            <DialogContent>
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
                  <FormField
                    control={form.control}
                    name="src_url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Audio URL (MP3)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="https://..." />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormLabel>Album Art</FormLabel>
                    <div className="flex gap-4 items-center">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading}
                      />
                      {form.watch('image_url') && (
                        <div className="relative h-16 w-16 border rounded overflow-hidden shrink-0">
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

                  <Button type="submit" className="w-full" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Save Track'}
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
                    {(track as any).image_url ? (
                      <img
                        src={(track as any).image_url}
                        alt=""
                        className="h-10 w-10 object-cover rounded"
                      />
                    ) : (
                      <div className="h-10 w-10 bg-muted rounded flex items-center justify-center">
                        <ImageIcon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{track.title}</TableCell>
                  <TableCell>{track.artist}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(track)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => handleDelete(track.id)}
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
    </div>
  )
}
