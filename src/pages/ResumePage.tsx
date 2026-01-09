import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getResumeData } from '@/services/database'
import { ResumeItem, Language } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Briefcase, GraduationCap, Trophy, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useSEO } from '@/hooks/use-seo'

export default function ResumePage() {
  const { t, language } = useLanguage()
  const [data, setData] = useState<ResumeItem[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: `${t.resume.title} - Portfolio`,
    description: t.resume.description,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getResumeData()
        if (data) setData(data)
      } catch (err) {
        console.error('Failed to fetch resume data', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const getText = (item: ResumeItem, field: 'title' | 'description') => {
    return (
      item[`${field}_${language}` as keyof ResumeItem] ||
      item[`${field}_en` as keyof ResumeItem] ||
      ''
    )
  }

  const groupByCategory = (items: ResumeItem[]) => {
    const groups: Record<string, ResumeItem[]> = {}
    items.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = []
      groups[item.category].push(item)
    })
    return groups
  }

  const groupedData = groupByCategory(data)

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'education':
        return <GraduationCap className="h-5 w-5" />
      case 'experience':
        return <Briefcase className="h-5 w-5" />
      default:
        return <Trophy className="h-5 w-5" />
    }
  }

  const getCategoryTitle = (category: string) => {
    const key = category.toLowerCase() as keyof typeof t.resume
    return t.resume[key] || category
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-fade-in-down">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            {t.resume.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.resume.description}
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          {t.resume.download}
        </Button>
      </div>

      <Separator />

      {loading ? (
        <div className="space-y-8">
          <Skeleton className="h-10 w-1/3" />
          <div className="space-y-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(groupedData).map(([category, items], groupIndex) => (
            <div
              key={category}
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: `${groupIndex * 150}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {getIcon(category)}
                </div>
                <h2 className="text-2xl font-bold capitalize">
                  {getCategoryTitle(category)}
                </h2>
              </div>

              <div className="relative border-l-2 border-muted ml-4 pl-8 space-y-8 py-2">
                {items.map((item, index) => (
                  <div key={item.id} className="relative">
                    <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                    <Card className="border-none shadow-none bg-transparent">
                      <CardHeader className="p-0 mb-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                          <CardTitle className="text-lg font-bold">
                            {getText(item, 'title')}
                          </CardTitle>
                          {item.period && (
                            <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                              {item.period}
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 text-muted-foreground whitespace-pre-line">
                        {getText(item, 'description')}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
