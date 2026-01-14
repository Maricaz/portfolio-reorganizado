import { t as UserPlus } from "./user-plus-D3_9lSVh.js";
import { At as useNavigate, Et as Link, It as __toESM, Nt as require_react, Tt as useToast, X as LoaderCircle, v as Button, w as useAuth, xt as require_jsx_runtime } from "./index-CiEpgp2r.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-DeKOzzZw.js";
import { a as FormItem, d as string, f as a, i as FormField, m as useForm, n as FormControl, o as FormLabel, s as FormMessage, t as Form, u as object } from "./form-BpIznk3t.js";
import { n as Input } from "./label-BG4HphEs.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var formSchema = object({
	email: string().email({ message: "Email inválido" }),
	password: string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
	confirmPassword: string()
}).refine((data) => data.password === data.confirmPassword, {
	message: "As senhas não coincidem",
	path: ["confirmPassword"]
});
function AdminRegister() {
	const { signUp, user, isAdmin } = useAuth();
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		if (user && isAdmin) navigate("/admin");
	}, [
		user,
		isAdmin,
		navigate
	]);
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: ""
		}
	});
	async function onSubmit(values) {
		setIsLoading(true);
		try {
			const { error } = await signUp(values.email, values.password);
			if (error) throw error;
			toast({
				title: "Conta criada com sucesso!",
				description: "Verifique seu email para confirmar o cadastro."
			});
			navigate("/admin/login");
		} catch (error) {
			console.error("Registration error:", error);
			toast({
				variant: "destructive",
				title: "Erro ao criar conta",
				description: error.message || "Ocorreu um erro inesperado."
			});
		} finally {
			setIsLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md shadow-lg border-primary/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 bg-primary/10 rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-6 h-6 text-primary" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-center text-2xl font-bold",
							children: "Criar Conta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "text-center",
							children: "Preencha os dados abaixo para se registrar"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
					...form,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: form.handleSubmit(onSubmit),
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: form.control,
								name: "email",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Email" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "seu@email.com",
										...field
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: form.control,
								name: "password",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Senha" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "password",
										placeholder: "••••••",
										...field
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: form.control,
								name: "confirmPassword",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Confirmar Senha" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "password",
										placeholder: "••••••",
										...field
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								disabled: isLoading,
								children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Criando conta..."] }) : "Registrar"
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Já tem uma conta?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/login",
								className: "text-primary hover:underline underline-offset-4",
								children: "Fazer login"
							})
						]
					})
				})
			]
		})
	});
}
export { AdminRegister as default };

//# sourceMappingURL=AdminRegister-CySLfukq.js.map