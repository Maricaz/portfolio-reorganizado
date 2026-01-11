import { C as supabase } from "./index-BDTar78W.js";
const getMusicTracks = async () => {
	return await supabase.from("music_tracks").select("*").order("created_at", { ascending: false }).returns();
};
const getAlbumConcept = async () => {
	return await supabase.from("album_concept").select("*").limit(1).single();
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

//# sourceMappingURL=music-1khze7My.js.map