import { s as supabase } from "./index-CQvZJ_Nd.js";
async function submitContactForm(data) {
	return await supabase.from("contact_submissions").insert(data);
}
async function getLatestItem(language = "pt") {
	const { data: project } = await supabase.from("projects").select("*").order("created_at", { ascending: false }).limit(1).single();
	const { data: book } = await supabase.from("books").select("*").eq("language_code", language).order("created_at", { ascending: false }).limit(1).maybeSingle();
	if (!project && !book) return null;
	if (!book || project && new Date(project.created_at) > new Date(book.created_at)) return {
		type: "project",
		item: project
	};
	return {
		type: "book",
		item: book
	};
}
export { submitContactForm as n, getLatestItem as t };

//# sourceMappingURL=database-np_DTcjV.js.map