import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Globe, Shield } from 'lucide-react'
import { SecuritySettings } from '@/components/admin/SecuritySettings'
import { SeoSettings } from '@/components/admin/SeoSettings'
import { GeneralTab } from '@/components/admin/settings/GeneralTab'
import { TranslationsTab } from '@/components/admin/settings/TranslationsTab'

export default function SettingsManager() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage site configurations and preferences.
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="translations">Translations</TabsTrigger>
          <TabsTrigger value="seo">
            <Globe className="w-4 h-4 mr-2" />
            SEO
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <GeneralTab />
        </TabsContent>

        <TabsContent value="translations">
          <TranslationsTab />
        </TabsContent>

        <TabsContent value="seo">
          <SeoSettings />
        </TabsContent>

        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
