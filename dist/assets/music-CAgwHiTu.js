import { C as supabase } from "./index-CQpACzB3.js";
const getMusicTracks = async () => {
	const { data, error } = await supabase.from("music_tracks").select("*").order("created_at", { ascending: false });
	if (error) {
		console.error("Error fetching music tracks:", error);
		throw error;
	}
	return data || [];
};
const getAlbumConcept = async () => {
	const { data, error } = await supabase.from("album_concept").select("*").limit(1).single();
	if (error) return null;
	return data;
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
export { updateTrack as a, getMusicTracks as i, deleteTrack as n, getAlbumConcept as r, createTrack as t };

//# sourceMappingURL=music-CAgwHiTu.js.map