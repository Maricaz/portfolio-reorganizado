import { useLanguage } from '@/contexts/LanguageContext'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useSEO } from '@/hooks/use-seo'
import { AboutGallery } from '@/components/AboutGallery'

export default function AboutPage() {
  const { t } = useLanguage()

  useSEO({
    title: t.about.title,
    description: t.about.bio,
  })

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Supabase', 'PostgreSQL', 'Python'],
    },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{t.about.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {t.about.bio}
        </p>
      </div>

      <div className="relative animate-fade-in-up">
        <AboutGallery />
      </div>

      <div className="space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold">{t.about.skills}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <Card
              key={skillGroup.category}
              className="border-l-4 border-l-primary"
            >
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
