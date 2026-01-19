import { useEffect, useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getITProjects } from '@/services/it-projects'
import { ITProject } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Cpu, Code2, Github, Filter, Layers } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'
import { useAnalytics } from '@/hooks/use-analytics'

export default function ITPage() {
  const { t, language } = useLanguage()
  const { trackProjectOpen, trackEvent } = useAnalytics()
  const [projects, setProjects] = useState<ITProject[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTech, setSelectedTech] = useState<string>('All')

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

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category || 'Other'))
    return ['All', ...Array.from(cats)]
  }, [projects])

  const technologies = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach((p) => {
      p.tags?.forEach((tag) => techs.add(tag))
    })
    return ['All', ...Array.from(techs).sort()]
  }, [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === 'All' ||
        (project.category || 'Other') === selectedCategory
      const techMatch =
        selectedTech === 'All' ||
        (project.tags && project.tags.includes(selectedTech))
      return categoryMatch && techMatch
    })
  }, [projects, selectedCategory, selectedTech])

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
    trackProjectOpen(title, link)
  }

  const handleFilterChange = (type: 'category' | 'tech', value: string) => {
    if (type === 'category') setSelectedCategory(value)
    else setSelectedTech(value)

    trackEvent('filter_projects', { type, value })
  }

  const getProjectLink = (project: ITProject) => {
    return project.live_url || project.demo_url || project.link
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl space-y-12">
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

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start md:items-center bg-muted/20 p-6 rounded-2xl animate-fade-in">
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <label className="text-sm font-medium flex items-center gap-2">
            <Layers className="h-4 w-4" /> {t.projects.filter_category}
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilterChange('category', cat)}
                className="rounded-full text-xs"
              >
                {cat === 'All' ? t.projects.filter_all : cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-px h-12 bg-border" />

        <div className="flex flex-col gap-2 w-full md:w-auto">
          <label className="text-sm font-medium flex items-center gap-2">
            <Filter className="h-4 w-4" /> {t.projects.filter_tech}
          </label>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 8).map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilterChange('tech', tech)}
                className="rounded-full text-xs"
              >
                {tech === 'All' ? t.projects.filter_all : tech}
              </Button>
            ))}
            {technologies.length > 8 && (
              <select
                className="h-8 rounded-full border border-input bg-transparent px-3 py-1 text-xs shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={selectedTech}
                onChange={(e) => handleFilterChange('tech', e.target.value)}
              >
                <option value="All">More...</option>
                {technologies.slice(8).map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4 h-full">
              <Skeleton className="h-64 w-full rounded-xl" />
            </div>
          ))}
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="flex flex-col h-full animate-fade-in-up group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl bg-muted">
                {project.image_url ? (
                  <img
                    src={project.image_url}
                    alt={getTitle(project)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted/30">
                    <Code2 className="h-12 w-12 text-muted-foreground/30" />
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <Badge
                    variant="secondary"
                    className="backdrop-blur-md bg-background/80"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                  {getTitle(project)}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags?.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[10px] font-normal rounded-md border-primary/20 bg-primary/5 px-2"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tags && project.tags.length > 4 && (
                    <Badge variant="outline" className="text-[10px] px-1">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-6 pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {getDescription(project)}
                </p>

                <div className="flex gap-3 mt-auto">
                  {getProjectLink(project) &&
                    getProjectLink(project) !== '#' && (
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        asChild
                        onClick={() =>
                          handleProjectClick(
                            getTitle(project),
                            getProjectLink(project)!,
                          )
                        }
                      >
                        <a
                          href={getProjectLink(project)!}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
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
                      onClick={() =>
                        handleProjectClick(
                          getTitle(project),
                          project.github_url!,
                        )
                      }
                    >
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="mr-2 h-3 w-3" />
                        {t.projects.view_code}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed animate-fade-in">
          <Code2 className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
          <p className="text-muted-foreground">{t.projects.no_projects}</p>
          <Button
            variant="link"
            onClick={() => {
              setSelectedCategory('All')
              setSelectedTech('All')
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}
