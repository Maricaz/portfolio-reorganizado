import { s as supabase } from "./index-DZpqH6I9.js";
const getLatestItem = async () => {
	const { data: project } = await supabase.from("it_projects").select("*").order("created_at", { ascending: false }).limit(1).single();
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
const submitContactForm = async (data) => {
	return await supabase.from("contact_submissions").insert([data]).select().single();
};
export { submitContactForm as n, getLatestItem as t };

//# sourceMappingURL=database-vvK3t22N.js.map