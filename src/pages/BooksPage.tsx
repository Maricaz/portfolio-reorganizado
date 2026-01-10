import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getBooks } from '@/services/books'
import { Book } from '@/types'
import { Skeleton } from '@/components/ui/skeleton'
import { BookOpen } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { useAnalytics } from '@/hooks/use-analytics'
import { BookCard } from '@/components/BookCard'

export default function BooksPage() {
  const { t, language } = useLanguage()
  const { trackBookSynopsisToggle } = useAnalytics()
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: `${t.books.title} — Mariana Azevedo`,
    description: t.books.description,
  })

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        const data = await getBooks(language)
        if (data) setBooks(data)
        else setBooks([])
      } catch (err) {
        console.error('Failed to fetch books', err)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [language])

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl space-y-12 min-h-[80vh]">
      <div className="space-y-6 animate-fade-in-down text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
          {t.books.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t.books.description}
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[2/3] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Skeleton className="h-24 w-full" />
            </div>
          ))}
        </div>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              trackToggle={trackBookSynopsisToggle}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-primary/20 max-w-md mx-auto">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
          <p className="text-muted-foreground font-medium">
            No books found for this language.
          </p>
        </div>
      )}
    </div>
  )
}
