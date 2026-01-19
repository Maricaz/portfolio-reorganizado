import { k as supabase } from "./index-DyHnbn0Y.js";
const getBooks = async (language) => {
	const { data, error } = await supabase.from("books").select("*").eq("language_code", language).order("created_at", { ascending: false }).returns();
	if (error) {
		console.error("Error fetching books:", error);
		return null;
	}
	return data;
};
const getBooksPaginated = async (page = 1, limit = 10, search = "") => {
	const from = (page - 1) * limit;
	const to = from + limit - 1;
	let query = supabase.from("books").select("*", { count: "exact" }).order("created_at", { ascending: false });
	if (search) query = query.ilike("title", `%${search}%`);
	const { data, error, count } = await query.range(from, to);
	if (error) throw error;
	return {
		data,
		count: count || 0,
		page,
		limit,
		totalPages: count ? Math.ceil(count / limit) : 0
	};
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
export { updateBook as a, getBooksPaginated as i, deleteBook as n, getBooks as r, createBook as t };

//# sourceMappingURL=books-M3M1YItO.js.map