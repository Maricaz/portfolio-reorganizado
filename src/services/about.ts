import { supabase } from '@/lib/supabase/client'
import { SocialLink, ResumeSkill } from '@/types'

export const getSocialLinks = async () => {
  // Using any cast since social_links table or columns might not be present in the generated types yet
  const { data, error } = await (supabase as any)
    .from('social_links')
    .select('*')
    .order('order_index', { ascending: true })
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching social links:', error)
    return []
  }
  return data as SocialLink[]
}

export const getSkills = async () => {
  // Querying resume_skills instead of skills which doesn't exist
  const { data, error } = await supabase
    .from('resume_skills')
    .select('*')
    .order('proficiency', { ascending: false })

  if (error) {
    console.error('Error fetching skills:', error)
    return []
  }
  return data as ResumeSkill[]
}
