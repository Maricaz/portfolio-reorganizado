import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Loader2, Save, Globe } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { getSiteSettings, upsertSiteSetting } from '@/services/settings'

export const SeoSettings = () => {
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [settings, setSettings] = useState({
    title: '',
    description: '',
    keywords: '',
  })
  const { toast } = useToast()

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    setInitialLoading(true)
    try {
      const data = await getSiteSettings()
      if (data.seo_global) {
        setSettings(data.seo_global)
      }
    } catch (error) {
      console.error('Failed to load SEO settings', error)
    } finally {
      setInitialLoading(false)
    }
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      const { error } = await upsertSiteSetting('seo_global', settings)
      if (error) throw error
      toast({
        title: 'Settings saved',
        description: 'SEO configuration has been updated successfully.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save settings. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  if (initialLoading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" /> Global SEO Configuration
        </CardTitle>
        <CardDescription>
          Manage the default search engine optimization settings for your site.
          These will be used when page-specific settings are not available.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="site-title">Global Site Title</Label>
          <Input
            id="site-title"
            placeholder="e.g. My Awesome Portfolio"
            value={settings.title}
            onChange={(e) =>
              setSettings({ ...settings, title: e.target.value })
            }
          />
          <p className="text-xs text-muted-foreground">
            Appended to page titles (e.g. "About | My Awesome Portfolio")
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="meta-description">Meta Description</Label>
          <Textarea
            id="meta-description"
            placeholder="A brief description of your portfolio website..."
            value={settings.description}
            onChange={(e) =>
              setSettings({ ...settings, description: e.target.value })
            }
            rows={3}
          />
          <p className="text-xs text-muted-foreground">
            Recommended length: 150-160 characters.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="meta-keywords">Meta Keywords</Label>
          <Input
            id="meta-keywords"
            placeholder="portfolio, developer, react, typescript"
            value={settings.keywords}
            onChange={(e) =>
              setSettings({ ...settings, keywords: e.target.value })
            }
          />
          <p className="text-xs text-muted-foreground">
            Comma-separated list of keywords.
          </p>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/10 border-t px-6 py-4">
        <Button onClick={handleSave} disabled={loading}>
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Save Configuration
        </Button>
      </CardFooter>
    </Card>
  )
}
