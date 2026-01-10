import { useEffect, useState } from 'react'
import {
  getMusicTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} from '@/services/music'
import { MusicTrack } from '@/types'
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
import { useToast } from '@/hooks/use-toast'
import { Plus, Pencil, Trash } from 'lucide-react'
import { Label } from '@/components/ui/label'

export default function MusicManager() {
  const [tracks, setTracks] = useState<MusicTrack[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingTrack, setEditingTrack] = useState<Partial<MusicTrack> | null>(
    null,
  )
  const { toast } = useToast()

  const loadTracks = async () => {
    try {
      const data = await getMusicTracks()
      setTracks(data || [])
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load tracks',
        variant: 'destructive',
      })
    }
  }

  useEffect(() => {
    loadTracks()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingTrack?.id) {
        await updateTrack(editingTrack.id, editingTrack)
      } else {
        await createTrack(editingTrack as MusicTrack)
      }
      setIsOpen(false)
      loadTracks()
      toast({ title: 'Success', description: 'Track saved' })
    } catch (error) {
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
        <h1 className="text-3xl font-bold">Music Manager</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingTrack({})}>
              <Plus className="mr-2 h-4 w-4" /> Add Track
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingTrack?.id ? 'Edit Track' : 'Add Track'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={editingTrack?.title || ''}
                  onChange={(e) =>
                    setEditingTrack({ ...editingTrack, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Artist</Label>
                <Input
                  value={editingTrack?.artist || ''}
                  onChange={(e) =>
                    setEditingTrack({ ...editingTrack, artist: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Source URL (MP3)</Label>
                <Input
                  value={editingTrack?.src_url || ''}
                  onChange={(e) =>
                    setEditingTrack({
                      ...editingTrack,
                      src_url: e.target.value,
                    })
                  }
                />
              </div>
              <Button type="submit" className="w-full">
                Save
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tracks.map((track) => (
              <TableRow key={track.id}>
                <TableCell>{track.title}</TableCell>
                <TableCell>{track.artist}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditingTrack(track)
                      setIsOpen(true)
                    }}
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
      </div>
    </div>
  )
}
