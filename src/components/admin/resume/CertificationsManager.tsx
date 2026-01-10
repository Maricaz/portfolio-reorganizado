import { useState, useEffect } from 'react'
import {
  getResumeCertifications,
  createResumeItem,
  updateResumeItem,
  deleteResumeItem,
} from '@/services/resume'
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
import { Plus, Pencil, Trash, ExternalLink } from 'lucide-react'
import { Label } from '@/components/ui/label'

export function CertificationsManager() {
  const [items, setItems] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>({})
  const { toast } = useToast()

  const loadData = async () => {
    const { data } = await getResumeCertifications()
    setItems(data || [])
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingItem.id) {
        await updateResumeItem(
          'resume_certifications',
          editingItem.id,
          editingItem,
        )
      } else {
        await createResumeItem('resume_certifications', editingItem)
      }
      setIsOpen(false)
      loadData()
      toast({ title: 'Success', description: 'Certification saved' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this item?')) return
    await deleteResumeItem('resume_certifications', id)
    loadData()
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingItem({})}>
              <Plus className="mr-2 h-4 w-4" /> Add Certification
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Certification</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <Label>Name</Label>
                <Input
                  value={editingItem.name || ''}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>Institution</Label>
                <Input
                  value={editingItem.institution || ''}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      institution: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>Date</Label>
                <Input
                  type="date"
                  value={editingItem.date || ''}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, date: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>URL</Label>
                <Input
                  value={editingItem.url || ''}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, url: e.target.value })
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
              <TableHead>Name</TableHead>
              <TableHead>Institution</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.institution}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell className="flex gap-2">
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center p-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditingItem(item)
                      setIsOpen(true)
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => handleDelete(item.id)}
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
