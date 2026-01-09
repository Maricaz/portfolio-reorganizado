import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Book, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getLatestItem } from '@/services/database'
import { Project, Book as BookType } from '@/types'
import { Skeleton } from '@/components/ui/skeleton'

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000)
      return
    }
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1))
      },
      reverse ? 75 : 150,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, texts])

  return (
    <span className="border-r-2 border-primary pr-1 animate-pulse">
      {texts[index].substring(0, subIndex)}
    </span>
  )
}

export default function Index() {
  const { t, language } = useLanguage()
  const [latest, setLatest] = useState<{
    type: string
    item: Project | BookType
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLatestItem().then((res) => {
      setLatest(res)
      setLoading(false)
    })
  }, [])

  const roles = [t.home.role_1, t.home.role_2, t.home.role_3]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-start text-left space-y-6 max-w-4xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-[url('https://img.usecurling.com/p/1200/800?q=abstract%20art&color=blue')] bg-cover bg-center opacity-10 blur-3xl rounded-full" />

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
          Hello, I'm <span className="text-primary">Dev</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-muted-foreground h-12">
          I am a <Typewriter texts={roles} />
        </h2>

        <div className="flex gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              {t.nav.contact} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/about">{t.nav.about}</Link>
          </Button>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
        <Link to="/it" className="group">
          <Card className="h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.nav.it}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Explore my code, projects and technical skills.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/music" className="group">
          <Card className="h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <CardHeader>
              <Music className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.nav.music}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Listen to my tracks and check out my musical journey.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/books" className="group">
          <Card className="h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <CardHeader>
              <Book className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.nav.books}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Curated list of books that shaped my thinking.
              </p>
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* Latest Update */}
      <section className="bg-muted/30 p-8 rounded-2xl border border-border/50 animate-fade-in">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          {t.home.latest_update}
        </h3>

        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : latest ? (
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <img
              src={latest.item.image_url}
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
                  ? (latest.item as Project)[`description_${language}`]
                  : (latest.item as BookType)[`review_${language}`]}
              </p>
              <Button asChild variant="link" className="px-0 mt-2">
                <Link to={latest.type === 'project' ? '/it' : '/books'}>
                  {t.home.view_project} <ArrowRight className="ml-1 h-3 w-3" />
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
