import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Code2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getITProjects } from '@/services/it-projects'
import { ITProject } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export const LatestItem = () => {
  const { t, language } = useLanguage()
  const [project, setProject] = useState<ITProject | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const { data } = await getITProjects()
        if (data && data.length > 0) {
          setProject(data[0])
        }
      } catch (error) {
        console.error('Failed to fetch latest project', error)
      } finally {
        setLoading(false)
      }
    }
    fetchLatest()
  }, [])

  const getLocalizedDescription = (project: ITProject) => {
    if (language === 'pt') return project.description_pt
    if (language === 'en') return project.description_en
    if (language === 'ko') return project.description_ko
    return project.description_en || ''
  }

  const getLocalizedTitle = (project: ITProject) => {
    if (language === 'ko' && project.title_ko) return project.title_ko
    return project.title
  }

  const projectLink =
    project?.live_url || project?.demo_url || project?.link || '#'

  if (loading) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row h-full">
            <Skeleton className="w-full md:w-2/5 h-48 md:h-auto" />
            <div className="p-6 md:p-8 flex-1 space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!project) {
    return null
  }

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-primary/10">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden bg-muted">
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={getLocalizedTitle(project)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <Code2 className="h-12 w-12 opacity-20" />
              </div>
            )}
            <div className="absolute top-4 left-4">
              <Badge className="bg-background/80 backdrop-blur text-foreground hover:bg-background/90">
                {t.home.latest}
              </Badge>
            </div>
          </div>
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(project.created_at).toLocaleDateString()}</span>
                <span>•</span>
                <Badge variant="outline" className="text-xs font-normal">
                  {project.category || 'Web'}
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {getLocalizedTitle(project)}
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
              {getLocalizedDescription(project)}
            </p>

            <div className="pt-2">
              <Button asChild className="group/btn">
                <Link to="/it">
                  {t.it.view_project}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
