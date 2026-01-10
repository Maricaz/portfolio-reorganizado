import { useState } from 'react'
import { Book } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Quote,
  Globe,
  PenTool,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

interface BookCardProps {
  book: Book
  trackToggle: (title: string, state: 'open' | 'closed') => void
}

export function BookCard({ book, trackToggle }: BookCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  const toggleSynopsis = () => {
    const newState = !isExpanded
    setIsExpanded(newState)
    trackToggle(book.title, newState ? 'open' : 'closed')
  }

  return (
    <Card className="overflow-hidden glass-soft border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col group animate-fade-in-up">
      <div className="aspect-[2/3] relative overflow-hidden bg-muted/30">
        {book.image_url ? (
          <img
            src={book.image_url}
            alt={book.title}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-muted/50 text-muted-foreground p-4 text-center space-y-2">
            <BookOpen className="h-12 w-12 opacity-20" />
            <span className="text-xs opacity-50">{t.books.title}</span>
          </div>
        )}
      </div>

      <CardHeader className="pb-2 space-y-2">
        <div className="space-y-1">
          <CardTitle
            className="text-xl leading-tight line-clamp-2 font-bold font-serif tracking-tight"
            title={book.title}
          >
            {book.title}
          </CardTitle>
          <p className="text-sm font-medium text-primary/80 line-clamp-1">
            {book.author}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pt-0 flex flex-col gap-4">
        {/* Metadata */}
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded-md">
          <div className="space-y-0.5">
            <span className="flex items-center gap-1 opacity-70">
              <Globe className="h-3 w-3" /> Original
            </span>
            <p
              className="font-medium truncate"
              title={book.original_title || '—'}
            >
              {book.original_title || '—'}
            </p>
          </div>
          <div className="space-y-0.5">
            <span className="flex items-center gap-1 opacity-70">
              <PenTool className="h-3 w-3" />{' '}
              {book.language_code === 'pt' ? 'Tradução' : 'Translation'}
            </span>
            <p className="font-medium truncate" title={book.translation || '—'}>
              {book.translation || '—'}
            </p>
          </div>
        </div>

        {/* Curation */}
        {book.curation && (
          <div className="relative pl-3 border-l-2 border-primary/30 italic text-sm text-muted-foreground/90">
            <Quote className="h-3 w-3 absolute -top-1 -left-4 text-primary/40" />
            <p className="line-clamp-3 leading-relaxed">"{book.curation}"</p>
          </div>
        )}

        <div className="flex-1" />

        {/* Synopsis */}
        <div className="space-y-2">
          <div
            className={cn(
              'text-sm text-muted-foreground relative transition-all duration-300 overflow-hidden',
              isExpanded ? 'max-h-[500px]' : 'max-h-[60px]',
            )}
          >
            <p className="whitespace-pre-line leading-relaxed text-xs">
              {book.synopsis || 'No synopsis available.'}
            </p>
            {!isExpanded && book.synopsis && book.synopsis.length > 80 && (
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-card to-transparent" />
            )}
          </div>

          {book.synopsis && book.synopsis.length > 50 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSynopsis}
              className="w-full flex items-center justify-center gap-1 text-[10px] font-medium text-primary hover:text-primary/80 h-6"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-3 w-3" />
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3" />
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
