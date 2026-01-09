import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getProfileContent, getSocialLinks, getSkills } from '@/services/about'
import { SocialLink, Skill } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  ExternalLink,
  Code2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { PhotoCarousel } from '@/components/PhotoCarousel'

export default function AboutPage() {
  const { t, language } = useLanguage()
  const [socials, setSocials] = useState<SocialLink[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: `${t.about.title} - Portfolio`,
    description: t.about.description,
  })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const [socialsRes, skillsRes] = await Promise.all([
        getSocialLinks(),
        getSkills(),
      ])

      if (socialsRes) setSocials(socialsRes)
      if (skillsRes) setSkills(skillsRes)
      setLoading(false)
    }
    fetchData()
  }, [])

  const getIcon = (platform: string) => {
    const p = platform.toLowerCase()
    if (p.includes('github')) return <Github className="h-5 w-5" />
    if (p.includes('linkedin')) return <Linkedin className="h-5 w-5" />
    if (p.includes('youtube')) return <Youtube className="h-5 w-5" />
    if (p.includes('instagram')) return <Instagram className="h-5 w-5" />
    return <ExternalLink className="h-5 w-5" />
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-down">
          <h1 className="text-4xl font-bold tracking-tight">{t.about.title}</h1>
          <div className="prose dark:prose-invert">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
            {/* Hardcoded profile text for now as it's not in the new schema requirements */}
            <p className="text-muted-foreground leading-relaxed mt-4">
              {language === 'pt' &&
                'Sou uma desenvolvedora apaixonada por tecnologia e música. Crio soluções digitais que conectam pessoas e ideias.'}
              {language === 'en' &&
                'I am a developer passionate about technology and music. I create digital solutions that connect people and ideas.'}
              {language === 'ko' &&
                '저는 기술과 음악에 열정적인 개발자입니다. 사람과 아이디어를 연결하는 디지털 솔루션을 만듭니다.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {loading ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              socials.map((social) => (
                <Button
                  key={social.id}
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getIcon(social.platform)}
                    {social.platform}
                  </a>
                </Button>
              ))
            )}
          </div>
        </div>

        <div className="animate-fade-in-up">
          <PhotoCarousel />
        </div>
      </div>

      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Code2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {skills.map((skill) => (
              <div key={skill.id} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.label}</span>
                  <span className="text-muted-foreground">{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
