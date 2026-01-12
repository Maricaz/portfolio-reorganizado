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
import { Search, Save, Plus } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function TranslationsTab() {
  const [dbTranslations, setDbTranslations] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [editingValues, setEditingValues] = useState<Record<string, string>>({})
  const { toast } = useToast()

  // Add Translation Dialog State
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [newKey, setNewKey] = useState('')
  const [newLang, setNewLang] = useState('en')
  const [newValue, setNewValue] = useState('')

  useEffect(() => {
    loadTranslations()
  }, [])

  const loadTranslations = async () => {
    const data = await getSiteTranslations()
    setDbTranslations(data || [])
  }

  const flattenedDefaults = useMemo(
    () => ({
      pt: flattenTranslations(translations.pt),
      en: flattenTranslations(translations.en),
      ko: flattenTranslations(translations.ko),
    }),
    [],
  )

  const allKeys = useMemo(() => {
    const defaultKeys = Object.keys(flattenedDefaults.pt)
    const dbKeys = dbTranslations.map((t) => t.key)
    return Array.from(new Set([...defaultKeys, ...dbKeys])).sort()
  }, [flattenedDefaults, dbTranslations])

  const filteredKeys = allKeys.filter((key) =>
    key.toLowerCase().includes(search.toLowerCase()),
  )

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

  const handleAddTranslation = async () => {
    if (!newKey || !newValue) {
      toast({
        title: 'Error',
        description: 'Key and Value are required',
        variant: 'destructive',
      })
      return
    }

    try {
      const { error } = await upsertTranslation(newKey, newLang, newValue)
      if (error) throw error
      toast({ title: 'Success', description: 'New translation added' })
      setIsAddOpen(false)
      setNewKey('')
      setNewValue('')
      loadTranslations()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add translation',
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
    return (
      flattenedDefaults[lang][key as keyof typeof flattenedDefaults.pt] || ''
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">Content Translations</h3>
          <p className="text-muted-foreground text-sm">
            Manage site text content for all supported languages.
          </p>
        </div>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Translation
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Translation</DialogTitle>
              <DialogDescription>
                Create a new translation entry.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="key" className="text-right">
                  Key
                </Label>
                <Input
                  id="key"
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  className="col-span-3"
                  placeholder="e.g., home.welcome"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lang" className="text-right">
                  Language
                </Label>
                <Select value={newLang} onValueChange={setNewLang}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt">Português</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ko">Korean</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="value" className="text-right">
                  Value
                </Label>
                <Textarea
                  id="value"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  className="col-span-3"
                  placeholder="Translated text..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddTranslation}>Save Translation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
            <div className="border rounded-md max-h-[600px] overflow-auto">
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
                  {filteredKeys.length > 50 && (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-sm">
                        And {filteredKeys.length - 50} more...
                      </TableCell>
                    </TableRow>
                  )}
                  {filteredKeys.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center p-4">
                        No translation keys found.
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
  )
}
