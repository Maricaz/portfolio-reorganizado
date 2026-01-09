import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Book, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getLatestItem } from '@/services/database'
import { ITProject, Book as BookType } from '@/types'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'

export default function Index() {
  const { t, language } = useLanguage()
  const [latest, setLatest] = useState<{
    type: string
    item: ITProject | BookType
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
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col justify-center items-center text-center space-y-8 max-w-4xl mx-auto py-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full opacity-50" />

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight animate-fade-in-down bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t.home.hero_title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-muted-foreground animate-fade-in-up delay-100">
          {t.home.hero_subtitle}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in delay-200">
          <Button asChild size="lg" className="rounded-full h-12 px-8 text-lg">
            <Link to="/contact">
              {t.nav.contact} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full h-12 px-8 text-lg"
          >
            <Link to="/about">{t.home.explore}</Link>
          </Button>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-300">
        <Link to="/it" className="group block">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
            <CardHeader>
              <Code className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-xl">{t.nav.it}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.it.title}</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/music" className="group block">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
            <CardHeader>
              <Music className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-xl">{t.nav.music}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.music.title}</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/books" className="group block">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
            <CardHeader>
              <Book className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-xl">{t.nav.books}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.books.title}</p>
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* Latest Update */}
      <section className="bg-muted/30 p-8 rounded-2xl border border-border/50 animate-fade-in delay-500 hover:bg-muted/50 transition-colors">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {t.home.latest}
        </h3>

        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-24 w-full" />
          </div>
        ) : latest ? (
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-48 h-48 shrink-0 overflow-hidden rounded-xl shadow-md">
              <img
                src={
                  latest.type === 'project'
                    ? (latest.item as ITProject).image_url
                    : (latest.item as BookType).cover_url
                }
                alt={latest.item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                  {latest.type === 'project' ? 'Project' : 'Book'}
                </span>
                <span className="text-xs text-muted-foreground">
                  {new Date(latest.item.created_at).toLocaleDateString()}
                </span>
              </div>
              <h4 className="text-3xl font-bold">{latest.item.title}</h4>
              <p className="text-muted-foreground text-lg leading-relaxed line-clamp-2">
                {latest.type === 'project'
                  ? (latest.item as ITProject).description
                  : (latest.item as BookType).review}
              </p>
              <Button asChild variant="link" className="px-0 text-lg">
                <Link to={latest.type === 'project' ? '/it' : '/books'}>
                  {t.it.view_project} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground italic">No updates found.</p>
        )}
      </section>
    </div>
  )
}
