import { supabase } from '@/lib/supabase/client'

export interface ResumeExperience {
  id: string
  company: string
  role_pt: string
  role_en?: string
  role_ko?: string
  location_pt?: string
  start_date: string
  end_date?: string | null
  description_pt?: string
  created_at: string
}

export interface ResumeEducation {
  id: string
  institution: string
  degree_pt: string
  degree_en?: string
  degree_ko?: string
  location_pt?: string
  start_date: string
  end_date?: string | null
  created_at: string
}

export interface ResumeSkill {
  id: string
  name: string
  proficiency: number
  category?: string
  created_at: string
}

export interface ResumeCertification {
  id: string
  name: string
  institution: string
  date: string
  url?: string | null
  created_at: string
}

export interface ResumeLanguage {
  id: string
  language_pt: string
  language_en?: string
  language_ko?: string
  level_pt: string
  level_en?: string
  proficiency: number
  created_at: string
}

export interface ResumePublication {
  id: string
  title: string
  summary_pt?: string
  url?: string | null
  date: string
  created_at: string
}

export const getResumeExperience = async () =>
  await supabase
    .from('resume_experience')
    .select('*')
    .order('start_date', { ascending: false })

export const getResumeEducation = async () =>
  await supabase
    .from('resume_education')
    .select('*')
    .order('start_date', { ascending: false })

export const getResumeSkills = async () =>
  await supabase
    .from('resume_skills')
    .select('*')
    .order('proficiency', { ascending: false })

export const getResumeCertifications = async () =>
  await supabase
    .from('resume_certifications')
    .select('*')
    .order('date', { ascending: false })

export const getResumeLanguages = async () =>
  await supabase
    .from('resume_languages')
    .select('*')
    .order('proficiency', { ascending: false })

export const getResumePublications = async () =>
  await supabase
    .from('resume_publications')
    .select('*')
    .order('date', { ascending: false })

export const createResumeItem = async (table: string, item: any) => {
  const { data, error } = await supabase
    .from(table)
    .insert(item)
    .select()
    .single()
  if (error) throw error
  return data
}

export const updateResumeItem = async (
  table: string,
  id: string,
  updates: any,
) => {
  const { data, error } = await supabase
    .from(table)
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export const deleteResumeItem = async (table: string, id: string) => {
  const { error } = await supabase.from(table).delete().eq('id', id)
  if (error) throw error
  return true
}
