import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import {
  Monitor,
  Sun,
  Moon,
  Palette,
  Type,
  ImageIcon,
  Loader2,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTheme } from '@/components/theme-provider'
import {
  getSiteSettings,
  upsertSiteSetting,
  ThemeConfig,
} from '@/services/settings'
import { uploadFile } from '@/services/storage'

export function GeneralTab() {
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()
  const [accentColor, setAccentColor] = useState('240 5.9% 10%')
  const [fontFamily, setFontFamily] = useState('Inter var, sans-serif')
  const [homeImage, setHomeImage] = useState<string>('')
  const [uploadingImage, setUploadingImage] = useState(false)

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const settings = await getSiteSettings()
      if (settings.home_hero_image) {
        setHomeImage(settings.home_hero_image)
      }

      const config = settings.theme_config
      if (config) {
        if (config.primary) setAccentColor(config.primary)
        if (config.font) setFontFamily(config.font)
        // Ensure UI reflects global setting if matched
      } else {
        // Fallback to legacy
        if (settings.theme_primary_color)
          setAccentColor(settings.theme_primary_color)
        if (settings.theme_font_family)
          setFontFamily(settings.theme_font_family)
      }
    } catch (error) {
      console.error('Failed to load settings', error)
    }
  }

  const saveThemeConfig = async (
    newMode?: string,
    newPrimary?: string,
    newFont?: string,
  ) => {
    const config: ThemeConfig = {
      mode: (newMode || theme) as 'light' | 'dark' | 'system',
      primary: newPrimary || accentColor,
      font: newFont || fontFamily,
    }

    await upsertSiteSetting('theme_config', config)

    // Also save legacy keys for compatibility if needed, but primarily relying on config now
    // We update the document immediately for feedback
    if (newPrimary)
      document.documentElement.style.setProperty('--primary', newPrimary)
    if (newFont)
      document.documentElement.style.setProperty('--font-primary', newFont)
  }

  const handleModeChange = async (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
    await saveThemeConfig(newTheme)
    toast({
      title: 'Theme Updated',
      description: `Appearance set to ${newTheme}`,
    })
  }

  const handleAccentChange = async (hsl: string) => {
    setAccentColor(hsl)
    await saveThemeConfig(undefined, hsl)
    toast({ title: 'Theme Updated', description: 'Primary color saved.' })
  }

  const handleFontChange = async (font: string) => {
    setFontFamily(font)
    await saveThemeConfig(undefined, undefined, font)
    toast({ title: 'Theme Updated', description: 'Font family saved.' })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    try {
      const url = await uploadFile(file, 'portfolio-media', 'home')
      if (url) {
        setHomeImage(url)
        await upsertSiteSetting('home_hero_image', url)
        toast({
          title: 'Image updated',
          description: 'Home page hero image has been updated successfully.',
        })
      }
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: 'Failed to upload image.',
        variant: 'destructive',
      })
    } finally {
      setUploadingImage(false)
    }
  }

  const accents = [
    { name: 'Default', value: '240 5.9% 10%' },
    { name: 'Blue', value: '221 83% 53%' },
    { name: 'Green', value: '142 76% 36%' },
    { name: 'Red', value: '346 84% 61%' },
    { name: 'Purple', value: '262 83% 58%' },
    { name: 'Orange', value: '24 94% 50%' },
  ]

  const fonts = [
    { name: 'Inter (Default)', value: "'Inter var', sans-serif" },
    { name: 'Roboto', value: "'Roboto', sans-serif" },
    {
      name: 'Serif',
      value: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
    },
    {
      name: 'Monospace',
      value:
        "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Monitor className="h-5 w-5" /> Theme Preference
          </h3>
          <div className="flex gap-2">
            {(['light', 'dark', 'system'] as const).map((m) => (
              <Button
                key={m}
                variant={theme === m ? 'default' : 'outline'}
                onClick={() => handleModeChange(m)}
                className="flex-1 capitalize"
              >
                {m === 'light' && <Sun className="mr-2 h-4 w-4" />}
                {m === 'dark' && <Moon className="mr-2 h-4 w-4" />}
                {m === 'system' && <Monitor className="mr-2 h-4 w-4" />}
                {m}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4 p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Palette className="h-5 w-5" /> Primary Color
          </h3>
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

        <div className="space-y-4 p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Type className="h-5 w-5" /> Font Family
          </h3>
          <Select value={fontFamily} onValueChange={handleFontChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              {fonts.map((font) => (
                <SelectItem key={font.name} value={font.value}>
                  {font.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p
            className="text-sm text-muted-foreground mt-2"
            style={{ fontFamily }}
          >
            Preview: The quick brown fox jumps over the lazy dog.
          </p>
        </div>

        <div className="space-y-4 p-4 border rounded-lg bg-card md:col-span-2">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <ImageIcon className="h-5 w-5" /> Home Page Customization
          </h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <Label>Hero Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploadingImage}
              />
              {uploadingImage && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Uploading...
                </div>
              )}
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-muted shadow-md">
                {homeImage ? (
                  <img
                    src={homeImage}
                    alt="Home Hero"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <ImageIcon className="h-10 w-10 opacity-20" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
