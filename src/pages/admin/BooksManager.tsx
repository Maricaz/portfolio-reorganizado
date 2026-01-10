import { useEffect, useState } from 'react'
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from '@/services/books'
import { Book } from '@/types'
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
import { Plus, Pencil, Trash, Search } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function BooksManager() {
  const [books, setBooks] = useState<Book[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingBook, setEditingBook] = useState<Partial<Book> | null>(null)
  const [search, setSearch] = useState('')
  const { toast } = useToast()

  const loadBooks = async () => {
    try {
      const data = await getAllBooks()
      setBooks(data || [])
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load books',
        variant: 'destructive',
      })
    }
  }

  useEffect(() => {
    loadBooks()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingBook?.id) {
        await updateBook(editingBook.id, editingBook)
        toast({ title: 'Success', description: 'Book updated' })
      } else {
        await createBook(editingBook as Book)
        toast({ title: 'Success', description: 'Book created' })
      }
      setIsOpen(false)
      loadBooks()
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
      await deleteBook(id)
      toast({ title: 'Success', description: 'Book deleted' })
      loadBooks()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete',
        variant: 'destructive',
      })
    }
  }

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Books Manager</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingBook({})}>
              <Plus className="mr-2 h-4 w-4" /> Add Book
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingBook?.id ? 'Edit Book' : 'Add Book'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={editingBook?.title || ''}
                    onChange={(e) =>
                      setEditingBook({ ...editingBook, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Author</Label>
                  <Input
                    value={editingBook?.author || ''}
                    onChange={(e) =>
                      setEditingBook({ ...editingBook, author: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Input
                    value={editingBook?.category || ''}
                    onChange={(e) =>
                      setEditingBook({
                        ...editingBook,
                        category: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Language Code (pt/en/ko)</Label>
                  <Input
                    value={editingBook?.language_code || ''}
                    onChange={(e) =>
                      setEditingBook({
                        ...editingBook,
                        language_code: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input
                    value={editingBook?.image_url || ''}
                    onChange={(e) =>
                      setEditingBook({
                        ...editingBook,
                        image_url: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Original Title</Label>
                  <Input
                    value={editingBook?.original_title || ''}
                    onChange={(e) =>
                      setEditingBook({
                        ...editingBook,
                        original_title: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Synopsis</Label>
                <Textarea
                  value={editingBook?.synopsis || ''}
                  onChange={(e) =>
                    setEditingBook({ ...editingBook, synopsis: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Curation Note</Label>
                <Textarea
                  value={editingBook?.curation || ''}
                  onChange={(e) =>
                    setEditingBook({ ...editingBook, curation: e.target.value })
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

      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search books..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Lang</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.language_code}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditingBook(book)
                      setIsOpen(true)
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => handleDelete(book.id)}
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
