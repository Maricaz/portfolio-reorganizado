import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Code, BookOpen, Music, User } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useSEO } from '@/hooks/use-seo'
import { useAnalytics } from '@/hooks/use-analytics'
import { LatestItem } from '@/components/LatestItem'
import profileImage from '@/assets/profile.jpg' // Assuming this exists, otherwise placeholder

export default function Index() {
  const { t } = useLanguage()
  const { trackEvent } = useAnalytics()

  useSEO({
    title: t.home.hero_title,
    description: t.home.hero_subtitle,
  })

  const cards = [
    {
      title: t.home.cards.it,
      icon: Code,
      link: '/it',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      title: t.home.cards.music,
      icon: Music,
      link: '/music',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
    {
      title: t.home.cards.books,
      icon: BookOpen,
      link: '/books',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
    },
    {
      title: t.home.cards.about,
      icon: User,
      link: '/about',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
  ]

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 animate-fade-in-down">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {t.home.hero_title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {t.home.hero_subtitle}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 shadow-lg" asChild>
              <Link to="/contact">{t.home.cta}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link to="/resume">{t.nav.resume}</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end animate-float">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/10">
            <img
              src="https://img.usecurling.com/ppl/large?gender=female&seed=mari"
              alt="Mariana Azevedo"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
        {cards.map((card, index) => (
          <Link
            key={card.link}
            to={card.link}
            onClick={() => trackEvent('nav_click', { link: card.link })}
            className="group"
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/5 hover:border-primary/20 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center p-8 gap-4 text-center h-full">
                <div
                  className={`p-4 rounded-2xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      {/* Latest Updates */}
      <section className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-3xl font-bold">{t.home.latest}</h2>
          <Button variant="ghost" asChild>
            <Link to="/it">{t.home.explore} &rarr;</Link>
          </Button>
        </div>
        <LatestItem />
      </section>
    </div>
  )
}
