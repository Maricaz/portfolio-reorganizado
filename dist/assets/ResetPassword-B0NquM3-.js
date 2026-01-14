import { t as CircleAlert } from "./circle-alert-DZk0vE9Z.js";
import { t as CircleCheckBig } from "./circle-check-big-BMkiiqE8.js";
import { At as useNavigate, Et as Link, It as __toESM, Nt as require_react, Tt as useToast, X as LoaderCircle, v as Button, w as useAuth, xt as require_jsx_runtime } from "./index-CiEpgp2r.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-DeKOzzZw.js";
import { a as FormItem, d as string, f as a, i as FormField, m as useForm, n as FormControl, o as FormLabel, s as FormMessage, t as Form, u as object } from "./form-BpIznk3t.js";
import { n as Input } from "./label-BG4HphEs.js";
import { n as AlertDescription, t as Alert } from "./alert-DykaDn8q.js";
import "./push-DEqnRiPQ.js";
import { i as triggerSecurityAlert, n as logSecurityEvent } from "./security-BjG4ndZ7.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var formSchema = object({
	password: string().min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
	confirmPassword: string()
}).refine((data) => data.password === data.confirmPassword, {
	message: "As senhas não coincidem.",
	path: ["confirmPassword"]
});
function ResetPassword() {
	const [success, setSuccess] = (0, import_react.useState)(false);
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const { updatePassword, session, loading } = useAuth();
	const navigate = useNavigate();
	const { toast } = useToast();
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: {
			password: "",
			confirmPassword: ""
		}
	});
	const { isSubmitting } = form.formState;
	const onSubmit = async (values) => {
		setServerError(null);
		try {
			const { error } = await updatePassword(values.password);
			if (error) throw error;
			setSuccess(true);
			logSecurityEvent("PASSWORD_UPDATED", { success: true });
			triggerSecurityAlert("PASSWORD_RESET", {
				title: "Security Alert: Password Changed",
				message: "Your account password has been successfully updated."
			});
			toast({
				title: "Senha atualizada",
				description: "Sua senha foi redefinida com sucesso."
			});
			setTimeout(() => {
				navigate("/admin/login");
			}, 3e3);
		} catch (err) {
			setServerError(err.message || "Erro ao atualizar a senha.");
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Verificando link de recuperação..."
			})]
		})
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md shadow-lg border-destructive/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-6 h-6 text-destructive" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-xl text-destructive",
						children: "Link Inválido ou Expirado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "O link de recuperação de senha que você usou não é válido ou já expirou." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/forgot-password",
						children: "Solicitar novo link"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					asChild: true,
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/login",
						children: "Voltar ao Login"
					})
				})]
			})]
		})
	});
	if (success) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "w-full max-w-md shadow-lg border-green-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "pt-6 text-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-8 h-8 text-green-600" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-green-700",
						children: "Sucesso!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Sua senha foi atualizada. Você será redirecionado para o login em instantes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full mt-4",
						onClick: () => navigate("/admin/login"),
						children: "Ir para Login agora"
					})
				]
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md shadow-lg border-primary/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-2xl font-bold text-center",
					children: "Redefinir Senha"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					className: "text-center",
					children: "Digite sua nova senha abaixo"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
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
							name: "password",
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Nova Senha" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "password",
									placeholder: "••••••",
									autoComplete: "new-password",
									disabled: isSubmitting,
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
									autoComplete: "new-password",
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
							children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Atualizando..."] }) : "Atualizar Senha"
						})
					]
				})
			}) })]
		})
	});
}
export { ResetPassword as default };

//# sourceMappingURL=ResetPassword-B0NquM3-.js.map