import { o as supabase } from "./index-EGupCy6-.js";
const getMusicTracks = async () => {
	return await supabase.from("music_tracks").select("*").order("created_at", { ascending: false }).returns();
};
const getResumeData = async () => {
	return await supabase.from("resume_items").select("*").order("created_at", { ascending: false }).returns();
};
const submitContactForm = async (data) => {
	return await supabase.from("contact_submissions").insert([data]).select().single();
};
export { getResumeData as n, submitContactForm as r, getMusicTracks as t };

//# sourceMappingURL=database-BAYxefnu.js.map