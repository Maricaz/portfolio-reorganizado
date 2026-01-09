import { useLanguage } from '@/contexts/LanguageContext'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useSEO } from '@/hooks/use-seo'

export default function AboutPage() {
  const { t } = useLanguage()

  useSEO({
    title: t.about.title,
    description: t.about.bio,
  })

  const photos = [
    'https://img.usecurling.com/ppl/large?gender=female&seed=1',
    'https://img.usecurling.com/p/600/600?q=coding%20setup&color=blue',
    'https://img.usecurling.com/p/600/600?q=guitar%20playing&color=black',
    'https://img.usecurling.com/p/600/600?q=library%20reading',
  ]

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

      <div className="relative px-12 animate-fade-in-up">
        <Carousel className="w-full">
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                      <img
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
