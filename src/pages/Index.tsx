import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Code, Music, BookOpen, User, Download } from 'lucide-react'
import { getLatestItem } from '@/services/database'
import { getSiteSettings } from '@/services/settings'
import { SiteSettings } from '@/types'
import { useAnalytics } from '@/hooks/use-analytics'
import { cn } from '@/lib/utils'

export default function Index() {
  const { t, language } = useLanguage()
  const { trackResumeDownload } = useAnalytics()
  const [latest, setLatest] = useState<any>(null)
  const [settings, setSettings] = useState<Partial<SiteSettings>>({})
  const [gradient, setGradient] = useState('from-indigo-500 to-fuchsia-500')

  useEffect(() => {
    async function loadData() {
      const [latestItem, siteSettings] = await Promise.all([
        getLatestItem(),
        getSiteSettings(),
      ])

      if (latestItem) setLatest(latestItem)
      if (siteSettings) {
        setSettings(siteSettings)
        if (siteSettings.brand_config?.primary_gradient) {
          setGradient(siteSettings.brand_config.primary_gradient)
        }
      }
    }
    loadData()
  }, [])

  const handleDownloadResume = () => {
    trackResumeDownload()
    if (settings.resume_config?.url) {
      window.open(settings.resume_config.url, '_blank')
    }
  }

  const getLatestDescription = (item: any, type: 'project' | 'book') => {
    if (type === 'project') {
      return (
        item[`description_${language}`] ||
        item.description_en ||
        item.description_pt ||
        ''
      )
    } else {
      return (
        item[`review_${language}`] || item.review_en || item.review_pt || ''
      )
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 space-y-8 animate-fade-in">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            <span
              className={cn(
                'bg-clip-text text-transparent bg-gradient-to-r',
                gradient,
              )}
            >
              {t.home.hero_title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t.home.hero_subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild className="rounded-full px-8">
            <Link to="/it">
              {t.home.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            onClick={handleDownloadResume}
            disabled={!settings.resume_config?.url}
          >
            <Download className="mr-2 h-4 w-4" />
            {t.home.resume_btn}
          </Button>
        </div>
      </section>

      {/* Cards Navigation */}
      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/it" className="group">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full justify-center">
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg">{t.home.cards.it}</h3>
              </CardContent>
            </Card>
          </Link>

          <Link to="/music" className="group">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full justify-center">
                <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <Music className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg">{t.home.cards.music}</h3>
              </CardContent>
            </Card>
          </Link>

          <Link to="/books" className="group">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full justify-center">
                <div className="p-4 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg">{t.home.cards.books}</h3>
              </CardContent>
            </Card>
          </Link>

          <Link to="/about" className="group">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full justify-center">
                <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg">{t.home.cards.about}</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Latest Update Preview */}
      {latest && (
        <section className="container px-4 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">{t.home.latest}</h2>
            <Button variant="ghost" asChild>
              <Link to={latest.type === 'project' ? '/it' : '/books'}>
                {t.home.explore} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto relative">
                {latest.item.image_url ? (
                  <img
                    src={latest.item.image_url}
                    alt={latest.item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center">
                    {latest.type === 'project' ? (
                      <Code className="h-12 w-12 text-muted-foreground/50" />
                    ) : (
                      <BookOpen className="h-12 w-12 text-muted-foreground/50" />
                    )}
                  </div>
                )}
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="text-sm font-medium text-primary uppercase tracking-wider">
                  {latest.type === 'project' ? t.nav.projects : t.nav.books}
                </div>
                <h3 className="text-2xl font-bold">{latest.item.title}</h3>
                <p className="text-muted-foreground line-clamp-2">
                  {getLatestDescription(latest.item, latest.type)}
                </p>
                <Button variant="outline" className="w-fit" asChild>
                  <Link to={latest.type === 'project' ? '/it' : '/books'}>
                    {t.home.explore}
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      )}
    </div>
  )
}
