import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getSocialLinks, getSkills } from '@/services/about'
import {
  getResumeExperience,
  getResumeCertifications,
  ResumeExperience,
  ResumeCertification,
} from '@/services/resume'
import { SocialLink, ResumeSkill } from '@/types'
import { Skeleton } from '@/components/ui/skeleton'
import { useSEO } from '@/hooks/use-seo'
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Globe,
  Code2,
  Briefcase,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { AboutGallery } from '@/components/AboutGallery'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { CertificationsGrid } from '@/components/CertificationsGrid'

export default function AboutPage() {
  const { t } = useLanguage()
  const [socials, setSocials] = useState<SocialLink[]>([])
  const [skills, setSkills] = useState<ResumeSkill[]>([])
  const [experience, setExperience] = useState<ResumeExperience[]>([])
  const [certifications, setCertifications] = useState<ResumeCertification[]>(
    [],
  )
  const [loading, setLoading] = useState(true)

  useSEO({
    title: `${t.about.title} - Portfolio`,
    description: t.about.paragraphs[0],
  })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [socialsRes, skillsRes, expRes, certRes] = await Promise.all([
          getSocialLinks(),
          getSkills(),
          getResumeExperience(),
          getResumeCertifications(),
        ])

        if (socialsRes) setSocials(socialsRes)
        if (skillsRes) setSkills(skillsRes)
        if (expRes.data) setExperience(expRes.data)
        if (certRes.data) setCertifications(certRes.data)
      } catch (error) {
        console.error('Failed to fetch data', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const getIcon = (platform: string) => {
    const p = platform.toLowerCase()
    const iconClass = 'h-5 w-5'
    if (p.includes('github')) return <Github className={iconClass} />
    if (p.includes('linkedin')) return <Linkedin className={iconClass} />
    if (p.includes('youtube')) return <Youtube className={iconClass} />
    if (p.includes('instagram')) return <Instagram className={iconClass} />
    if (p.includes('twitter') || p.includes(' x '))
      return <Twitter className={iconClass} />
    if (p.includes('facebook')) return <Facebook className={iconClass} />
    if (p.includes('mail') || p.includes('email'))
      return <Mail className={iconClass} />
    return <Globe className={iconClass} />
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl space-y-20">
      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
            {t.about.title}
          </h1>
          <div className="prose dark:prose-invert space-y-4 max-w-none text-justify">
            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed indent-pt"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {loading ? (
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-10 w-24" />
                ))}
              </div>
            ) : (
              socials.map((social) => (
                <Button
                  key={social.id}
                  variant="outline"
                  asChild
                  className="gap-2 shadow-sm hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all duration-300 group"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {getIcon(social.platform)}
                    </span>
                    {social.platform}
                  </a>
                </Button>
              ))
            )}
          </div>
        </div>

        <div className="animate-fade-in-up space-y-4">
          <AboutGallery />
          <p className="text-xs text-muted-foreground text-center italic">
            {t.about.carousel_hint}
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-xl text-purple-600 dark:text-purple-400">
            <Briefcase className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
            {t.resume.experience}
          </h2>
        </div>
        <ExperienceTimeline items={experience} loading={loading} />
      </div>

      {/* Certifications Section */}
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-xl text-purple-600 dark:text-purple-400">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
            {t.resume.certifications}
          </h2>
        </div>
        <CertificationsGrid items={certifications} loading={loading} />
      </div>

      {/* Skills Section */}
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-xl text-purple-600 dark:text-purple-400">
            <Code2 className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
            {t.about.skills_title}
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill) => (
              <div key={skill.id} className="space-y-2 group">
                <div className="flex justify-between text-sm">
                  <span className="font-medium group-hover:text-cyan-500 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground font-mono">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress
                  value={skill.proficiency}
                  className="h-2.5 bg-secondary/50"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
