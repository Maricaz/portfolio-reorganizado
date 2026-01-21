import { k as supabase } from "./index-DEnmuh5e.js";
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
var logAuditAction = async (action, tableName, recordId, oldData, newData) => {
	const { data: { user } } = await supabase.auth.getUser();
	if (!user) return;
	await supabase.from("audit_logs").insert({
		user_id: user.id,
		action,
		table_name: tableName,
		record_id: recordId,
		old_data: oldData,
		new_data: newData
	});
};
const updateUserRole = async (userId, role) => {
	const { data: oldData } = await supabase.from("profiles").select("role").eq("id", userId).single();
	const { error } = await supabase.from("profiles").update({ role }).eq("id", userId);
	if (error) throw error;
	await logAuditAction("UPDATE", "profiles", userId, { role: oldData?.role }, { role });
	return true;
};
const updateUserPermissions = async (userId, permissions) => {
	const { data: oldData } = await supabase.from("profiles").select("permissions").eq("id", userId).single();
	const { error } = await supabase.from("profiles").update({ permissions }).eq("id", userId);
	if (error) throw error;
	await logAuditAction("UPDATE", "profiles", userId, { permissions: oldData?.permissions }, { permissions });
	return true;
};
const toggleUserBan = async (userId, isBanned) => {
	const { data: oldData } = await supabase.from("profiles").select("is_banned").eq("id", userId).single();
	const { error } = await supabase.from("profiles").update({ is_banned: isBanned }).eq("id", userId);
	if (error) throw error;
	await logAuditAction("UPDATE", "profiles", userId, { is_banned: oldData?.is_banned }, { is_banned: isBanned });
	return true;
};
const triggerPasswordReset = async (email) => {
	const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/admin/reset-password` });
	if (error) throw error;
	return true;
};
const deleteUserProfile = async (userId) => {
	const { data: oldData } = await supabase.from("profiles").select("*").eq("id", userId).single();
	const { error } = await supabase.from("profiles").delete().eq("id", userId);
	if (error) throw error;
	await logAuditAction("DELETE", "profiles", userId, oldData, null);
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

//# sourceMappingURL=admin-BMFEU-XM.js.map