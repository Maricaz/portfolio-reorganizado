import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

const NotFound = () => {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto py-24 text-center">
      <h1 className="text-5xl font-extrabold mb-3">{t.notFound.title}</h1>
      <p className="text-muted-foreground">{t.notFound.message}</p>
      <Button
        asChild
        className="btn-primary inline-flex mt-6 px-6 py-3 rounded-full"
      >
        <Link to="/">{t.notFound.back_home}</Link>
      </Button>
    </section>
  )
}

export default NotFound
