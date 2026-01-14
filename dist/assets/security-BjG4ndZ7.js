import { k as supabase } from "./index-CiEpgp2r.js";
import { r as sendPushNotification } from "./push-DEqnRiPQ.js";
const listActiveSessions = async () => {
	const { data, error } = await supabase.functions.invoke("manage-sessions", { method: "GET" });
	if (error) throw error;
	return data.sessions || [];
};
const revokeSession = async (sessionId) => {
	const { data, error } = await supabase.functions.invoke("manage-sessions", {
		method: "POST",
		body: { sessionId },
		headers: {}
	});
	const { data: res, error: invokeError } = await supabase.functions.invoke("manage-sessions?action=revoke", {
		method: "POST",
		body: { sessionId }
	});
	if (invokeError) throw invokeError;
	return res;
};
const logSecurityEvent = async (action, details = {}) => {
	const { error } = await supabase.rpc("log_security_activity", {
		action_text: action,
		details
	});
	if (error) console.error("Failed to log security event:", error);
	return { error };
};
const triggerSecurityAlert = async (type, details) => {
	try {
		await sendPushNotification(details.title, details.message, "/admin/settings");
	} catch (e) {
		console.error("Push notification failed:", e);
	}
	try {
		const { error } = await supabase.functions.invoke("send-external-notification", { body: {
			title: details.title,
			message: details.message,
			type: "security",
			link: window.location.origin
		} });
		if (error) console.error("Email notification failed:", error);
	} catch (e) {
		console.error("Email notification exception:", e);
	}
};
export { triggerSecurityAlert as i, logSecurityEvent as n, revokeSession as r, listActiveSessions as t };

//# sourceMappingURL=security-BjG4ndZ7.js.map