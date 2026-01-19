import { at as createLucideIcon, k as supabase } from "./index-fINlIXDG.js";
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
async function optimizeImage(file, maxWidth = 1200, quality = .8) {
	if (!file.type.startsWith("image/") || file.type.includes("svg")) return file;
	return new Promise((resolve, reject) => {
		const img = new Image();
		const reader = new FileReader();
		reader.onload = (e) => {
			img.src = e.target?.result;
		};
		reader.onerror = (e) => reject(e);
		img.onload = () => {
			let width = img.width;
			let height = img.height;
			if (width > maxWidth) {
				height = Math.round(height * maxWidth / width);
				width = maxWidth;
			}
			const canvas = document.createElement("canvas");
			canvas.width = width;
			canvas.height = height;
			const ctx = canvas.getContext("2d");
			if (!ctx) {
				resolve(file);
				return;
			}
			ctx.drawImage(img, 0, 0, width, height);
			canvas.toBlob((blob) => {
				if (!blob) {
					resolve(file);
					return;
				}
				if (blob.size > file.size) {
					resolve(file);
					return;
				}
				resolve(new File([blob], file.name, {
					type: file.type,
					lastModified: Date.now()
				}));
			}, file.type, quality);
		};
		reader.readAsDataURL(file);
	});
}
const uploadFile = async (file, bucket = "portfolio-media", folder = "general") => {
	let fileToUpload = file;
	try {
		fileToUpload = await optimizeImage(file);
	} catch (error) {
		console.warn("Image optimization failed, proceeding with original file:", error);
	}
	const fileExt = fileToUpload.name.split(".").pop();
	const filePath = `${folder}/${`${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`}`;
	const { error: uploadError } = await supabase.storage.from(bucket).upload(filePath, fileToUpload, { upsert: true });
	if (uploadError) throw uploadError;
	const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
	return data.publicUrl;
};
export { Search as n, uploadFile as t };

//# sourceMappingURL=storage-BZdyxSJt.js.map