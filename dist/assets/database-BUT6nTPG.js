import { _ as supabase } from "./index-Ds-e-iqc.js";
const getProjects = async () => {
	const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
	return {
		data,
		error
	};
};
const getBooks = async () => {
	const { data, error } = await supabase.from("books").select("*").order("created_at", { ascending: false });
	return {
		data,
		error
	};
};
const getResumeData = async () => {
	const { data, error } = await supabase.from("resume_data").select("*").order("created_at", { ascending: false });
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
const getLatestItem = async () => {
	const { data: projects } = await supabase.from("projects").select("*").limit(1).order("created_at", { ascending: false });
	const { data: books } = await supabase.from("books").select("*").limit(1).order("created_at", { ascending: false });
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
export { getResumeData as a, getProjects as i, getLatestItem as n, submitContact as o, getMusicTracks as r, getBooks as t };

//# sourceMappingURL=database-BUT6nTPG.js.map