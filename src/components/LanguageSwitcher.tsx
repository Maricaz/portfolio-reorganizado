import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage('pt')}
          className={cn(language === 'pt' && 'bg-accent')}
        >
          Português (PT)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className={cn(language === 'en' && 'bg-accent')}
        >
          English (EN)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('ko')}
          className={cn(language === 'ko' && 'bg-accent')}
        >
          한국어 (KO)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
