import { s as supabase } from "./index-KL9Ji_7Q.js";
async function submitContactForm(data) {
	return await supabase.from("contact_messages").insert(data);
}
async function getLatestItem() {
	const { data: project } = await supabase.from("it_projects").select("*").order("created_at", { ascending: false }).limit(1).single();
	const { data: book } = await supabase.from("books").select("*").order("created_at", { ascending: false }).limit(1).single();
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

//# sourceMappingURL=database-C0Wo3VtB.js.map