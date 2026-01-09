import { o as supabase } from "./index-D3SFnwNh.js";
const getProjects = async () => {
	return await supabase.from("projects").select("*").order("created_at", { ascending: false }).returns();
};
const getLatestItem = async () => {
	const { data: project } = await supabase.from("projects").select("*").order("created_at", { ascending: false }).limit(1).single();
	const { data: book } = await supabase.from("books").select("*").order("created_at", { ascending: false }).limit(1).single();
	if (project && book) return new Date(project.created_at) > new Date(book.created_at) ? {
		type: "project",
		item: project
	} : {
		type: "book",
		item: book
	};
	else if (project) return {
		type: "project",
		item: project
	};
	else if (book) return {
		type: "book",
		item: book
	};
	return null;
};
const getBooks = async () => {
	return await supabase.from("books").select("*").order("rating", { ascending: false }).returns();
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
export { getResumeData as a, getProjects as i, getLatestItem as n, submitContactForm as o, getMusicTracks as r, getBooks as t };

//# sourceMappingURL=database-BUdGOmQT.js.map