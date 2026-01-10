import { C as supabase } from "./index-CVh1OjeJ.js";
const uploadFile = async (file, bucket = "portfolio-media", folder = "general") => {
	const fileExt = file.name.split(".").pop();
	const filePath = `${folder}/${`${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`}`;
	const { error: uploadError } = await supabase.storage.from(bucket).upload(filePath, file, { upsert: true });
	if (uploadError) throw uploadError;
	const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
	return data.publicUrl;
};
export { uploadFile as t };

//# sourceMappingURL=storage-DTJlBZgw.js.map