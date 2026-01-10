import { y as supabase } from "./index-WvNcIOTU.js";
const getITProjects = async () => {
	return await supabase.from("it_projects").select("*").order("featured", { ascending: false }).order("created_at", { ascending: false }).returns();
};
export { getITProjects as t };

//# sourceMappingURL=it-projects-D-NGDGal.js.map