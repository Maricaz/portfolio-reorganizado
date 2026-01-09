import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getBooks } from '@/services/database'
import { Book, Language } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Star, Book as BookIcon } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'

export default function BooksPage() {
  const { t, language } = useLanguage()
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: `${t.books.title} - Portfolio`,
    description: t.books.description,
  })

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await getBooks()
        if (data) setBooks(data)
      } catch (err) {
        console.error('Failed to fetch books', err)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  const getReview = (book: Book) => {
    return book[`review_${language}` as keyof Book] || book.review_en || ''
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
      <div className="space-y-4 animate-fade-in-down">
        <h1 className="text-4xl font-bold tracking-tight">{t.books.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {t.books.description}
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-64 w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <Card
              key={book.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[2/3] relative overflow-hidden bg-muted group">
                {book.cover_url ? (
                  <img
                    src={book.cover_url}
                    alt={book.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted/50 text-muted-foreground">
                    <BookIcon className="h-12 w-12 opacity-20" />
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="text-xs font-bold">{book.rating}/5</span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle
                  className="text-lg leading-tight line-clamp-2"
                  title={book.title}
                >
                  {book.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {book.author}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-4 italic">
                  "{getReview(book)}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed">
          <BookIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
          <p className="text-muted-foreground">No books found.</p>
        </div>
      )}
    </div>
  )
}
