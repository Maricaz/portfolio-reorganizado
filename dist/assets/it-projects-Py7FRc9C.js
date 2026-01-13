import { k as supabase } from "./index-BZhoeJHC.js";
const getITProjects = async () => {
	return await supabase.from("it_projects").select("*").order("featured", { ascending: false }).order("created_at", { ascending: false }).returns();
};
export { getITProjects as t };

//# sourceMappingURL=it-projects-Py7FRc9C.js.map