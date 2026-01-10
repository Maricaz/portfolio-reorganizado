import { useEffect, useState } from 'react'
import {
  getResumeExperience,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { Plus, Pencil, Trash } from 'lucide-react'
import { Label } from '@/components/ui/label'

export default function ResumeManager() {
  const [experience, setExperience] = useState<any[]>([])
  const [education, setEducation] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('experience')
  const [editingItem, setEditingItem] = useState<any>({})
  const { toast } = useToast()

  const loadData = async () => {
    try {
      const [exp, edu] = await Promise.all([
        getResumeExperience(),
        getResumeEducation(),
      ])
      setExperience(exp.data || [])
      setEducation(edu.data || [])
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load resume data',
        variant: 'destructive',
      })
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const table =
      activeTab === 'experience' ? 'resume_experience' : 'resume_education'
    try {
      if (editingItem.id) {
        await updateResumeItem(table, editingItem.id, editingItem)
      } else {
        await createResumeItem(table, editingItem)
      }
      setIsOpen(false)
      loadData()
      toast({ title: 'Success', description: 'Saved successfully' })
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
    const table =
      activeTab === 'experience' ? 'resume_experience' : 'resume_education'
    try {
      await deleteResumeItem(table, id)
      loadData()
      toast({ title: 'Success', description: 'Deleted successfully' })
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
        <h1 className="text-3xl font-bold">Resume Manager</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingItem({})}>
              <Plus className="mr-2 h-4 w-4" /> Add Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add/Edit {activeTab}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'experience' ? (
                <>
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input
                      value={editingItem.company || ''}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          company: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role (PT)</Label>
                    <Input
                      value={editingItem.role_pt || ''}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          role_pt: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
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
                </>
              ) : (
                <>
                  <div className="space-y-2">
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
                  <div className="space-y-2">
                    <Label>Degree (PT)</Label>
                    <Input
                      value={editingItem.degree_pt || ''}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          degree_pt: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
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
                </>
              )}
              <Button type="submit" className="w-full">
                Save
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {experience.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.company}</TableCell>
                    <TableCell>{item.role_pt}</TableCell>
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
        </TabsContent>
        <TabsContent value="education">
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Institution</TableHead>
                  <TableHead>Degree</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {education.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.institution}</TableCell>
                    <TableCell>{item.degree_pt}</TableCell>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
