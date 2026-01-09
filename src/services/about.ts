import { supabase } from '@/lib/supabase/client'
import { ProfileContent, SocialLink, ProfessionalSkill } from '@/types'

export const getProfileContent = async () => {
  const { data, error } = await supabase
    .from('profile_content')
    .select('*')
    .single()

  if (error) {
    console.error('Error fetching profile content:', error)
    return null
  }
  return data as ProfileContent
}

export const getSocialLinks = async () => {
  const { data, error } = await supabase
    .from('social_links')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching social links:', error)
    return []
  }
  return data as SocialLink[]
}

export const getProfessionalSkills = async () => {
  const { data, error } = await supabase
    .from('professional_skills')
    .select('*')
    .order('proficiency', { ascending: false })
    .limit(4)

  if (error) {
    console.error('Error fetching professional skills:', error)
    return []
  }
  return data as ProfessionalSkill[]
}
