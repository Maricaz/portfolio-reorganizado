import { t as LoaderCircle } from "./loader-circle-Bmcq7ULC.js";
import { t as ShieldAlert } from "./shield-alert-BB01DWqm.js";
import { C as supabase, Ct as __toESM, H as Mail, St as require_react, Z as createLucideIcon, dt as require_jsx_runtime, ht as useToast, m as Button, v as useAuth, yt as useNavigate } from "./index-BDTar78W.js";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-CE65KXbK.js";
import { n as Input, t as Label } from "./label-CU6ouJWg.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-Di7pP3-0.js";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-BqsMROOB.js";
var CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
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
	const [resetEmail, setResetEmail] = (0, import_react.useState)("");
	const [isResetOpen, setIsResetOpen] = (0, import_react.useState)(false);
	const [loginError, setLoginError] = (0, import_react.useState)(null);
	const [mfaRequired, setMfaRequired] = (0, import_react.useState)(false);
	const [mfaCode, setMfaCode] = (0, import_react.useState)("");
	const [factorId, setFactorId] = (0, import_react.useState)(null);
	const { signIn, resetPassword, verifyMfa, user, role, signOut } = useAuth();
	const navigate = useNavigate();
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		if (user && role) {
			if ([
				"admin",
				"super_admin",
				"editor"
			].includes(role)) navigate("/admin");
		}
	}, [
		user,
		role,
		navigate
	]);
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setLoginError(null);
		try {
			const { data, error } = await signIn(email, password);
			if (error) {
				if (error.message.includes("Invalid login credentials") || error.message.includes("Email not confirmed")) throw new Error("Email ou senha incorretos.");
				throw new Error(error.message);
			}
			if (!data.user) throw new Error("Erro ao obter dados do usuário.");
			const { data: profile, error: profileError } = await supabase.from("profiles").select("role").eq("id", data.user.id).single();
			if (profileError) {
				await signOut();
				throw new Error("Erro ao verificar perfil do usuário.");
			}
			const userRole = profile?.role || "user";
			if (![
				"admin",
				"super_admin",
				"editor"
			].includes(userRole)) {
				await signOut();
				throw new Error("Acesso negado: Privilégios de administrador necessários.");
			}
			const { data: factorsData, error: factorsError } = await supabase.auth.mfa.listFactors();
			if (factorsError) console.error("Error listing MFA factors:", factorsError);
			const verifiedFactors = factorsData?.all?.filter((f) => f.status === "verified") || [];
			if (verifiedFactors.length > 0) {
				setFactorId(verifiedFactors[0].id);
				setMfaRequired(true);
				setLoading(false);
			} else {
				toast({
					title: "Bem-vinda de volta!",
					description: "Login realizado com sucesso."
				});
				navigate("/admin");
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			const errorMessage = error.message || "Ocorreu um erro ao tentar entrar. Tente novamente.";
			setLoginError(errorMessage);
			toast({
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
			title: "MFA Falhou",
			description: error.message,
			variant: "destructive"
		});
		else navigate("/admin");
	};
	const handleResetPassword = async (e) => {
		e.preventDefault();
		setLoading(true);
		const { error } = await resetPassword(resetEmail);
		setLoading(false);
		setIsResetOpen(false);
		if (error) toast({
			title: "Erro",
			description: error.message,
			variant: "destructive"
		});
		else toast({
			title: "Email enviado",
			description: "Verifique sua caixa de entrada para instruções de redefinição."
		});
	};
	if (mfaRequired) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4",
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
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4",
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
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Erro" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: loginError })
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
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
								open: isResetOpen,
								onOpenChange: setIsResetOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "link",
										className: "px-0 font-normal h-auto text-xs",
										type: "button",
										children: "Esqueceu a senha?"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Redefinir Senha" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Digite seu email e enviaremos um link para redefinir sua senha." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleResetPassword,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-4 py-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "reset-email",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "reset-email",
												type: "email",
												value: resetEmail,
												onChange: (e) => setResetEmail(e.target.value),
												required: true
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: loading,
										children: loading ? "Enviando..." : "Enviar Link"
									}) })]
								})] })]
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
					})
				]
			}) })]
		})
	});
}
export { AdminLogin as default };

//# sourceMappingURL=AdminLogin-Dcz4vcD7.js.map