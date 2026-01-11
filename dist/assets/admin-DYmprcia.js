import { C as supabase } from "./index-87M8N5Wh.js";
const getNotifications = async () => {
	const { data, error } = await supabase.from("notifications").select("*").order("created_at", { ascending: false }).limit(50).returns();
	if (error) {
		console.error("Error fetching notifications:", error);
		return [];
	}
	return data;
};
const markNotificationAsRead = async (id) => {
	const { error } = await supabase.from("notifications").update({ read: true }).eq("id", id);
	if (error) throw error;
	return true;
};
const markAllNotificationsAsRead = async () => {
	const { error } = await supabase.from("notifications").update({ read: true }).eq("read", false);
	if (error) throw error;
	return true;
};
const getAllProfiles = async () => {
	const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false }).returns();
	if (error) throw error;
	return data;
};
const updateUserRole = async (userId, role) => {
	const { error } = await supabase.from("profiles").update({ role }).eq("id", userId);
	if (error) throw error;
	return true;
};
const createUser = async (data) => {
	const { data: result, error } = await supabase.functions.invoke("create-user", { body: data });
	return {
		data: result,
		error
	};
};
export { markNotificationAsRead as a, markAllNotificationsAsRead as i, getAllProfiles as n, updateUserRole as o, getNotifications as r, createUser as t };

//# sourceMappingURL=admin-DYmprcia.js.map