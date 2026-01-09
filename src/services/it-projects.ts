import { supabase } from '@/lib/supabase/client'

export interface ITProject {
  id: string
  title: string
  description_pt: string | null
  description_en: string | null
  description_ko: string | null
  tags: string[]
  link: string | null
  created_at: string
}

export const getITProjects = async () => {
  return await supabase
    .from('it_projects')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<ITProject[]>()
}
