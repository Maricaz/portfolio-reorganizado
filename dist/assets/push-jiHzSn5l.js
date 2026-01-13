import { k as supabase } from "./index-BZhoeJHC.js";
const registerPush = async () => {
	if (!("serviceWorker" in navigator) || !("PushManager" in window)) throw new Error("Push notifications are not supported by your browser");
	throw new Error("VAPID Public Key is missing in environment variables");
};
const unsubscribePush = async () => {
	const subscription = await (await navigator.serviceWorker.ready).pushManager.getSubscription();
	if (subscription) {
		await subscription.unsubscribe();
		const { error } = await supabase.from("push_subscriptions").delete().eq("endpoint", subscription.endpoint);
		if (error) console.error("Error removing subscription from DB", error);
	}
};
const checkSubscription = async () => {
	if (!("serviceWorker" in navigator)) return false;
	return !!await (await navigator.serviceWorker.ready).pushManager.getSubscription();
};
const sendPushNotification = async (title, body, url) => {
	const { error } = await supabase.functions.invoke("send-push", { body: {
		title,
		body,
		url
	} });
	return { error };
};
export { unsubscribePush as i, registerPush as n, sendPushNotification as r, checkSubscription as t };

//# sourceMappingURL=push-jiHzSn5l.js.map