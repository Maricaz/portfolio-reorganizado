import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Book, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getLatestItem } from '@/services/database'
import { Project, Book as BookType } from '@/types'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'

export default function Index() {
  const { t, language } = useLanguage()
  const [latest, setLatest] = useState<{
    type: string
    item: Project | BookType
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useSEO({
    title: t.nav.home,
    description: t.about.bio,
  })

  useEffect(() => {
    getLatestItem(language).then((res) => {
      setLatest(res)
      setLoading(false)
    })
  }, [language])

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col justify-center items-start text-left space-y-6 max-w-4xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-[url('https://img.usecurling.com/p/1200/800?q=abstract%20cyberpunk&color=blue')] bg-cover bg-center opacity-10 blur-3xl rounded-full" />

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight animate-fade-in-down">
          {t.home.hero_title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-muted-foreground animate-fade-in-up delay-100">
          {t.home.hero_subtitle}
        </h2>

        <div className="flex gap-4 pt-4 animate-fade-in delay-200">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              {t.nav.contact} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/about">{t.home.explore}</Link>
          </Button>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-300">
        <Link to="/it" className="group">
          <Card className="h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>{t.nav.it}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t.it.title}</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/music" className="group">
          <Card className="h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <CardHeader>
              <Music className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>{t.nav.music}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t.music.title}</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/books" className="group">
          <Card className="h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <CardHeader>
              <Book className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>{t.nav.books}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{t.books.title}</p>
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* Latest Update */}
      <section className="bg-muted/30 p-8 rounded-2xl border border-border/50 animate-fade-in delay-500">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          {t.home.latest}
        </h3>

        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : latest ? (
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <img
              src={
                latest.type === 'project'
                  ? (latest.item as Project).image_url
                  : (latest.item as BookType).cover_url
              }
              alt={latest.item.title}
              className="w-full md:w-32 h-32 object-cover rounded-lg shadow-sm"
            />
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                {latest.type === 'project' ? 'Project' : 'Book'}
              </span>
              <h4 className="text-2xl font-bold mt-2">{latest.item.title}</h4>
              <p className="text-muted-foreground mt-1 max-w-2xl line-clamp-2">
                {latest.type === 'project'
                  ? (latest.item as Project).description
                  : (latest.item as BookType).review}
              </p>
              <Button asChild variant="link" className="px-0 mt-2">
                <Link to={latest.type === 'project' ? '/it' : '/books'}>
                  {t.it.view_project} <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground">No updates found.</p>
        )}
      </section>
    </div>
  )
}
