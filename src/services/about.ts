import { supabase } from '@/lib/supabase/client'
import { SocialLink, Skill } from '@/types'

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

export const getSkills = async () => {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('value', { ascending: false })

  if (error) {
    console.error('Error fetching skills:', error)
    return []
  }
  return data as Skill[]
}
