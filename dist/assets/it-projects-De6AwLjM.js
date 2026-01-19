import { k as supabase } from "./index-9_Dm1MqC.js";
const getITProjects = async () => {
	return await supabase.from("it_projects").select("*").order("featured", { ascending: false }).order("created_at", { ascending: false }).returns();
};
export { getITProjects as t };

//# sourceMappingURL=it-projects-De6AwLjM.js.map