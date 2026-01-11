import { Ct as __toESM, St as require_react, y as useLanguage } from "./index-BDTar78W.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const useSEO = ({ title, description, image = "/og-image.png", type = "website", jsonLd }) => {
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
		jsonLd
	]);
};
export { useSEO as t };

//# sourceMappingURL=use-seo-De-chQJu.js.map