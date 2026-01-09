import { A as require_react, a as useLanguage, c as cn, j as __toESM, x as require_jsx_runtime } from "./index-BI0uBU5Q.js";
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
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-2xl font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
export { CardHeader as a, CardFooter as i, CardContent as n, CardTitle as o, CardDescription as r, useSEO as s, Card as t };

//# sourceMappingURL=card-BBYpdB2D.js.map