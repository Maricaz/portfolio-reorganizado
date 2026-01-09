import { _ as supabase } from "./index-Cd67lrX4.js";
const getITProjects = async (language) => {
	const { data, error } = await supabase.from("it_projects").select("*").eq("language", language).order("created_at", { ascending: false });
	return {
		data,
		error
	};
};
const getBooks = async (language) => {
	const { data, error } = await supabase.from("books").select("*").eq("language", language).order("created_at", { ascending: false });
	return {
		data,
		error
	};
};
const getResumeItems = async (language) => {
	const { data, error } = await supabase.from("resume_items").select("*").eq("language", language).order("created_at", { ascending: false });
	return {
		data,
		error
	};
};
const getMusicTracks = async () => {
	const { data, error } = await supabase.from("music_tracks").select("*").order("created_at", { ascending: false });
	return {
		data,
		error
	};
};
const submitContact = async (submission) => {
	const { data, error } = await supabase.from("contact_submissions").insert([submission]).select();
	return {
		data,
		error
	};
};
const getLatestItem = async (language) => {
	const { data: projects } = await supabase.from("it_projects").select("*").eq("language", language).limit(1).order("created_at", { ascending: false });
	const { data: books } = await supabase.from("books").select("*").eq("language", language).limit(1).order("created_at", { ascending: false });
	const project = projects?.[0];
	const book = books?.[0];
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
export { getResumeItems as a, getMusicTracks as i, getITProjects as n, submitContact as o, getLatestItem as r, getBooks as t };

//# sourceMappingURL=database-SX4ETfgU.js.map