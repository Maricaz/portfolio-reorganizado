import { supabase } from '@/lib/supabase/client'
import { MusicTrack, AlbumSettings } from '@/types'

export const getMusicTracks = async () => {
  return await supabase
    .from('music_tracks')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<MusicTrack[]>()
}

export const getAlbumSettings = async () => {
  return await supabase
    .from('album_settings')
    .select('*')
    .limit(1)
    .single<AlbumSettings>()
}
