import { o as supabase } from "./index-BuAa1Ya3.js";
const getProjects = async () => {
	return await supabase.from("projects").select("*").order("created_at", { ascending: false }).returns();
};
const getMusicTracks = async () => {
	return await supabase.from("music_tracks").select("*").order("created_at", { ascending: false }).returns();
};
const getResumeData = async () => {
	return await supabase.from("resume_items").select("*").order("created_at", { ascending: false }).returns();
};
const submitContactForm = async (data) => {
	return await supabase.from("contact_submissions").insert([data]).select().single();
};
export { submitContactForm as i, getProjects as n, getResumeData as r, getMusicTracks as t };

//# sourceMappingURL=database-CXBYUCSi.js.map