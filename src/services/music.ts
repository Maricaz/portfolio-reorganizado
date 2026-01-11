import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/types'

type MusicTrack = Database['public']['Tables']['music_tracks']['Row']
type MusicTrackInsert = Database['public']['Tables']['music_tracks']['Insert']
type MusicTrackUpdate = Database['public']['Tables']['music_tracks']['Update']

// AlbumConcept is not in the generated types, defining as any to prevent errors while keeping functionality
type AlbumConcept = any

export const getMusicTracks = async () => {
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching music tracks:', error)
    throw error
  }

  return (data as MusicTrack[]) || []
}

export const getAlbumConcept = async () => {
  // Cast to any to avoid type errors if table is missing from generated types
  const { data, error } = await supabase
    .from('album_concept' as any)
    .select('*')
    .limit(1)
    .single()

  if (error) {
    // Return null instead of throwing to avoid crashing if concept is optional/missing
    return null
  }

  return data as AlbumConcept
}

export const createTrack = async (track: MusicTrackInsert) => {
  const { data, error } = await supabase
    .from('music_tracks')
    .insert(track)
    .select()
    .single()

  if (error) throw error
  return data
}

export const updateTrack = async (id: string, updates: MusicTrackUpdate) => {
  const { data, error } = await supabase
    .from('music_tracks')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export const deleteTrack = async (id: string) => {
  const { error } = await supabase.from('music_tracks').delete().eq('id', id)

  if (error) throw error
  return true
}
