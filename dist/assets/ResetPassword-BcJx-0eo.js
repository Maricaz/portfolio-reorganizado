import { t as CircleCheckBig } from "./circle-check-big-DCRctfbV.js";
import { t as Lock } from "./lock-F7oHIX3K.js";
import { Et as useToast, Lt as __toESM, Pt as require_react, St as require_jsx_runtime, Z as LoaderCircle, jt as useNavigate, v as Button, w as useAuth } from "./index-CDKDJBgQ.js";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-CRQ5fe1n.js";
import { n as Input, t as Label } from "./label-8P1qMmnL.js";
import { n as AlertDescription, t as Alert } from "./alert-D_cebRUI.js";
import "./push-CebKOVmc.js";
import { i as triggerSecurityAlert, n as logSecurityEvent } from "./security-CsZBI1sV.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ResetPassword() {
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [success, setSuccess] = (0, import_react.useState)(false);
	const { updatePassword, session } = useAuth();
	const navigate = useNavigate();
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			if (!session) {
				toast({
					title: "Link inválido ou expirado",
					description: "Por favor, solicite uma nova redefinição de senha.",
					variant: "destructive"
				});
				navigate("/admin/login");
			}
		}, 2e3);
		return () => clearTimeout(timer);
	}, [
		session,
		navigate,
		toast
	]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		if (password !== confirmPassword) {
			setError("As senhas não coincidem.");
			setLoading(false);
			return;
		}
		if (password.length < 6) {
			setError("A senha deve ter pelo menos 6 caracteres.");
			setLoading(false);
			return;
		}
		try {
			const { error: error$1 } = await updatePassword(password);
			if (error$1) throw error$1;
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
			setError(err.message || "Erro ao atualizar a senha.");
		} finally {
			setLoading(false);
		}
	};
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
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
							htmlFor: "password",
							children: "Nova Senha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								type: "password",
								placeholder: "******",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								disabled: loading,
								className: "pl-9"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "confirmPassword",
							children: "Confirmar Senha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "confirmPassword",
								type: "password",
								placeholder: "******",
								value: confirmPassword,
								onChange: (e) => setConfirmPassword(e.target.value),
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
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Atualizando..."] }) : "Atualizar Senha"
					})
				]
			}) })]
		})
	});
}
export { ResetPassword as default };

//# sourceMappingURL=ResetPassword-BcJx-0eo.js.map