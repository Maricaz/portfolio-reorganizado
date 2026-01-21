import { t as ArrowLeft } from "./arrow-left-DByiQEtY.js";
import { t as ShieldAlert } from "./shield-alert-CjZluBGe.js";
import { Ct as require_jsx_runtime, Ot as Link, Rt as __toESM, v as Button } from "./index-CV_nKZ9-.js";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-jFPnEjBZ.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function Forbidden() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-muted/20 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md border-destructive/20 shadow-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-8 w-8 text-destructive" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-2xl font-bold text-foreground",
						children: "Acesso Negado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Você não tem permissão para acessar esta página." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground",
					children: "Se você acredita que isso é um erro, entre em contato com o administrador do sistema ou tente fazer login com outra conta."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-full",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Painel Admin"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Voltar ao Site"
						})
					})]
				})]
			})]
		})
	});
}
export { Forbidden as default };

//# sourceMappingURL=Forbidden-Cutzzhcm.js.map