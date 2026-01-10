import { useEffect, useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  getResumeExperience,
  getResumeEducation,
  getResumeSkills,
  getResumeCertifications,
  getResumeLanguages,
  getResumePublications,
  ResumeExperience,
  ResumeEducation,
  ResumeSkill,
  ResumeCertification,
  ResumeLanguage,
  ResumePublication,
} from '@/services/resume'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useSEO } from '@/hooks/use-seo'
import { useAnalytics } from '@/hooks/use-analytics'
import { getSiteSettings } from '@/services/settings'
import {
  Download,
  Briefcase,
  GraduationCap,
  Trophy,
  Award,
  Languages,
  BookOpen,
  MapPin,
  Calendar,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ResumePage() {
  const { t, language } = useLanguage()
  const { trackResumeDownload } = useAnalytics()
  const [loading, setLoading] = useState(true)
  const [experience, setExperience] = useState<ResumeExperience[]>([])
  const [education, setEducation] = useState<ResumeEducation[]>([])
  const [skills, setSkills] = useState<ResumeSkill[]>([])
  const [certifications, setCertifications] = useState<ResumeCertification[]>(
    [],
  )
  const [languages, setLanguages] = useState<ResumeLanguage[]>([])
  const [publications, setPublications] = useState<ResumePublication[]>([])
  const [resumeUrl, setResumeUrl] = useState<string | null>(null)

  useSEO({
    title: `${t.resume.title} - Portfolio`,
    description: t.resume.description,
  })

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true)
        const [exp, edu, ski, cert, lang, pub, settings] = await Promise.all([
          getResumeExperience(),
          getResumeEducation(),
          getResumeSkills(),
          getResumeCertifications(),
          getResumeLanguages(),
          getResumePublications(),
          getSiteSettings(),
        ])

        if (exp.data) setExperience(exp.data)
        if (edu.data) setEducation(edu.data)
        if (ski.data) setSkills(ski.data)
        if (cert.data) setCertifications(cert.data)
        if (lang.data) setLanguages(lang.data)
        if (pub.data) setPublications(pub.data)
        if (settings.resume_config?.url)
          setResumeUrl(settings.resume_config.url)
      } catch (err) {
        console.error('Failed to fetch resume data', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAllData()
  }, [])

  const handleDownload = () => {
    trackResumeDownload()
    if (resumeUrl) {
      window.open(resumeUrl, '_blank')
    }
  }

  const getLocalizedText = (
    item: any,
    field: string,
    fallback: string = '',
  ) => {
    const key = `${field}_${language}`
    return item[key] || item[`${field}_en`] || fallback
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(
      language === 'ko' ? 'ko-KR' : language === 'pt' ? 'pt-BR' : 'en-US',
      {
        year: 'numeric',
        month: 'short',
      },
    ).format(date)
  }

  const groupedSkills = useMemo(() => {
    const grouped: Record<string, ResumeSkill[]> = {}
    skills.forEach((skill) => {
      const cat = skill.category || 'Other'
      if (!grouped[cat]) grouped[cat] = []
      grouped[cat].push(skill)
    })
    return grouped
  }, [skills])

  const LoadingSkeleton = () => (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="animate-pulse">
          <CardHeader className="space-y-2">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-20 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-fade-in-down">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            {t.resume.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.resume.description}
          </p>
        </div>
        <Button
          variant="outline"
          className="gap-2 shadow-sm hover:shadow-md transition-all"
          onClick={handleDownload}
          disabled={!resumeUrl}
        >
          <Download className="h-4 w-4" />
          {t.resume.download}
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="experience" className="space-y-8">
        <TabsList className="flex flex-wrap h-auto w-full justify-start gap-2 bg-transparent p-0">
          <TabsTrigger
            value="experience"
            className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
          >
            <Briefcase className="mr-2 h-4 w-4" />
            {t.resume.experience}
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
          >
            <Trophy className="mr-2 h-4 w-4" />
            {t.resume.skills}
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
          >
            <GraduationCap className="mr-2 h-4 w-4" />
            {t.resume.education}
          </TabsTrigger>
          <TabsTrigger
            value="certifications"
            className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
          >
            <Award className="mr-2 h-4 w-4" />
            {t.resume.certifications}
          </TabsTrigger>
          <TabsTrigger
            value="languages"
            className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
          >
            <Languages className="mr-2 h-4 w-4" />
            {t.resume.languages}
          </TabsTrigger>
          <TabsTrigger
            value="publications"
            className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            {t.resume.publications}
          </TabsTrigger>
        </TabsList>

        <div className="min-h-[400px]">
          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6 animate-fade-in">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <div className="relative border-l-2 border-primary/20 ml-3 space-y-12">
                {experience.map((item) => (
                  <div key={item.id} className="relative pl-8 group">
                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform duration-300" />
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {getLocalizedText(item, 'role')}
                          </h3>
                          <div className="text-lg font-medium text-muted-foreground">
                            {item.company}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap flex flex-col items-start md:items-end">
                          <span className="flex items-center gap-1 font-medium text-primary">
                            <Calendar className="h-3 w-3" />
                            {formatDate(item.start_date)} -{' '}
                            {item.is_current ? (
                              <Badge
                                variant="secondary"
                                className="text-[10px] px-1"
                              >
                                {t.resume.present}
                              </Badge>
                            ) : (
                              formatDate(item.end_date!)
                            )}
                          </span>
                          <span className="flex items-center gap-1 mt-1 opacity-75">
                            <MapPin className="h-3 w-3" />
                            {getLocalizedText(item, 'location')}
                          </span>
                        </div>
                      </div>
                      <div className="text-muted-foreground/90 whitespace-pre-line text-sm md:text-base leading-relaxed">
                        {getLocalizedText(item, 'description')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Skills Tab - Updated */}
          <TabsContent value="skills" className="animate-fade-in">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(groupedSkills).map(([category, catSkills]) => (
                  <Card
                    key={category}
                    className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <CardHeader className="bg-muted/30 pb-3">
                      <CardTitle className="text-lg font-bold flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 grid gap-4">
                      {catSkills.map((item) => (
                        <div key={item.id} className="space-y-1.5">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-muted-foreground text-xs">
                              {item.proficiency}%
                            </span>
                          </div>
                          <Progress
                            value={item.proficiency}
                            className="h-2 bg-secondary"
                          />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6 animate-fade-in">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              education.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
                      <div className="space-y-2">
                        <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-2">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">
                          {getLocalizedText(item, 'degree')}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium">
                          {item.institution}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground flex flex-col items-start md:items-end gap-1">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="h-3 w-3" />
                          {formatDate(item.start_date)} -{' '}
                          {item.is_current
                            ? t.resume.present
                            : formatDate(item.end_date!)}
                        </span>
                        <span className="flex items-center gap-1 opacity-75">
                          <MapPin className="h-3 w-3" />
                          {getLocalizedText(item, 'location')}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="animate-fade-in">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((item) => (
                  <Card
                    key={item.id}
                    className="group hover:border-primary/50 transition-all flex flex-col h-full"
                  >
                    <CardContent className="p-6 flex flex-col h-full gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                          <Award className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto flex justify-between items-center pt-2 border-t border-dashed">
                        <span className="text-xs text-muted-foreground">
                          {formatDate(item.date)}
                        </span>
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs flex items-center gap-1 text-primary hover:underline font-medium"
                          >
                            {t.resume.verifier}{' '}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {certifications.length === 0 && !loading && (
                  <div className="col-span-2 text-center py-12 text-muted-foreground">
                    No certifications found.
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          {/* Languages Tab */}
          <TabsContent value="languages" className="animate-fade-in">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {languages.map((item) => (
                  <Card key={item.id} className="text-center group">
                    <CardContent className="p-6 space-y-4">
                      <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Languages className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {getLocalizedText(item, 'language')}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {getLocalizedText(item, 'level')}
                        </p>
                      </div>
                      <Progress value={item.proficiency} className="h-1.5" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications" className="animate-fade-in">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <div className="space-y-6">
                {publications.map((item) => (
                  <Card
                    key={item.id}
                    className="hover:bg-muted/10 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold flex items-center gap-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm font-medium text-primary/80">
                            {formatDate(item.date)}
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {getLocalizedText(item, 'summary')}
                          </p>
                        </div>
                        {item.url && (
                          <Button
                            variant="outline"
                            className="shrink-0 self-start md:self-center gap-2 hover:bg-primary hover:text-primary-foreground"
                            asChild
                          >
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t.resume.view_publication}{' '}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {publications.length === 0 && !loading && (
                  <div className="text-center py-12 text-muted-foreground">
                    No publications found.
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
