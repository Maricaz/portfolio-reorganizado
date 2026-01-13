import { k as supabase } from "./index-CDKDJBgQ.js";
const getResumeExperience = async () => await supabase.from("resume_experience").select("*").order("start_date", { ascending: false });
const getResumeEducation = async () => await supabase.from("resume_education").select("*").order("start_date", { ascending: false });
const getResumeSkills = async () => await supabase.from("resume_skills").select("*").order("proficiency", { ascending: false });
const getResumeCertifications = async () => await supabase.from("resume_certifications").select("*").order("date", { ascending: false });
const getResumeLanguages = async () => await supabase.from("resume_languages").select("*").order("proficiency", { ascending: false });
const getResumePublications = async () => await supabase.from("resume_publications").select("*").order("date", { ascending: false });
const createResumeItem = async (table, item) => {
	const { data, error } = await supabase.from(table).insert(item).select().single();
	if (error) throw error;
	return data;
};
const updateResumeItem = async (table, id, updates) => {
	const { data, error } = await supabase.from(table).update(updates).eq("id", id).select().single();
	if (error) throw error;
	return data;
};
const deleteResumeItem = async (table, id) => {
	const { error } = await supabase.from(table).delete().eq("id", id);
	if (error) throw error;
	return true;
};
export { getResumeExperience as a, getResumeSkills as c, getResumeEducation as i, updateResumeItem as l, deleteResumeItem as n, getResumeLanguages as o, getResumeCertifications as r, getResumePublications as s, createResumeItem as t };

//# sourceMappingURL=resume-Ll5t1nki.js.map