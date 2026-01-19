import { t as CircleAlert } from "./circle-alert-QuaiAnGy.js";
import { t as ShieldAlert } from "./shield-alert-DbE2pjEo.js";
import { At as useNavigate, Et as Link, It as __toESM, Nt as require_react, Tt as useToast, X as LoaderCircle, Y as Mail, at as createLucideIcon, k as supabase, v as Button, w as useAuth, xt as require_jsx_runtime } from "./index-D8qIS_cZ.js";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-CLHNh6PC.js";
import { n as Input, t as Label } from "./label-CT_zvsO3.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-Dhww0kel.js";
var Lock = createLucideIcon("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function AdminLogin() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [loginError, setLoginError] = (0, import_react.useState)(null);
	const [mfaRequired, setMfaRequired] = (0, import_react.useState)(false);
	const [mfaCode, setMfaCode] = (0, import_react.useState)("");
	const [factorId, setFactorId] = (0, import_react.useState)(null);
	const { signIn, verifyMfa, user, isAdmin, signOut } = useAuth();
	const navigate = useNavigate();
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		if (user && isAdmin) navigate("/admin");
	}, [
		user,
		isAdmin,
		navigate
	]);
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setLoginError(null);
		try {
			const { data, error, role } = await signIn(email, password);
			if (error) {
				if (error.message.includes("Invalid login credentials") || error.message.includes("Email not confirmed")) throw new Error("Email ou senha incorretos.");
				throw new Error(error.message);
			}
			if (!data.user) throw new Error("Erro inesperado: dados do usuário não retornados.");
			const currentRole = role || "user";
			if (![
				"admin",
				"super_admin",
				"editor"
			].includes(currentRole)) {
				await signOut();
				console.warn(`Access denied for role: ${currentRole}`);
				throw new Error("Acesso negado: Esta conta não possui privilégios de administrador.");
			}
			const { data: factorsData, error: factorsError } = await supabase.auth.mfa.listFactors();
			if (factorsError) console.warn("MFA check failed:", factorsError);
			const verifiedFactors = factorsData?.all?.filter((f) => f.status === "verified") || [];
			if (verifiedFactors.length > 0) {
				setFactorId(verifiedFactors[0].id);
				setMfaRequired(true);
				setLoading(false);
			} else {
				toast({
					title: "Bem-vinda de volta!",
					description: "Login administrativo realizado com sucesso."
				});
				navigate("/admin");
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			const errorMessage = error.message || "Ocorreu um erro ao tentar entrar. Tente novamente.";
			console.error("Login process error:", error);
			setLoginError(errorMessage);
			if (!errorMessage.includes("Email ou senha") && !errorMessage.includes("Acesso negado")) toast({
				title: "Falha no Login",
				description: errorMessage,
				variant: "destructive"
			});
		}
	};
	const handleMfaVerify = async (e) => {
		e.preventDefault();
		if (!factorId) return;
		setLoading(true);
		const { error } = await verifyMfa(factorId, mfaCode);
		setLoading(false);
		if (error) toast({
			title: "Código MFA Inválido",
			description: error.message,
			variant: "destructive"
		});
		else navigate("/admin");
	};
	if (mfaRequired) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md border-primary/20 shadow-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "w-6 h-6 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-center",
						children: "Autenticação de Dois Fatores"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "text-center",
						children: "Digite o código do seu aplicativo autenticador"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleMfaVerify,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "mfa-code",
							className: "sr-only",
							children: "Código de Autenticação"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "mfa-code",
							type: "text",
							value: mfaCode,
							onChange: (e) => setMfaCode(e.target.value),
							className: "text-center text-lg tracking-widest",
							placeholder: "000000",
							maxLength: 6,
							autoFocus: true,
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						disabled: loading || mfaCode.length !== 6,
						children: loading ? "Verificando..." : "Verificar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						type: "button",
						className: "w-full text-xs text-muted-foreground",
						onClick: () => window.location.reload(),
						children: "Voltar ao Login"
					})
				]
			}) })]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md shadow-lg border-primary/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 bg-primary/10 rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-6 h-6 text-primary" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-center text-2xl font-bold",
						children: "Área Administrativa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "text-center",
						children: "Entre com suas credenciais para acessar o painel"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleLogin,
				className: "space-y-4",
				children: [
					loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
						variant: "destructive",
						className: "animate-fade-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Erro" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
								className: "text-xs mt-1",
								children: loginError
							})
						]
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
								className: "pl-9",
								autoComplete: "email"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								children: "Senha"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/forgot-password",
								className: "text-xs text-primary hover:underline underline-offset-4",
								children: "Esqueceu a senha?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								type: "password",
								placeholder: "••••••",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								disabled: loading,
								className: "pl-9",
								autoComplete: "current-password"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						disabled: loading,
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Entrando..."] }) : "Entrar"
					}),
					loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						className: "w-full text-xs text-muted-foreground mt-2",
						onClick: () => setLoginError(null),
						children: "Tentar novamente"
					})
				]
			}) })]
		})
	});
}
export { AdminLogin as default };

//# sourceMappingURL=AdminLogin-CnL-KI0c.js.map