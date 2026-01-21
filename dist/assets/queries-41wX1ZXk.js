import { A as createClient } from "./index-CV_nKZ9-.js";
const supabase = createClient("https://jxuhodvasjoxvlvekhkk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dWhvZHZhc2pveHZsdmVraGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NzUzMDQsImV4cCI6MjA4MzQ1MTMwNH0.mHSwdO6TOY4dMkhdS3f09BYX1vkUmaKJ0-1jt0B3oMk");
async function fetchProjects(featured) {
	let query = supabase.from("it_projects").select("*").order("created_at", { ascending: false });
	if (featured) query = query.eq("featured", true);
	const { data, error } = await query;
	if (error) {
		console.error("Error fetching projects:", error);
		throw error;
	}
	return data;
}
async function fetchBooks() {
	const { data, error } = await supabase.from("books").select("*").order("created_at", { ascending: false });
	if (error) {
		console.error("Error fetching books:", error);
		throw error;
	}
	return data;
}
async function fetchMusic() {
	const { data, error } = await supabase.from("music_tracks").select("*").order("created_at", { ascending: false });
	if (error) {
		console.error("Error fetching music:", error);
		throw error;
	}
	return data;
}
async function fetchExperiences() {
	const { data, error } = await supabase.from("resume_experience").select("*").order("start_date", { ascending: false });
	if (error) {
		console.error("Error fetching experiences:", error);
		throw error;
	}
	return data;
}
async function insertContact(contact) {
	const { error } = await supabase.from("contact_submissions").insert({
		name: contact.name,
		email: contact.email,
		message: contact.message,
		origin: contact.origin || "web"
	});
	if (error) {
		console.error("Error inserting contact:", error);
		throw error;
	}
}
export { insertContact as a, fetchProjects as i, fetchExperiences as n, fetchMusic as r, fetchBooks as t };

//# sourceMappingURL=queries-41wX1ZXk.js.map