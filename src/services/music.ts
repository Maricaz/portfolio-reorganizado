import { supabase } from '@/lib/supabase/client'
import { MusicTrack, AlbumConcept } from '@/types'

export const getMusicTracks = async () => {
  return await supabase
    .from('music_tracks')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<MusicTrack[]>()
}

export const getAlbumConcept = async () => {
  return await supabase
    .from('album_concept')
    .select('*')
    .limit(1)
    .single<AlbumConcept>()
}

export const createTrack = async (track: Partial<MusicTrack>) => {
  const { data, error } = await supabase
    .from('music_tracks')
    .insert(track)
    .select()
    .single()

  if (error) throw error
  return data
}

export const updateTrack = async (id: string, updates: Partial<MusicTrack>) => {
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
