import { it as createLucideIcon, k as supabase } from "./index-B_MaAK1e.js";
var ShieldAlert = createLucideIcon("shield-alert", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M12 8v4",
		key: "1got3b"
	}],
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}]
]);
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
export { markNotificationAsRead as a, markAllNotificationsAsRead as i, getAllProfiles as n, updateUserRole as o, getNotifications as r, ShieldAlert as s, createUser as t };

//# sourceMappingURL=admin-CBCGbsHn.js.map