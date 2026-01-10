import { useEffect, useState, useMemo } from 'react'
import {
  getSiteTranslations,
  upsertTranslation,
  flattenTranslations,
} from '@/services/translations'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useToast } from '@/hooks/use-toast'
import { Search, Save, Moon, Sun, Monitor } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTheme } from '@/components/theme-provider'
import { Separator } from '@/components/ui/separator'

export default function SettingsManager() {
  const [dbTranslations, setDbTranslations] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [editingValues, setEditingValues] = useState<Record<string, string>>({})
  const { toast } = useToast()
  const { theme, setTheme } = useTheme()
  const [accentColor, setAccentColor] = useState('240 5.9% 10%') // Default primary

  const flattenedDefaults = useMemo(() => {
    return {
      pt: flattenTranslations(translations.pt),
      en: flattenTranslations(translations.en),
      ko: flattenTranslations(translations.ko),
    }
  }, [])

  const allKeys = useMemo(() => {
    return Object.keys(flattenedDefaults.pt).sort()
  }, [flattenedDefaults])

  useEffect(() => {
    loadTranslations()
    const savedAccent = localStorage.getItem('admin_accent')
    if (savedAccent) {
      setAccentColor(savedAccent)
    }
  }, [])

  const loadTranslations = async () => {
    const data = await getSiteTranslations()
    setDbTranslations(data || [])
  }

  const handleSave = async (key: string, lang: string) => {
    const value = editingValues[`${key}-${lang}`]
    if (value === undefined) return

    try {
      const { error } = await upsertTranslation(key, lang, value)
      if (error) throw error
      toast({ title: 'Success', description: 'Translation updated' })
      loadTranslations()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update',
        variant: 'destructive',
      })
    }
  }

  const getDisplayValue = (key: string, lang: 'pt' | 'en' | 'ko') => {
    if (editingValues[`${key}-${lang}`] !== undefined) {
      return editingValues[`${key}-${lang}`]
    }
    const dbValue = dbTranslations.find(
      (t) => t.key === key && t.lang === lang,
    )?.value
    if (dbValue) return dbValue
    return flattenedDefaults[lang][key] || ''
  }

  const filteredKeys = allKeys.filter((key) =>
    key.toLowerCase().includes(search.toLowerCase()),
  )

  const handleAccentChange = (hsl: string) => {
    setAccentColor(hsl)
    document.documentElement.style.setProperty('--primary', hsl)
    localStorage.setItem('admin_accent', hsl)
  }

  const accents = [
    { name: 'Default', value: '240 5.9% 10%' },
    { name: 'Blue', value: '221 83% 53%' },
    { name: 'Green', value: '142 76% 36%' },
    { name: 'Red', value: '346 84% 61%' },
    { name: 'Purple', value: '262 83% 58%' },
    { name: 'Orange', value: '24 94% 50%' },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage site configurations and preferences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-medium">Theme Preference</h3>
          <div className="flex gap-2">
            <Button
              variant={theme === 'light' ? 'default' : 'outline'}
              onClick={() => setTheme('light')}
              className="flex-1"
            >
              <Sun className="mr-2 h-4 w-4" /> Light
            </Button>
            <Button
              variant={theme === 'dark' ? 'default' : 'outline'}
              onClick={() => setTheme('dark')}
              className="flex-1"
            >
              <Moon className="mr-2 h-4 w-4" /> Dark
            </Button>
            <Button
              variant={theme === 'system' ? 'default' : 'outline'}
              onClick={() => setTheme('system')}
              className="flex-1"
            >
              <Monitor className="mr-2 h-4 w-4" /> System
            </Button>
          </div>
        </div>

        <div className="space-y-4 p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-medium">Accent Color</h3>
          <div className="flex flex-wrap gap-2">
            {accents.map((acc) => (
              <button
                key={acc.name}
                onClick={() => handleAccentChange(acc.value)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  accentColor === acc.value
                    ? 'border-foreground scale-110'
                    : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: `hsl(${acc.value})` }}
                title={acc.name}
              />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Content Translations</h3>
          <p className="text-muted-foreground text-sm">
            Override default text for different languages.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search keys..."
            className="max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Tabs defaultValue="pt">
          <TabsList>
            <TabsTrigger value="pt">Português</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
            <TabsTrigger value="ko">Korean</TabsTrigger>
          </TabsList>
          {['pt', 'en', 'ko'].map((lang) => (
            <TabsContent key={lang} value={lang}>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Key</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead className="w-[100px]">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredKeys.slice(0, 50).map((key) => (
                      <TableRow key={key}>
                        <TableCell className="font-mono text-xs">
                          {key}
                        </TableCell>
                        <TableCell>
                          <Input
                            value={getDisplayValue(key, lang as any)}
                            onChange={(e) =>
                              setEditingValues((prev) => ({
                                ...prev,
                                [`${key}-${lang}`]: e.target.value,
                              }))
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleSave(key, lang)}
                          >
                            <Save className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredKeys.length > 50 && (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-sm">
                          And {filteredKeys.length - 50} more...
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
