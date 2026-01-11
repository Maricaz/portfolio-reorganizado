import { t as ShieldAlert } from "./shield-alert-BA_FIzu0.js";
import { C as supabase, Ct as __toESM, St as require_react, dt as require_jsx_runtime, ht as useToast, m as Button, v as useAuth, yt as useNavigate } from "./index-BC0sjyFi.js";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-FpEyek10.js";
import { n as Input, t as Label } from "./label-CPN4V0f-.js";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-DCEcH5MC.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function AdminLogin() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [resetEmail, setResetEmail] = (0, import_react.useState)("");
	const [isResetOpen, setIsResetOpen] = (0, import_react.useState)(false);
	const [mfaRequired, setMfaRequired] = (0, import_react.useState)(false);
	const [mfaCode, setMfaCode] = (0, import_react.useState)("");
	const [factorId, setFactorId] = (0, import_react.useState)(null);
	const { signIn, resetPassword, verifyMfa } = useAuth();
	const navigate = useNavigate();
	const { toast } = useToast();
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const { data, error } = await signIn(email, password);
			if (error) throw error;
			const { data: factorsData, error: factorsError } = await supabase.auth.mfa.listFactors();
			if (factorsError) throw factorsError;
			const verifiedFactors = factorsData.all.filter((f) => f.status === "verified");
			if (verifiedFactors.length > 0) {
				setFactorId(verifiedFactors[0].id);
				setMfaRequired(true);
				setLoading(false);
			} else {
				setLoading(false);
				navigate("/admin");
			}
		} catch (error) {
			setLoading(false);
			toast({
				title: "Login failed",
				description: error.message || "An error occurred",
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
			title: "MFA Verification failed",
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
			title: "Error",
			description: error.message,
			variant: "destructive"
		});
		else toast({
			title: "Email sent",
			description: "Check your inbox for password reset instructions."
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
						children: "Two-Factor Authentication"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "text-center",
						children: "Enter the code from your authenticator app"
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
							children: "Authentication Code"
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
						children: loading ? "Verifying..." : "Verify"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						type: "button",
						className: "w-full text-xs text-muted-foreground",
						onClick: () => window.location.reload(),
						children: "Back to Login"
					})
				]
			}) })]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-muted/20 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Admin Access" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Enter your credentials to access the dashboard" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleLogin,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
								open: isResetOpen,
								onOpenChange: setIsResetOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "link",
										className: "px-0 font-normal h-auto text-xs",
										type: "button",
										children: "Forgot password?"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Reset Password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Enter your email address and we'll send you a link to reset your password." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
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
										children: loading ? "Sending..." : "Send Reset Link"
									}) })]
								})] })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "password",
							type: "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						disabled: loading,
						children: loading ? "Signing in..." : "Sign In"
					})
				]
			}) })]
		})
	});
}
export { AdminLogin as default };

//# sourceMappingURL=AdminLogin-C_p7rH2_.js.map