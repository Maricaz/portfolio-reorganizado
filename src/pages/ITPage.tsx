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
import { ExternalLink } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'

export default function ITPage() {
  const { t, language } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: t.it.title,
    description: 'My technical projects and portfolio',
  })

  useEffect(() => {
    getProjects(language).then(({ data }) => {
      if (data) setProjects(data)
      setLoading(false)
    })
  }, [language])

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{t.it.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))
          : projects.map((project) => (
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
                        <Button variant="secondary">{t.it.view_project}</Button>
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
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech_stack?.map((tag) => (
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

                  <CardFooter>
                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" /> Link
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
                      {project.description}
                    </DialogDescription>
                    <div>
                      <h4 className="font-semibold mb-2">{t.it.tech_stack}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack?.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
      </div>
    </div>
  )
}
