import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getProjects } from '@/services/database'
import { Project } from '@/types'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ExternalLink, Github } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'

export default function ITPage() {
  const { t, language } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useSEO({
    title: t.it.title,
    description: 'My portfolio projects and technical achievements',
  })

  useEffect(() => {
    getProjects().then(({ data }) => {
      if (data) setProjects(data)
      setLoading(false)
    })
  }, [])

  // Extract all unique tags
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(filter))

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">{t.it.title}</h1>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            {t.it.filter_all}
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))
          : filteredProjects.map((project) => (
              <Dialog key={project.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <DialogTrigger asChild>
                        <Button variant="secondary">
                          {t.home.view_project}
                        </Button>
                      </DialogTrigger>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="line-clamp-1">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {project[`description_${language}`]}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="gap-2 pt-0">
                    {project.demo_url && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />{' '}
                          {t.it.view_live}
                        </a>
                      </Button>
                    )}
                    {project.github_url && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-3 w-3" /> {t.it.github}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>

                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <DialogDescription className="text-base text-foreground">
                      {project[`description_${language}`]}
                    </DialogDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.demo_url && (
                        <Button asChild>
                          <a href={project.demo_url} target="_blank">
                            {t.it.view_live}
                          </a>
                        </Button>
                      )}
                      {project.github_url && (
                        <Button variant="outline" asChild>
                          <a href={project.github_url} target="_blank">
                            {t.it.github}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
      </div>
    </div>
  )
}
