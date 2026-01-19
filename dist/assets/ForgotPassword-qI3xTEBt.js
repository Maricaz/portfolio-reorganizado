import { t as ArrowLeft } from "./arrow-left--BCa0WGp.js";
import { t as CircleCheckBig } from "./circle-check-big-DOMiom_D.js";
import { Et as Link, It as __toESM, Nt as require_react, V as cn, X as LoaderCircle, v as Button, w as useAuth, xt as require_jsx_runtime } from "./index-9_Dm1MqC.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-2Z3WWttA.js";
import { a as FormItem, d as string, f as a, i as FormField, m as useForm, n as FormControl, o as FormLabel, s as FormMessage, t as Form, u as object } from "./form-BmBViDuH.js";
import { n as Input } from "./label-qz4WJy26.js";
import { n as AlertDescription, t as Alert } from "./alert-C0XGzKc3.js";
import "./push-Ic3BkeJR.js";
import { n as logSecurityEvent } from "./security-BauReLth.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var formSchema = object({ email: string().email({ message: "Por favor, insira um email válido." }) });
function ForgotPassword() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const { resetPassword } = useAuth();
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: { email: "" }
	});
	const { isSubmitting } = form.formState;
	const onSubmit = async (values) => {
		setServerError(null);
		try {
			const { error } = await resetPassword(values.email);
			if (error) throw error;
			setSubmitted(true);
			logSecurityEvent("PASSWORD_RECOVERY_REQUEST", { email: values.email });
		} catch (err) {
			setServerError(err.message || "Ocorreu um erro ao enviar o email.");
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
								children: "Verifique seu email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Se um conta existir com o email",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: form.getValues("email") }),
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
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
					...form,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: form.handleSubmit(onSubmit),
						className: "space-y-4",
						children: [
							serverError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
								variant: "destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: serverError })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: form.control,
								name: "email",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Email" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "admin@exemplo.com",
										type: "email",
										autoComplete: "email",
										disabled: isSubmitting,
										...field
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								disabled: isSubmitting,
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Enviando..."] }) : "Enviar Link de Recuperação"
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
					className: "justify-center border-t p-4 bg-muted/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/login",
						className: cn("flex items-center text-sm text-muted-foreground hover:text-primary transition-colors", isSubmitting && "pointer-events-none opacity-50"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Voltar para o Login"]
					})
				})
			]
		})
	});
}
export { ForgotPassword as default };

//# sourceMappingURL=ForgotPassword-qI3xTEBt.js.map