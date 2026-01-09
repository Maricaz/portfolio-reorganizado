import { useLanguage } from '@/contexts/LanguageContext'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Cpu, Music2, BookOpen, User2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useSEO } from '@/hooks/use-seo'
import { useAnalytics } from '@/hooks/use-analytics'
import { cn } from '@/lib/utils'

export default function Index() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const { trackResumeDownload } = useAnalytics()
  const resumeUrl = '/resume.pdf' // Placeholder for actual resume URL

  useSEO({
    title: 'Mariana Azevedo — Portfólio de TI, Música e Livros',
    description: 'Portfólio vivo.',
  })

  const handleResumeClick = () => {
    trackResumeDownload()
    window.open(resumeUrl, '_blank')
  }

  const cards = [
    {
      icon: Cpu,
      title: t.home.cards.it,
      href: '/it',
      color: 'text-blue-500',
    },
    {
      icon: Music2,
      title: t.home.cards.music,
      href: '/music',
      color: 'text-purple-500',
    },
    {
      icon: BookOpen,
      title: t.home.cards.books,
      href: '/books',
      color: 'text-green-500',
    },
    {
      icon: User2,
      title: t.home.cards.about,
      href: '/about',
      color: 'text-pink-500',
    },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Hero Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/capa.jpg"
          alt="Mariana Azevedo"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7efe6]/40 to-[#f7efe6] dark:from-zinc-900/40 dark:to-zinc-950/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex min-h-screen items-center justify-center px-4 py-20">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 items-center">
          {/* Left Column: Hero Text & CTA */}
          <div className="flex flex-col items-center space-y-8 text-center md:items-start md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
              {t.home.hero_title}
            </h1>
            <h2 className="text-xl text-muted-foreground sm:text-2xl md:text-3xl font-light animate-fade-in-up delay-100 max-w-2xl">
              {t.home.hero_subtitle}
            </h2>

            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up delay-200">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg gap-2"
                onClick={() => navigate('/contact')}
              >
                <Mail className="h-5 w-5" />
                {t.home.cta_contact}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-lg gap-2 bg-background/50 backdrop-blur-sm"
                onClick={handleResumeClick}
              >
                <Download className="h-5 w-5" />
                {t.home.resume_btn}
              </Button>
            </div>
          </div>

          {/* Right Column: Feature Cards Grid */}
          <div className="glass-soft p-6 rounded-3xl animate-fade-in delay-300">
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, index) => {
                const Icon = card.icon
                return (
                  <Link key={index} to={card.href} className="group">
                    <Card className="h-full border-primary/10 bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                        <div
                          className={cn(
                            'p-3 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors',
                            card.color,
                          )}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                        <span className="font-semibold text-sm sm:text-base leading-tight">
                          {card.title}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
