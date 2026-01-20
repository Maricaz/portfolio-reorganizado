import { ResumeExperience } from '@/services/resume'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getLocalizedValue } from '@/lib/utils'

interface ExperienceTimelineProps {
  items: ResumeExperience[]
  loading: boolean
}

export function ExperienceTimeline({
  items,
  loading,
}: ExperienceTimelineProps) {
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
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="w-12 h-12 rounded-full shrink-0" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative space-y-8 pl-4 sm:pl-0">
      <div className="absolute left-4 sm:left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500/50 to-purple-600/50 hidden sm:block" />

      {items.map((item, index) => (
        <div key={item.id} className="relative sm:pl-16 group">
          {/* Timeline Dot */}
          <div className="absolute left-[19px] top-6 w-4 h-4 rounded-full bg-background border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10 group-hover:scale-125 transition-transform duration-300 hidden sm:block" />

          <Card className="neon-card border-l-4 border-l-cyan-500 sm:border-l-transparent">
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
                    {getLocalizedValue(item, 'role', language)}
                  </h3>
                  <div className="text-lg font-medium flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                  <Badge
                    variant="outline"
                    className="border-cyan-500/30 text-cyan-600 dark:text-cyan-400 gap-1.5"
                  >
                    <Calendar className="h-3 w-3" />
                    {formatDate(item.start_date)} -{' '}
                    {item.end_date
                      ? formatDate(item.end_date)
                      : t.resume.present}
                  </Badge>
                  {getLocalizedValue(item, 'location', language) && (
                    <span className="flex items-center gap-1 mt-1 text-xs">
                      <MapPin className="h-3 w-3" />
                      {getLocalizedValue(item, 'location', language)}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                {getLocalizedValue(item, 'description', language)}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
