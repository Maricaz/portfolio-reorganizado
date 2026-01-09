import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useSEO } from '@/hooks/use-seo'
import { PhotoCarousel } from '@/components/PhotoCarousel'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { ProfileContent, SocialLink, ProfessionalSkill } from '@/types'
import {
  getProfileContent,
  getSocialLinks,
  getProfessionalSkills,
} from '@/services/about'
import {
  Instagram,
  Linkedin,
  Github,
  FileText,
  GraduationCap,
  Download,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  lattes: GraduationCap,
  resume: FileText,
}

const Paragraphs = ({ text }: { text: string }) => {
  if (!text) return null
  return (
    <div className="space-y-4">
      {text.split('\n\n').map((paragraph, index) => (
        <p
          key={index}
          className="text-lg leading-relaxed text-muted-foreground indent-pt"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default function AboutPage() {
  const { language } = useLanguage()
  const [profile, setProfile] = useState<ProfileContent | null>(null)
  const [socials, setSocials] = useState<SocialLink[]>([])
  const [skills, setSkills] = useState<ProfessionalSkill[]>([])
  const [loading, setLoading] = useState(true)

  useSEO({
    title: 'Sobre Mariana Azevedo',
    description: profile
      ? (profile[`bio_${language}` as keyof ProfileContent] as string)?.slice(
          0,
          160,
        )
      : 'About Mariana Azevedo',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileData, socialData, skillsData] = await Promise.all([
          getProfileContent(),
          getSocialLinks(),
          getProfessionalSkills(),
        ])
        setProfile(profileData)
        setSocials(socialData)
        setSkills(skillsData)
      } catch (error) {
        console.error('Error loading about page data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getIcon = (platform: string) => {
    const NormalizedPlatform = platform.toLowerCase()
    if (IconMap[NormalizedPlatform]) {
      return IconMap[NormalizedPlatform]
    }
    return IconMap['resume']
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 space-y-8">
        <Skeleton className="h-12 w-1/3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="h-[400px] w-full rounded-2xl" />
        </div>
      </div>
    )
  }

  const bio = profile
    ? (profile[`bio_${language}` as keyof ProfileContent] as string)
    : ''

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">
        Sobre Mariana Azevedo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column (Desktop) / Second (Mobile) */}
        <div className="space-y-8 order-2 md:order-1 animate-fade-in-up">
          {/* Bio */}
          <div className="prose dark:prose-invert max-w-none">
            <Paragraphs text={bio} />
          </div>

          {/* Social & Actions */}
          <div className="flex flex-wrap gap-4">
            {socials.map((link) => {
              const Icon = getIcon(link.platform)
              const isResume = link.platform === 'resume'

              return (
                <Button
                  key={link.id}
                  asChild
                  className={cn(
                    'transition-all duration-300',
                    isResume
                      ? 'btn-primary'
                      : 'glass-soft hover:bg-primary/10 text-foreground',
                  )}
                  variant={isResume ? 'default' : 'outline'}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    download={isResume}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {link.platform === 'lattes'
                      ? 'Lattes'
                      : link.platform.charAt(0).toUpperCase() +
                        link.platform.slice(1)}
                    {isResume && <Download className="ml-2 h-3 w-3" />}
                  </a>
                </Button>
              )
            })}
          </div>

          {/* Skills Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Top Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <Card key={skill.id} className="neon-card bg-card/50">
                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Desktop) / First (Mobile) */}
        <div className="order-1 md:order-2 animate-fade-in delay-200">
          <PhotoCarousel auto={true} delay={4200} />
        </div>
      </div>
    </div>
  )
}
