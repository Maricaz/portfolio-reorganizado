import { useState, useEffect } from 'react'
import {
  getResumeEducation,
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

export function EducationManager() {
  const [items, setItems] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>({})
  const { toast } = useToast()

  const loadData = async () => {
    const { data } = await getResumeEducation()
    setItems(data || [])
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingItem.id) {
        await updateResumeItem('resume_education', editingItem.id, editingItem)
      } else {
        await createResumeItem('resume_education', editingItem)
      }
      setIsOpen(false)
      loadData()
      toast({ title: 'Success', description: 'Education saved' })
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
    await deleteResumeItem('resume_education', id)
    loadData()
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingItem({})}>
              <Plus className="mr-2 h-4 w-4" /> Add Education
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Education</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3">
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
                <Label>Degree (PT)</Label>
                <Input
                  value={editingItem.degree_pt || ''}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      degree_pt: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={editingItem.start_date || ''}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        start_date: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={editingItem.end_date || ''}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        end_date: e.target.value,
                      })
                    }
                  />
                </div>
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
              <TableHead>Institution</TableHead>
              <TableHead>Degree</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {item.institution}
                </TableCell>
                <TableCell>{item.degree_pt}</TableCell>
                <TableCell>
                  {item.start_date} - {item.end_date || 'Present'}
                </TableCell>
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
