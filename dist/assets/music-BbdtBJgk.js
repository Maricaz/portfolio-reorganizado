import { E as supabase } from "./index-DHXKWtf3.js";
const getMusicTracks = async () => {
	const { data, error } = await supabase.from("music_tracks").select("*").order("created_at", { ascending: false });
	if (error) {
		console.error("Error fetching music tracks:", error);
		throw error;
	}
	return data || [];
};
const createTrack = async (track) => {
	const { data, error } = await supabase.from("music_tracks").insert(track).select().single();
	if (error) throw error;
	return data;
};
const updateTrack = async (id, updates) => {
	const { data, error } = await supabase.from("music_tracks").update(updates).eq("id", id).select().single();
	if (error) throw error;
	return data;
};
const deleteTrack = async (id) => {
	const { error } = await supabase.from("music_tracks").delete().eq("id", id);
	if (error) throw error;
	return true;
};
const getAlbumConcept = async () => {
	const { data, error } = await supabase.from("album_settings").select("*").limit(1).single();
	if (error) return null;
	return data;
};
const getPlaylists = async () => {
	const { data, error } = await supabase.from("playlists").select("*").order("created_at", { ascending: false });
	if (error) {
		console.error("Error fetching playlists:", error);
		throw error;
	}
	return data || [];
};
const createPlaylist = async (playlist) => {
	const { data, error } = await supabase.from("playlists").insert(playlist).select().single();
	if (error) throw error;
	return data;
};
const updatePlaylist = async (id, updates) => {
	const { data, error } = await supabase.from("playlists").update(updates).eq("id", id).select().single();
	if (error) throw error;
	return data;
};
const deletePlaylist = async (id) => {
	const { error } = await supabase.from("playlists").delete().eq("id", id);
	if (error) throw error;
	return true;
};
const getPlaylistTracks = async (playlistId) => {
	const { data, error } = await supabase.from("playlist_tracks").select("*, track:music_tracks(*)").eq("playlist_id", playlistId).order("order_index", { ascending: true });
	if (error) throw error;
	return data || [];
};
const addTrackToPlaylist = async (playlistId, trackId, orderIndex = 0) => {
	const { data, error } = await supabase.from("playlist_tracks").insert({
		playlist_id: playlistId,
		track_id: trackId,
		order_index: orderIndex
	}).select().single();
	if (error) throw error;
	return data;
};
const removeTrackFromPlaylist = async (playlistId, trackId) => {
	const { error } = await supabase.from("playlist_tracks").delete().match({
		playlist_id: playlistId,
		track_id: trackId
	});
	if (error) throw error;
	return true;
};
export { deleteTrack as a, getPlaylistTracks as c, updatePlaylist as d, updateTrack as f, deletePlaylist as i, getPlaylists as l, createPlaylist as n, getAlbumConcept as o, createTrack as r, getMusicTracks as s, addTrackToPlaylist as t, removeTrackFromPlaylist as u };

//# sourceMappingURL=music-BbdtBJgk.js.map