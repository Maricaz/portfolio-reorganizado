import { C as supabase, Z as createLucideIcon } from "./index-CN_pEYFp.js";
var Calendar = createLucideIcon("calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]);
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
	});
	return settings;
};
export { Calendar as n, getSiteSettings as t };

//# sourceMappingURL=settings-BLySSzZb.js.map