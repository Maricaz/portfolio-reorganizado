import { useEffect, useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getBooks } from '@/services/books'
import { Book } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { slugify } from '@/lib/utils'
import { useAnalytics } from '@/hooks/use-analytics'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function BooksPage() {
  const { t, language } = useLanguage()
  const { trackBookSynopsisToggle } = useAnalytics()
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: `${t.books.title} — Mariana Azevedo`,
    description: t.books.description,
  })

  // Dynamic book cover mapping
  const bookImages = useMemo(() => {
    return import.meta.glob('../media/books/*.{png,jpg,jpeg,webp}', {
      eager: true,
      as: 'url',
    })
  }, [])

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

  const getCoverImage = (title: string) => {
    const slug = slugify(title)
    const match = Object.entries(bookImages).find(([path]) =>
      path.toLowerCase().includes(slug),
    )
    return match ? match[1] : null
  }

  const getTitle = (book: Book) => {
    if (language === 'ko' && book.title_ko) return book.title_ko
    return book.title
  }

  const getSynopsis = (book: Book) => {
    if (language === 'pt') return book.synopsis_pt || book.review_pt
    if (language === 'en') return book.synopsis_en || book.review_en
    if (language === 'ko') return book.synopsis_ko || book.review_ko
    return book.synopsis_en || book.review_en
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
              <Skeleton className="aspect-[3/4] w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : books.length > 0 ? (
        <div className="grid grid-auto-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book, index) => {
            const coverUrl = getCoverImage(book.title)
            return (
              <Card
                key={book.id}
                className="overflow-hidden glass-soft border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col animate-fade-in-up group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-muted/30">
                  {coverUrl ? (
                    <img
                      src={coverUrl}
                      alt={getTitle(book)}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-muted/50 text-muted-foreground p-4 text-center space-y-2">
                      <BookOpen className="h-12 w-12 opacity-20" />
                      <span className="text-xs opacity-50">
                        {t.books.seeSynopsis}
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2 space-y-1">
                  <CardTitle
                    className="text-lg leading-tight line-clamp-2"
                    title={getTitle(book)}
                  >
                    {getTitle(book)}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {book.author}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 pt-2">
                  <Dialog
                    onOpenChange={(open) =>
                      trackBookSynopsisToggle(
                        getTitle(book),
                        open ? 'open' : 'closed',
                      )
                    }
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-0 h-auto font-normal hover:bg-transparent hover:text-primary group/btn"
                      >
                        <span className="flex items-center gap-2 text-sm font-medium text-primary group-hover/btn:text-primary/80 transition-colors">
                          <span>{t.books.seeSynopsis}</span>
                          <BookOpen className="h-4 w-4" />
                        </span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold leading-tight">
                          {getTitle(book)}
                        </DialogTitle>
                        <DialogDescription className="text-base font-medium text-primary">
                          {book.author}
                        </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="max-h-[60vh] mt-4 pr-4">
                        <div className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                          {getSynopsis(book) || 'No synopsis available.'}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-primary/20">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
          <p className="text-muted-foreground">{t.projects.no_projects}</p>
        </div>
      )}
    </div>
  )
}
