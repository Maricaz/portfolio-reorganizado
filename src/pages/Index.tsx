import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  Code,
  Music,
  BookOpen,
  User,
  Download,
  Mail,
  LucideIcon,
} from 'lucide-react'
import { getLatestItem } from '@/services/database'
import { getSiteSettings } from '@/services/settings'
import { SiteSettings, Project, Book } from '@/types'
import { useAnalytics } from '@/hooks/use-analytics'
import { cn } from '@/lib/utils'

interface NavCardProps {
  to: string
  icon: LucideIcon
  title: string
  colorClass: string
  bgClass: string
}

const NavCard = ({
  to,
  icon: Icon,
  title,
  colorClass,
  bgClass,
}: NavCardProps) => (
  <Link to={to} className="group">
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full justify-center">
        <div
          className={cn(
            'p-4 rounded-full group-hover:scale-110 transition-transform',
            bgClass,
            colorClass,
          )}
        >
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </CardContent>
    </Card>
  </Link>
)

export default function Index() {
  const { t, language } = useLanguage()
  const { trackResumeDownload } = useAnalytics()
  const [latest, setLatest] = useState<{
    type: 'project' | 'book'
    item: Project | Book
  } | null>(null)
  const [settings, setSettings] = useState<Partial<SiteSettings>>({})
  const [gradient, setGradient] = useState('from-indigo-500 to-fuchsia-500')

  useEffect(() => {
    async function loadData() {
      // Pass language to ensure we get relevant content (e.g. book in correct language)
      const [latestItem, siteSettings] = await Promise.all([
        getLatestItem(language),
        getSiteSettings(),
      ])

      if (latestItem) setLatest(latestItem as any)
      if (siteSettings) {
        setSettings(siteSettings)
        if (siteSettings.brand_config?.primary_gradient) {
          setGradient(siteSettings.brand_config.primary_gradient)
        }
      }
    }
    loadData()
  }, [language])

  const handleDownloadResume = () => {
    trackResumeDownload()
    if (settings.resume_config?.url) {
      window.open(settings.resume_config.url, '_blank')
    }
  }

  const getLatestDescription = (item: any, type: 'project' | 'book') => {
    if (type === 'project') {
      const project = item as Project
      if (language === 'pt') return project.description_pt
      if (language === 'en') return project.description_en
      if (language === 'ko') return project.description_ko
      return project.description_pt || ''
    } else {
      const book = item as Book
      return book.synopsis || ''
    }
  }

  const getLatestTitle = (item: any) => {
    return item.title
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
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t.home.hero_subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild className="rounded-full px-8">
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" />
              {t.home.cta}
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
          <NavCard
            to="/it"
            icon={Code}
            title={t.home.cards.it}
            colorClass="text-blue-600 dark:text-blue-400"
            bgClass="bg-blue-100 dark:bg-blue-900/20"
          />
          <NavCard
            to="/music"
            icon={Music}
            title={t.home.cards.music}
            colorClass="text-purple-600 dark:text-purple-400"
            bgClass="bg-purple-100 dark:bg-purple-900/20"
          />
          <NavCard
            to="/books"
            icon={BookOpen}
            title={t.home.cards.books}
            colorClass="text-amber-600 dark:text-amber-400"
            bgClass="bg-amber-100 dark:bg-amber-900/20"
          />
          <NavCard
            to="/about"
            icon={User}
            title={t.home.cards.about}
            colorClass="text-green-600 dark:text-green-400"
            bgClass="bg-green-100 dark:bg-green-900/20"
          />
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
                <h3 className="text-2xl font-bold">
                  {getLatestTitle(latest.item)}
                </h3>
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
