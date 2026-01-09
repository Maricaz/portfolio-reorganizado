import { X as __toESM, Y as require_react, o as useLanguage } from "./index-PX6pJ-En.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const useSEO = ({ title, description, image = "/og-image.png", type = "website" }) => {
	const { language } = useLanguage();
	(0, import_react.useEffect)(() => {
		const finalTitle = title ? `${title} | Portfolio` : "Portfolio";
		document.title = finalTitle;
		const setMeta = (name, content, attr = "name") => {
			let element = document.querySelector(`meta[${attr}="${name}"]`);
			if (!element) {
				element = document.createElement("meta");
				element.setAttribute(attr, name);
				document.head.appendChild(element);
			}
			element.setAttribute("content", content);
		};
		if (description) setMeta("description", description);
		setMeta("og:title", finalTitle, "property");
		if (description) setMeta("og:description", description, "property");
		setMeta("og:image", image, "property");
		setMeta("og:type", type, "property");
		setMeta("og:locale", language, "property");
		setMeta("twitter:card", "summary_large_image", "name");
		setMeta("twitter:title", finalTitle, "name");
		if (description) setMeta("twitter:description", description, "name");
		setMeta("twitter:image", image, "name");
		document.documentElement.lang = language;
	}, [
		title,
		description,
		image,
		type,
		language
	]);
};
export { useSEO as t };

//# sourceMappingURL=use-seo-D1ycOCZJ.js.map