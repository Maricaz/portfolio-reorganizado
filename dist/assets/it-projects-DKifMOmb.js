import { C as supabase } from "./index-CQpACzB3.js";
const getITProjects = async () => {
	return await supabase.from("it_projects").select("*").order("featured", { ascending: false }).order("created_at", { ascending: false }).returns();
};
export { getITProjects as t };

//# sourceMappingURL=it-projects-DKifMOmb.js.map