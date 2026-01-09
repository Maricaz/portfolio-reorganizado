import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getBooks } from '@/services/database'
import { Book } from '@/types'
import { Star } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'

export default function BooksPage() {
  const { t, language } = useLanguage()
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: t.books.title,
    description: 'A curated list of books I recommend',
  })

  useEffect(() => {
    getBooks(language).then(({ data }) => {
      if (data) setBooks(data)
      setLoading(false)
    })
  }, [language])

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{t.books.title}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-48 w-full rounded-md" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))
          : books.map((book) => (
              <HoverCard key={book.id}>
                <HoverCardTrigger>
                  <div className="group cursor-pointer space-y-3">
                    <div className="relative aspect-[2/3] overflow-hidden rounded-md shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                      <img
                        src={book.cover_url}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                        <div className="flex text-yellow-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < book.rating ? 'fill-current' : 'text-gray-400'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm leading-tight truncate">
                        {book.title}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {book.author}
                      </p>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-bold">{book.title}</h4>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span className="text-xs font-bold">{book.rating}/5</span>
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "{book.review}"
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
      </div>
    </div>
  )
}
