import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getITProjects } from '@/services/it-projects'
import { ITProject } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Cpu, Code2 } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'
import { useAnalytics } from '@/hooks/use-analytics'

export default function ITPage() {
  const { t, language } = useLanguage()
  const { trackITProjectClick } = useAnalytics()
  const [projects, setProjects] = useState<ITProject[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: `${t.projects.title} — Mariana Azevedo`,
    description: t.projects.description,
  })

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await getITProjects()
        if (data) setProjects(data)
        if (error) console.error('Failed to fetch IT projects', error)
      } catch (err) {
        console.error('Failed to fetch IT projects', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const getDescription = (project: ITProject) => {
    if (language === 'pt') return project.description_pt
    if (language === 'en') return project.description_en
    if (language === 'ko') return project.description_ko
    return project.description_en || ''
  }

  const getTitle = (project: ITProject) => {
    if (language === 'ko' && project.title_ko) return project.title_ko
    return project.title
  }

  const handleProjectClick = (title: string, link: string) => {
    trackITProjectClick(title, link)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl space-y-12">
      <div className="flex flex-col items-center text-center space-y-4 animate-fade-in-down">
        <div className="p-4 bg-primary/10 rounded-full">
          <Cpu className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {t.projects.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {t.projects.description}
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4 h-full">
              <Skeleton className="h-64 w-full rounded-xl" />
            </div>
          ))}
        </div>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                  {getTitle(project)}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags?.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-normal rounded-full border-primary/20 bg-primary/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-6">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {getDescription(project)}
                </p>

                {project.link && project.link !== '#' && (
                  <Button
                    variant="default"
                    className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                    onClick={() =>
                      handleProjectClick(getTitle(project), project.link!)
                    }
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.it.view_project || 'Ver Projeto'}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed animate-fade-in">
          <Code2 className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
          <p className="text-muted-foreground">{t.projects.no_projects}</p>
        </div>
      )}
    </div>
  )
}
