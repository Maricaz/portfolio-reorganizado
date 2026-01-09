import { createClient } from '@supabase/supabase-js'
import { Database } from './types'

// Use environment variables or fallback to placeholders to prevent runtime crashes if variables are missing.
// The createClient function requires a URL and will throw an error if an empty string is passed.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder'

if (
  !import.meta.env.VITE_SUPABASE_URL ||
  !import.meta.env.VITE_SUPABASE_ANON_KEY
) {
  console.warn(
    'Supabase credentials are required in .env. Using placeholder values to prevent application crash.',
  )
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
