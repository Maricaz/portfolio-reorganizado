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
import { Search, Save } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SettingsManager() {
  const [dbTranslations, setDbTranslations] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [editingValues, setEditingValues] = useState<Record<string, string>>({})
  const { toast } = useToast()

  // Flatten the default translations to get all possible keys
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
    // 1. Check editing state
    if (editingValues[`${key}-${lang}`] !== undefined) {
      return editingValues[`${key}-${lang}`]
    }
    // 2. Check DB
    const dbValue = dbTranslations.find(
      (t) => t.key === key && t.lang === lang,
    )?.value
    if (dbValue) return dbValue
    // 3. Check Default
    return flattenedDefaults[lang][key] || ''
  }

  const filteredKeys = allKeys.filter((key) =>
    key.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Content Manager</h1>
        <p className="text-muted-foreground">
          Manage site-wide text and translations.
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
                  {filteredKeys.map((key) => (
                    <TableRow key={key}>
                      <TableCell className="font-mono text-xs">{key}</TableCell>
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
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
