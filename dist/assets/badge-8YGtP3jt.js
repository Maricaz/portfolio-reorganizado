import { It as __toESM, Nt as require_react, V as cn, ot as cva, xt as require_jsx_runtime } from "./index-D8qIS_cZ.js";
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-purple-500/20",
		secondary: "border-transparent bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20",
		destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		outline: "text-foreground border-purple-500/30"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
export { Badge as t };

//# sourceMappingURL=badge-8YGtP3jt.js.map