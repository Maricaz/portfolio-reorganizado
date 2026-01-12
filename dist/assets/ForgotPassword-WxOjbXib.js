import { t as CircleCheckBig } from "./circle-check-big-Bzy5JJDj.js";
import { Dt as Link, Lt as __toESM, Pt as require_react, St as require_jsx_runtime, V as cn, X as Mail, Z as LoaderCircle, ot as createLucideIcon, v as Button, w as useAuth } from "./index-vxKGz1xw.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-Bub1U8r4.js";
import { n as Input, t as Label } from "./label-Cw6XX_Sm.js";
import { n as AlertDescription, t as Alert } from "./alert-h7883SjW.js";
import "./push-DpRZiHu9.js";
import { i as triggerSecurityAlert, n as logSecurityEvent } from "./security-wq6TWjk8.js";
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ForgotPassword() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const { resetPassword } = useAuth();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			const { error: error$1 } = await resetPassword(email);
			if (error$1) throw error$1;
			setSubmitted(true);
			logSecurityEvent("PASSWORD_RECOVERY_REQUEST", { email });
			triggerSecurityAlert("PASSWORD_RESET", {
				title: "Security Alert: Password Reset Requested",
				message: `A password reset was requested for email: ${email}`,
				email
			});
		} catch (err) {
			setError(err.message || "Ocorreu um erro ao enviar o email.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md shadow-lg border-primary/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-2xl font-bold text-center",
						children: "Recuperar Senha"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "text-center",
						children: "Digite seu email para receber o link de redefinição"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-4 py-4 animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-6 h-6 text-green-600 dark:text-green-500" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-lg",
								children: "Email Enviado!"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Se um conta existir com o email ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: email }),
									", você receberá instruções para redefinir sua senha em breve."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "w-full mt-4",
							onClick: () => setSubmitted(false),
							children: "Tentar outro email"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
							variant: "destructive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: error })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									placeholder: "admin@exemplo.com",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									required: true,
									disabled: loading,
									className: "pl-9"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							disabled: loading,
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Enviando..."] }) : "Enviar Link de Recuperação"
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
					className: "justify-center border-t p-4 bg-muted/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/login",
						className: cn("flex items-center text-sm text-muted-foreground hover:text-primary transition-colors", loading && "pointer-events-none opacity-50"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Voltar para o Login"]
					})
				})
			]
		})
	});
}
export { ForgotPassword as default };

//# sourceMappingURL=ForgotPassword-WxOjbXib.js.map