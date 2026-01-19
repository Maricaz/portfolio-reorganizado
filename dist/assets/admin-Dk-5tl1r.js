import { k as supabase } from "./index-9_Dm1MqC.js";
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
const updateUserPermissions = async (userId, permissions) => {
	const { error } = await supabase.from("profiles").update({ permissions }).eq("id", userId);
	if (error) throw error;
	return true;
};
const toggleUserBan = async (userId, isBanned) => {
	const { error } = await supabase.from("profiles").update({ is_banned: isBanned }).eq("id", userId);
	if (error) throw error;
	return true;
};
const triggerPasswordReset = async (email) => {
	const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/admin/reset-password` });
	if (error) throw error;
	return true;
};
const deleteUserProfile = async (userId) => {
	const { error } = await supabase.from("profiles").delete().eq("id", userId);
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
export { markAllNotificationsAsRead as a, triggerPasswordReset as c, getNotifications as i, updateUserPermissions as l, deleteUserProfile as n, markNotificationAsRead as o, getAllProfiles as r, toggleUserBan as s, createUser as t, updateUserRole as u };

//# sourceMappingURL=admin-Dk-5tl1r.js.map