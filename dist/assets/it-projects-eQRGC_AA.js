import { s as supabase } from "./index-BHpAukSt.js";
const getITProjects = async () => {
	return await supabase.from("it_projects").select("*").order("featured", { ascending: false }).order("created_at", { ascending: false }).returns();
};
export { getITProjects as t };

//# sourceMappingURL=it-projects-eQRGC_AA.js.map