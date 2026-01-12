import { Lt as __toESM, Pt as require_react, T as useLanguage, t as getSiteSettings } from "./index-BeQKhNV1.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const useSEO = ({ title, description, image = "/og-image.png", type = "website", jsonLd, keywords }) => {
	const { language } = useLanguage();
	const [globalSeo, setGlobalSeo] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const fetchGlobalSeo = async () => {
			const settings = await getSiteSettings();
			if (settings.seo_global) setGlobalSeo(settings.seo_global);
		};
		fetchGlobalSeo();
	}, []);
	(0, import_react.useEffect)(() => {
		const siteTitle = globalSeo?.title || "Portfolio";
		const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
		document.title = finalTitle;
		const finalDescription = description || globalSeo?.description || "";
		const finalKeywords = keywords || globalSeo?.keywords || "";
		const setMeta = (name, content, attr = "name") => {
			let element = document.querySelector(`meta[${attr}="${name}"]`);
			if (!element) {
				element = document.createElement("meta");
				element.setAttribute(attr, name);
				document.head.appendChild(element);
			}
			element.setAttribute("content", content);
		};
		if (finalDescription) setMeta("description", finalDescription);
		if (finalKeywords) setMeta("keywords", finalKeywords);
		setMeta("og:title", finalTitle, "property");
		if (finalDescription) setMeta("og:description", finalDescription, "property");
		setMeta("og:image", image, "property");
		setMeta("og:type", type, "property");
		setMeta("og:locale", language, "property");
		setMeta("twitter:card", "summary_large_image", "name");
		setMeta("twitter:title", finalTitle, "name");
		if (finalDescription) setMeta("twitter:description", finalDescription, "name");
		setMeta("twitter:image", image, "name");
		document.documentElement.lang = language;
		if (jsonLd) {
			let script = document.querySelector("script[type=\"application/ld+json\"]");
			if (!script) {
				script = document.createElement("script");
				script.setAttribute("type", "application/ld+json");
				document.head.appendChild(script);
			}
			script.textContent = JSON.stringify(jsonLd);
		}
	}, [
		title,
		description,
		image,
		type,
		language,
		jsonLd,
		keywords,
		globalSeo
	]);
};
export { useSEO as t };

//# sourceMappingURL=use-seo-BhoIi9HR.js.map