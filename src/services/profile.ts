import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/types'

type Profile = Database['public']['Tables']['profiles']['Row']

/**
 * Fetches a profile by User ID.
 */
export const getProfile = async (userId: string) => {
  return await supabase
    .from('profiles')
    .select('role, is_banned, permissions, language, email')
    .eq('id', userId)
    .maybeSingle()
}

/**
 * Fetches a profile with retry logic.
 * Useful for handling race conditions where the profile trigger hasn't finished yet.
 */
export const getProfileWithRetry = async (
  userId: string,
  maxRetries = 3,
  delayMs = 1000,
): Promise<{ data: Partial<Profile> | null; error: any }> => {
  let attempt = 0
  let lastError = null

  while (attempt < maxRetries) {
    const { data, error } = await getProfile(userId)

    if (error) {
      console.warn(`Attempt ${attempt + 1} to fetch profile failed:`, error)
      lastError = error
    } else if (data) {
      return { data, error: null }
    }

    // If no data and no error (null result), or error occurred, wait and retry
    attempt++
    if (attempt < maxRetries) {
      await new Promise((resolve) => setTimeout(resolve, delayMs))
    }
  }

  return {
    data: null,
    error: lastError || new Error('Profile not found after retries'),
  }
}

/**
 * Attempts to create a profile if it doesn't exist.
 * This is a client-side fallback for the database trigger.
 */
export const createProfileFallback = async (userId: string, email: string) => {
  console.log('Attempting client-side profile creation fallback...')
  return await supabase.from('profiles').insert([
    {
      id: userId,
      email: email,
      role: 'user', // Safe default
      language: 'pt',
    },
  ])
}
