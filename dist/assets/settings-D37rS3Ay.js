import { b as createLucideIcon, s as supabase } from "./index-gnAdbBBt.js";
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
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
	});
	return settings;
};
export { Download as n, getSiteSettings as t };

//# sourceMappingURL=settings-D37rS3Ay.js.map