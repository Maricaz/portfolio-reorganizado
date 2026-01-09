import { s as supabase } from "./index-ChgqRT7g.js";
const getResumeData = async () => {
	return await supabase.from("resume_items").select("*").order("created_at", { ascending: false }).returns();
};
const submitContactForm = async (data) => {
	return await supabase.from("contact_submissions").insert([data]).select().single();
};
export { submitContactForm as n, getResumeData as t };

//# sourceMappingURL=database-CKEOLOM7.js.map