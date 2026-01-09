import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getExperience } from '@/services/database'
import { Experience } from '@/types'
import { Button } from '@/components/ui/button'
import { Download, Briefcase, GraduationCap, Calendar } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

export default function ResumePage() {
  const { t, language } = useLanguage()
  const [experience, setExperience] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getExperience().then(({ data }) => {
      if (data) setExperience(data)
      setLoading(false)
    })
  }, [])

  const handleDownload = () => {
    alert('PDF Download not implemented in this demo.')
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t.resume.title}</h1>
        <Button
          onClick={handleDownload}
          className="shadow-lg hover:shadow-xl transition-all"
        >
          <Download className="mr-2 h-4 w-4" /> {t.resume.download}
        </Button>
      </div>

      <div className="relative border-l border-border ml-3 md:ml-6 space-y-8 py-4">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="pl-8 relative">
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-24 w-full" />
              </div>
            ))
          : experience.map((item) => (
              <div
                key={item.id}
                className="pl-8 relative group animate-slide-up"
              >
                <div
                  className={cn(
                    'absolute -left-3 md:-left-[13px] top-1 h-6 w-6 rounded-full border-4 border-background flex items-center justify-center transition-colors duration-300',
                    item.type === 'work'
                      ? 'bg-primary'
                      : 'bg-secondary-foreground',
                  )}
                >
                  {item.type === 'work' ? (
                    <Briefcase className="h-3 w-3 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="h-3 w-3 text-secondary" />
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold">
                    {item[`role_${language}`]}
                  </h3>
                  <span className="hidden sm:inline text-muted-foreground">
                    •
                  </span>
                  <span className="text-lg text-primary font-medium">
                    {item.company}
                  </span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  {format(new Date(item.start_date), 'yyyy')} -{' '}
                  {item.end_date
                    ? format(new Date(item.end_date), 'yyyy')
                    : t.resume.present}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {item[`description_${language}`]}
                </p>
              </div>
            ))}
      </div>
    </div>
  )
}
