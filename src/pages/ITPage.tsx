import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getProjects } from '@/services/database'
import { Project, Language } from '@/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'

export default function ITPage() {
  const { t, language } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: `${t.projects.title} - Portfolio`,
    description: t.projects.description,
  })

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await getProjects()
        if (data) setProjects(data)
      } catch (err) {
        console.error('Failed to fetch projects', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const getDescription = (project: Project) => {
    return (
      project[`description_${language}` as keyof Project] ||
      project.description_en ||
      ''
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
      <div className="space-y-4 text-center md:text-left animate-fade-in-down">
        <h1 className="text-4xl font-bold tracking-tight">
          {t.projects.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {t.projects.description}
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                {project.image_url ? (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted/50 text-muted-foreground">
                    <Code2 className="h-12 w-12 opacity-20" />
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech_stack?.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="line-clamp-3">
                  {getDescription(project)}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-2 pt-0">
                {project.demo_url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.projects.view_demo}
                    </a>
                  </Button>
                )}
                {project.github_url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t.projects.view_code}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed">
          <Code2 className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
          <p className="text-muted-foreground">{t.projects.no_projects}</p>
        </div>
      )}
    </div>
  )
}
