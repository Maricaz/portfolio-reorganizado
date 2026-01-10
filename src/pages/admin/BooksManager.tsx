import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from '@/services/books'
import { uploadFile } from '@/services/storage'
import { Book } from '@/types'
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
} from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { Plus, Pencil, Trash, Search, Image as ImageIcon } from 'lucide-react'

const bookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  category: z.string().optional(),
  language_code: z.enum(['pt', 'en', 'ko']),
  rating: z.coerce.number().min(1).max(5).optional(),
  synopsis: z.string().optional(),
  curation: z.string().optional(),
  original_title: z.string().optional(),
  image_url: z.string().optional(),
})

type BookFormValues = z.infer<typeof bookSchema>

export default function BooksManager() {
  const [books, setBooks] = useState<Book[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [uploading, setUploading] = useState(false)
  const { toast } = useToast()

  const form = useForm<BookFormValues>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: '',
      author: '',
      category: '',
      language_code: 'pt',
      rating: 5,
      synopsis: '',
      curation: '',
      original_title: '',
      image_url: '',
    },
  })

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

  const handleEdit = (book: Book) => {
    setEditingId(book.id)
    form.reset({
      title: book.title,
      author: book.author,
      category: book.category || '',
      language_code: book.language_code as 'pt' | 'en' | 'ko',
      rating: book.rating || 5,
      synopsis: book.synopsis || '',
      curation: book.curation || '',
      original_title: book.original_title || '',
      image_url: book.image_url || '',
    })
    setIsOpen(true)
  }

  const handleAddNew = () => {
    setEditingId(null)
    form.reset({
      title: '',
      author: '',
      category: '',
      language_code: 'pt',
      rating: 5,
      synopsis: '',
      curation: '',
      original_title: '',
      image_url: '',
    })
    setIsOpen(true)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploading(true)
      const url = await uploadFile(file, 'portfolio-media', 'books')
      form.setValue('image_url', url)
      toast({ title: 'Success', description: 'Image uploaded successfully' })
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

  const onSubmit = async (values: BookFormValues) => {
    try {
      if (editingId) {
        await updateBook(editingId, values)
        toast({ title: 'Success', description: 'Book updated' })
      } else {
        await createBook(values as Book)
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
            <Button onClick={handleAddNew}>
              <Plus className="mr-2 h-4 w-4" /> Add Book
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? 'Edit Book' : 'Add Book'}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
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
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="language_code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Language</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="pt">Portuguese</option>
                            <option value="en">English</option>
                            <option value="ko">Korean</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rating (1-5)</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" max="5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="original_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Original Title</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <FormLabel>Cover Image</FormLabel>
                  <div className="flex gap-4 items-center">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                    />
                    {form.watch('image_url') && (
                      <div className="relative h-16 w-12 border rounded overflow-hidden">
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
                          <Input
                            placeholder="Or enter URL manually"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="synopsis"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Synopsis</FormLabel>
                      <FormControl>
                        <Textarea className="h-24" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="curation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Curation Note</FormLabel>
                      <FormControl>
                        <Textarea className="h-24" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={uploading}>
                  {uploading ? 'Uploading Image...' : 'Save Book'}
                </Button>
              </form>
            </Form>
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
              <TableHead>Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Lang</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell>
                  {book.image_url ? (
                    <img
                      src={book.image_url}
                      alt={book.title}
                      className="h-10 w-8 object-cover rounded"
                    />
                  ) : (
                    <div className="h-10 w-8 bg-muted rounded flex items-center justify-center">
                      <ImageIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.language_code}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(book)}
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
