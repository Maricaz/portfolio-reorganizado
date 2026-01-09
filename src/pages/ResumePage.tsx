import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getResumeData } from '@/services/database'
import { ResumeData } from '@/types'
import { Button } from '@/components/ui/button'
import { Download, Briefcase, GraduationCap, Calendar } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { useSEO } from '@/hooks/use-seo'

export default function ResumePage() {
  const { t, language } = useLanguage()
  const [experience, setExperience] = useState<ResumeData[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: t.resume.title,
    description: t.resume.title,
  })

  useEffect(() => {
    getResumeData().then(({ data }) => {
      if (data) setExperience(data)
      setLoading(false)
    })
  }, [])

  const handleDownload = () => {
    // Ideally this links to a PDF stored in Supabase Storage or public folder
    alert('PDF Download to be implemented.')
  }

  const getLocalized = (item: ResumeData, field: 'title' | 'description') => {
    return (
      item[`${field}_${language}` as keyof ResumeData] ||
      item[`${field}_en` as keyof ResumeData] ||
      item[`${field}_pt` as keyof ResumeData] ||
      ''
    )
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
                    item.category === 'work'
                      ? 'bg-primary'
                      : 'bg-secondary-foreground',
                  )}
                >
                  {item.category === 'work' ? (
                    <Briefcase className="h-3 w-3 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="h-3 w-3 text-secondary" />
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold">
                    {getLocalized(item, 'title')}
                  </h3>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  {item.period}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {getLocalized(item, 'description')}
                </p>
              </div>
            ))}
      </div>
    </div>
  )
}
