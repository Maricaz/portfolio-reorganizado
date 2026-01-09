import { Languages } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/types'

const LANGUAGES: { code: Language; label: string; aria: string }[] = [
  { code: 'pt', label: 'PT', aria: 'Português' },
  { code: 'en', label: 'EN', aria: 'English' },
  { code: 'ko', label: 'KO', aria: '한국어' },
]

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className="flex items-center gap-1 p-1 rounded-full border border-border/50 bg-white/60 dark:bg-white/5 backdrop-blur-sm"
      role="group"
      aria-label="Language switcher"
    >
      <div className="pl-2 pr-1 text-muted-foreground">
        <Languages className="w-4 h-4" />
      </div>
      <div className="flex items-center gap-1">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              'px-2 py-1 rounded-full text-xs font-medium transition-all duration-300',
              language === lang.code
                ? 'btn-neon shadow-[0_8px_24px_-10px_rgba(99,102,241,.5)]'
                : 'text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10',
            )}
            aria-pressed={language === lang.code}
            aria-label={`Trocar idioma para ${lang.aria}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  )
}

interface LanguageSwitchControlledProps {
  value: Language
  onChange: (lang: Language) => void
  label?: string
}

export const LanguageSwitchControlled = ({
  value,
  onChange,
  label,
}: LanguageSwitchControlledProps) => {
  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-sm font-medium">{label}</span>}
      <div
        className="flex items-center p-1 rounded-lg border border-border bg-background"
        role="group"
        aria-label="Language selection"
      >
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onChange(lang.code)}
            className={cn(
              'px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors',
              value === lang.code
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
            aria-pressed={value === lang.code}
            aria-label={`Trocar idioma para ${lang.aria}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitch
