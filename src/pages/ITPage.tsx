import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getITProjects } from '@/services/database'
import { ITProject } from '@/types'
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
  const [projects, setProjects] = useState<ITProject[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: t.it.title,
    description: 'My technical projects and portfolio',
  })

  useEffect(() => {
    getITProjects(language).then(({ data }) => {
      if (data) setProjects(data)
      setLoading(false)
    })
  }, [language])

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold border-b pb-4">{t.it.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden border-border/60">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="text-white border-white hover:bg-white hover:text-black"
                        >
                          {t.it.view_project}
                        </Button>
                      </DialogTrigger>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="line-clamp-1 text-xl">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech_stack?.slice(0, 4).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-mono text-[10px] px-2"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tech_stack?.length > 4 && (
                        <Badge variant="outline" className="text-[10px] px-2">
                          +{project.tech_stack.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full gap-2"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" /> Link
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>

                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-6">
                      <DialogDescription className="text-base text-foreground leading-relaxed">
                        {project.description}
                      </DialogDescription>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          {t.it.tech_stack}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech_stack?.map((tag) => (
                            <Badge key={tag} className="text-sm py-1 px-3">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.link && (
                        <Button className="w-full md:w-auto" asChild>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Visit
                            Project
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
