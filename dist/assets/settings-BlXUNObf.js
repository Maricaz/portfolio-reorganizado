import { E as supabase } from "./index-BV_nhBmH.js";
const getSiteSettings = async () => {
	const { data, error } = await supabase.from("site_settings").select("key, value");
	if (error) {
		console.error("Error fetching site settings:", error);
		return {};
	}
	const settings = {};
	data.forEach((item) => {
		if (item.key === "brand_config") settings.brand_config = item.value;
		else if (item.key === "resume_config") settings.resume_config = item.value;
		else if (item.key === "home_hero_image") settings.home_hero_image = typeof item.value === "string" ? item.value : String(item.value);
		else if (item.key === "seo_global") settings.seo_global = item.value;
	});
	return settings;
};
const upsertSiteSetting = async (key, value) => {
	const { error } = await supabase.from("site_settings").upsert({
		key,
		value
	}, { onConflict: "key" });
	return { error };
};
export { upsertSiteSetting as n, getSiteSettings as t };

//# sourceMappingURL=settings-BlXUNObf.js.map