import { y as supabase } from "./index-WvNcIOTU.js";
const getBooks = async (language) => {
	const { data, error } = await supabase.from("books").select("*").eq("language_code", language).order("created_at", { ascending: false }).returns();
	if (error) {
		console.error("Error fetching books:", error);
		return null;
	}
	return data;
};
const getAllBooks = async () => {
	const { data, error } = await supabase.from("books").select("*").order("created_at", { ascending: false }).returns();
	if (error) throw error;
	return data;
};
const createBook = async (book) => {
	const { data, error } = await supabase.from("books").insert(book).select().single();
	if (error) throw error;
	return data;
};
const updateBook = async (id, updates) => {
	const { data, error } = await supabase.from("books").update(updates).eq("id", id).select().single();
	if (error) throw error;
	return data;
};
const deleteBook = async (id) => {
	const { error } = await supabase.from("books").delete().eq("id", id);
	if (error) throw error;
	return true;
};
export { updateBook as a, getBooks as i, deleteBook as n, getAllBooks as r, createBook as t };

//# sourceMappingURL=books-CsD7Twv9.js.map