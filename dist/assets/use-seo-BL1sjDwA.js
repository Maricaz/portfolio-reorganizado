import { X as __toESM, Y as require_react, o as useLanguage } from "./index-5XTFupmN.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const useSEO = ({ title, description }) => {
	const { language } = useLanguage();
	(0, import_react.useEffect)(() => {
		if (title) document.title = `${title} | Portfolio`;
		else document.title = "Portfolio";
		let metaDescription = document.querySelector("meta[name=\"description\"]");
		if (!metaDescription) {
			metaDescription = document.createElement("meta");
			metaDescription.setAttribute("name", "description");
			document.head.appendChild(metaDescription);
		}
		if (description) metaDescription.setAttribute("content", description);
		document.documentElement.lang = language;
	}, [
		title,
		description,
		language
	]);
};
export { useSEO as t };

//# sourceMappingURL=use-seo-BL1sjDwA.js.map