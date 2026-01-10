import { useState, useEffect } from 'react'
import {
  getResumeLanguages,
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
import { Plus, Pencil, Trash } from 'lucide-react'
import { Label } from '@/components/ui/label'

export function LanguagesManager() {
  const [items, setItems] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>({})
  const { toast } = useToast()

  const loadData = async () => {
    const { data } = await getResumeLanguages()
    setItems(data || [])
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingItem.id) {
        await updateResumeItem('resume_languages', editingItem.id, editingItem)
      } else {
        await createResumeItem('resume_languages', editingItem)
      }
      setIsOpen(false)
      loadData()
      toast({ title: 'Success', description: 'Language saved' })
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
    await deleteResumeItem('resume_languages', id)
    loadData()
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingItem({ proficiency: 50 })}>
              <Plus className="mr-2 h-4 w-4" /> Add Language
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Language</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <Label>Language (PT)</Label>
                <Input
                  value={editingItem.language_pt || ''}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      language_pt: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>Level (PT)</Label>
                <Input
                  value={editingItem.level_pt || ''}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, level_pt: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>Proficiency (0-100)</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={editingItem.proficiency || 0}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      proficiency: parseInt(e.target.value),
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
              <TableHead>Language</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Proficiency</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {item.language_pt}
                </TableCell>
                <TableCell>{item.level_pt}</TableCell>
                <TableCell>{item.proficiency}%</TableCell>
                <TableCell className="flex gap-2">
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
