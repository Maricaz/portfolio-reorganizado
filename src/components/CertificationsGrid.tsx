import { ResumeCertification } from '@/services/resume'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface CertificationsGridProps {
  items: ResumeCertification[]
  loading: boolean
}

export function CertificationsGrid({
  items,
  loading,
}: CertificationsGridProps) {
  const { language, t } = useLanguage()

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(
      language === 'ko' ? 'ko-KR' : language === 'pt' ? 'pt-BR' : 'en-US',
      {
        year: 'numeric',
        month: 'short',
      },
    ).format(date)
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-40 w-full rounded-xl" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card
          key={item.id}
          className="neon-card group h-full hover:-translate-y-1 transition-transform duration-300"
        >
          <CardContent className="p-6 flex flex-col h-full gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 ring-1 ring-purple-500/20 group-hover:bg-purple-500/20 group-hover:ring-purple-500/40 transition-all">
                <Award className="h-6 w-6" />
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors"
                  aria-label={t.resume.verifier}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="space-y-1">
              <h3 className="font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 transition-all">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.institution}
              </p>
            </div>

            <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-muted-foreground border-t border-dashed border-border">
              <Calendar className="h-3 w-3" />
              {formatDate(item.date)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
