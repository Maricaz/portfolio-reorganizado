import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/types'
import { Playlist, PlaylistTrack, AlbumConcept } from '@/types'

type MusicTrack = Database['public']['Tables']['music_tracks']['Row']
type MusicTrackInsert = Database['public']['Tables']['music_tracks']['Insert']
type MusicTrackUpdate = Database['public']['Tables']['music_tracks']['Update']

// Tracks
export const getMusicTracks = async () => {
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching music tracks:', error)
    return []
  }

  return (data as MusicTrack[]) || []
}

export const getTracksPaginated = async (
  page: number = 1,
  limit: number = 10,
  search: string = '',
) => {
  const from = (page - 1) * limit
  const to = from + limit - 1

  let query = supabase
    .from('music_tracks')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })

  if (search) {
    query = query.ilike('title', `%${search}%`)
  }

  const { data, error, count } = await query.range(from, to)

  if (error) {
    console.error('Error fetching paginated tracks:', error)
    return {
      data: [],
      count: 0,
      totalPages: 0,
    }
  }

  return {
    data: (data as MusicTrack[]) || [],
    count: count || 0,
    totalPages: count ? Math.ceil(count / limit) : 0,
  }
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

// Album Concept
export const getAlbumConcept = async () => {
  // Using 'as any' for table name because types might be outdated immediately after migration
  const { data, error } = await supabase
    .from('album_settings' as any)
    .select('*')
    .limit(1)
    .maybeSingle()

  if (error) {
    console.error('Error fetching album concept:', error)
    return null
  }

  if (!data) return null

  // Map flat DB structure to nested AlbumConcept structure
  const row = data as any

  const concept: AlbumConcept = {
    title: {
      en: row.title_en || '',
      pt: row.title_pt || '',
      ko: row.title_ko || '',
    },
    description: {
      en: row.description_en || '',
      pt: row.description_pt || '',
      ko: row.description_ko || '',
    },
    cover_url: row.image_url,
    video_url: null, // Video URL is not present in the new schema
  }

  return concept
}

// Playlists
export const getPlaylists = async () => {
  const { data, error } = await supabase
    .from('playlists')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching playlists:', error)
    return []
  }

  return (data as Playlist[]) || []
}

export const createPlaylist = async (playlist: Partial<Playlist>) => {
  const { data, error } = await supabase
    .from('playlists')
    .insert(playlist)
    .select()
    .single()

  if (error) throw error
  return data
}

export const updatePlaylist = async (
  id: string,
  updates: Partial<Playlist>,
) => {
  const { data, error } = await supabase
    .from('playlists')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export const deletePlaylist = async (id: string) => {
  const { error } = await supabase.from('playlists').delete().eq('id', id)

  if (error) throw error
  return true
}

// Playlist Tracks
export const getPlaylistTracks = async (playlistId: string) => {
  const { data, error } = await supabase
    .from('playlist_tracks')
    .select('*, track:music_tracks(*)')
    .eq('playlist_id', playlistId)
    .order('order_index', { ascending: true })

  if (error) {
    console.error('Error fetching playlist tracks:', error)
    return []
  }
  return (data as unknown as PlaylistTrack[]) || []
}

export const addTrackToPlaylist = async (
  playlistId: string,
  trackId: string,
  orderIndex: number = 0,
) => {
  const { data, error } = await supabase
    .from('playlist_tracks')
    .insert({
      playlist_id: playlistId,
      track_id: trackId,
      order_index: orderIndex,
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export const removeTrackFromPlaylist = async (
  playlistId: string,
  trackId: string,
) => {
  const { error } = await supabase
    .from('playlist_tracks')
    .delete()
    .match({ playlist_id: playlistId, track_id: trackId })

  if (error) throw error
  return true
}
