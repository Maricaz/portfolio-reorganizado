import { supabase } from '@/lib/supabase/client'
import { ITProject } from '@/types'

export const getITProjects = async () => {
  return await supabase
    .from('it_projects')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<ITProject[]>()
}
