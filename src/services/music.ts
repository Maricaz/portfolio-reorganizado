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
