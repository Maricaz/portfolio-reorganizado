import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExperienceManager } from '@/components/admin/resume/ExperienceManager'
import { EducationManager } from '@/components/admin/resume/EducationManager'
import { SkillsManager } from '@/components/admin/resume/SkillsManager'
import { CertificationsManager } from '@/components/admin/resume/CertificationsManager'
import { LanguagesManager } from '@/components/admin/resume/LanguagesManager'
import { PublicationsManager } from '@/components/admin/resume/PublicationsManager'

export default function ResumeManager() {
  const [activeTab, setActiveTab] = useState('experience')

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Resume Manager</h1>
        <p className="text-muted-foreground">
          Manage your professional career data.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="overflow-x-auto pb-2">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="experience">
          <ExperienceManager />
        </TabsContent>
        <TabsContent value="education">
          <EducationManager />
        </TabsContent>
        <TabsContent value="skills">
          <SkillsManager />
        </TabsContent>
        <TabsContent value="certifications">
          <CertificationsManager />
        </TabsContent>
        <TabsContent value="languages">
          <LanguagesManager />
        </TabsContent>
        <TabsContent value="publications">
          <PublicationsManager />
        </TabsContent>
      </Tabs>
    </div>
  )
}
