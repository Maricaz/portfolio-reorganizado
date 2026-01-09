import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getResumeData } from '@/services/database'
import { ResumeItem } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Briefcase, GraduationCap, Trophy, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSEO } from '@/hooks/use-seo'
import { NeonTabs } from '@/components/NeonTabs'

export default function ResumePage() {
  const { t, language } = useLanguage()
  const [data, setData] = useState<ResumeItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('experience')

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

  const getText = (
    item: ResumeItem,
    field: 'title' | 'description' | 'institution',
  ) => {
    // For institution/subtitle, we use the specific column or fallback to period if misused in early dev
    if (field === 'institution') {
      return item.institution || ''
    }

    return (
      item[`${field}_${language}` as keyof ResumeItem] ||
      item[`${field}_en` as keyof ResumeItem] ||
      ''
    )
  }

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'education':
        return <GraduationCap className="h-5 w-5" />
      case 'experience':
        return <Briefcase className="h-5 w-5" />
      case 'skills':
      default:
        return <Trophy className="h-5 w-5" />
    }
  }

  const tabs = [
    { value: 'experience', label: t.resume.experience },
    { value: 'education', label: t.resume.education },
    { value: 'skills', label: t.resume.skills },
  ]

  const filteredData = data.filter((item) => item.category === activeTab)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
      {/* Header */}
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

      {/* Navigation Tabs */}
      <div className="sticky top-[4.5rem] z-40 bg-background/95 backdrop-blur py-2 -mx-4 px-4 md:mx-0 md:px-0">
        <NeonTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          className="max-w-md mx-auto md:mx-0"
        />
      </div>

      {/* Content */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="min-h-[400px]"
      >
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-12 w-12 rounded-full shrink-0" />
                <div className="space-y-2 w-full">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredData.length > 0 ? (
          <div className="space-y-8 animate-fade-in">
            {/* Filtered List */}
            <div className="relative border-l-2 border-muted ml-4 pl-8 space-y-8 py-2">
              {filteredData.map((item, index) => (
                <div
                  key={item.id}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-[41px] top-1 p-1 rounded-full bg-background border-2 border-primary text-primary">
                    {getIcon(item.category)}
                  </div>

                  <Card className="neon-card border-none bg-transparent">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                        <div className="space-y-1">
                          <CardTitle className="text-lg font-bold">
                            {getText(item, 'title')}
                          </CardTitle>
                          {getText(item, 'institution') && (
                            <p className="text-sm font-semibold text-muted-foreground">
                              {getText(item, 'institution')}
                            </p>
                          )}
                        </div>
                        {item.period && (
                          <span className="self-start md:self-center text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                            {item.period}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-muted-foreground whitespace-pre-line text-sm md:text-base">
                      {getText(item, 'description')}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
            <Trophy className="h-12 w-12 text-muted-foreground/30" />
            <p className="text-muted-foreground">
              {t.common.error || 'No items found for this category.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
