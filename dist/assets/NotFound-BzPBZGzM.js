import { K as require_jsx_runtime, X as Link, d as Button, h as useLanguage, rt as __toESM } from "./index-7n91VYFD.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var NotFound = () => {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container mx-auto py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl font-extrabold mb-3",
				children: t.notFound.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t.notFound.message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "btn-primary inline-flex mt-6 px-6 py-3 rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: t.notFound.back_home
				})
			})
		]
	});
};
var NotFound_default = NotFound;
export { NotFound_default as default };

//# sourceMappingURL=NotFound-BzPBZGzM.js.map