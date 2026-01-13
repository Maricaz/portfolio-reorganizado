import { t as Bell } from "./bell-CLnezUPL.js";
import { t as Globe } from "./globe-B54jEHUF.js";
import { t as Image } from "./image-CPuztVkE.js";
import { t as Plus } from "./plus-CqCaZydl.js";
import { n as Search, t as uploadFile } from "./storage-CObX0j7J.js";
import { t as Trash2 } from "./trash-2-D04WLII6.js";
import { D as getSiteTranslations, E as flattenTranslations, Et as useToast, G as Sun, J as Moon, Lt as __toESM, O as upsertTranslation, Pt as require_react, St as require_jsx_runtime, Z as LoaderCircle, j as translations, k as supabase, n as upsertSiteSetting, ot as createLucideIcon, t as getSiteSettings, v as Button, z as useTheme } from "./index-DzjohDXW.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BrdcHwKP.js";
import { n as Input, t as Label } from "./label-COIvgApt.js";
import { t as Textarea } from "./textarea-DSS39dvi.js";
import { t as Badge } from "./badge-DUPkkYtn.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-Cxn6lw2K.js";
import { a as DialogHeader, c as Table, d as TableHead, f as TableHeader, i as DialogFooter, l as TableBody, n as DialogContent, o as DialogTitle, p as TableRow, r as DialogDescription, s as DialogTrigger, t as Dialog, u as TableCell } from "./dialog-BP7GwD54.js";
import { i as unsubscribePush, n as registerPush, t as checkSubscription } from "./push-DB436l23.js";
import { i as triggerSecurityAlert, n as logSecurityEvent, r as revokeSession, t as listActiveSessions } from "./security-uFyYv5VG.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-CmdSU4-O.js";
var BellOff = createLucideIcon("bell-off", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
		key: "178tsu"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",
		key: "1hqiys"
	}]
]);
var Monitor = createLucideIcon("monitor", [
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "21",
		y2: "21",
		key: "1svkeh"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "17",
		y2: "21",
		key: "vw1qmm"
	}]
]);
var Palette = createLucideIcon("palette", [
	["path", {
		d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
		key: "e79jfc"
	}],
	["circle", {
		cx: "13.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor",
		key: "1okk4w"
	}],
	["circle", {
		cx: "17.5",
		cy: "10.5",
		r: ".5",
		fill: "currentColor",
		key: "f64h9f"
	}],
	["circle", {
		cx: "6.5",
		cy: "12.5",
		r: ".5",
		fill: "currentColor",
		key: "qy21gx"
	}],
	["circle", {
		cx: "8.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "fotxhn"
	}]
]);
var Save = createLucideIcon("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]);
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
var Shield = createLucideIcon("shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]);
var Smartphone = createLucideIcon("smartphone", [["rect", {
	width: "14",
	height: "20",
	x: "5",
	y: "2",
	rx: "2",
	ry: "2",
	key: "1yt0o3"
}], ["path", {
	d: "M12 18h.01",
	key: "mhygvu"
}]]);
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
var Type = createLucideIcon("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
const SessionManager = () => {
	const [sessions, setSessions] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [currentSessionId, setCurrentSessionId] = (0, import_react.useState)(null);
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		fetchSessions();
		getCurrentSession();
	}, []);
	const getCurrentSession = async () => {
		const { data } = await supabase.auth.getSession();
	};
	const fetchSessions = async () => {
		setLoading(true);
		try {
			setSessions((await listActiveSessions()).sort((a, b) => new Date(b.last_sign_in_at || b.created_at).getTime() - new Date(a.last_sign_in_at || a.created_at).getTime()));
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Failed to load sessions.",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	const handleRevoke = async (sessionId) => {
		try {
			await revokeSession(sessionId);
			toast({
				title: "Session Revoked",
				description: "The session has been successfully terminated."
			});
			fetchSessions();
		} catch (error) {
			toast({
				title: "Error",
				description: error.message || "Failed to revoke session.",
				variant: "destructive"
			});
		}
	};
	const getDeviceIcon = (ua) => {
		if (ua.toLowerCase().includes("mobile") || ua.toLowerCase().includes("android") || ua.toLowerCase().includes("iphone")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "h-4 w-4" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "h-4 w-4" });
	};
	const formatUA = (ua) => {
		if (!ua) return "Unknown Device";
		if (ua.includes("Windows")) return "Windows PC";
		if (ua.includes("Macintosh")) return "Mac";
		if (ua.includes("Linux")) return "Linux";
		if (ua.includes("Android")) return "Android";
		if (ua.includes("iPhone")) return "iPhone";
		if (ua.includes("iPad")) return "iPad";
		return "Unknown Device";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "h-5 w-5" }), "Active Sessions"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Manage devices and browsers that are currently logged into your account." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin h-6 w-6 text-muted-foreground" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Device" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "IP Address" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Last Activity" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "text-right",
				children: "Action"
			})
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: sessions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: 4,
			className: "text-center h-24 text-muted-foreground",
			children: "No active sessions found."
		}) }) : sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-2 bg-muted rounded-full",
					children: getDeviceIcon(session.user_agent)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: formatUA(session.user_agent)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground truncate max-w-[200px]",
						title: session.user_agent,
						children: session.user_agent
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "font-mono text-xs",
				children: session.ip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "text-sm text-muted-foreground",
				children: new Date(session.last_sign_in_at || session.created_at).toLocaleString()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "destructive",
					size: "sm",
					onClick: () => handleRevoke(session.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 mr-2" }), "Revoke"]
				})
			})
		] }, session.id)) })] }) })]
	});
};
const SecuritySettings = () => {
	const [factors, setFactors] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [enrolling, setEnrolling] = (0, import_react.useState)(false);
	const [qrCode, setQrCode] = (0, import_react.useState)(null);
	const [verifyCode, setVerifyCode] = (0, import_react.useState)("");
	const [factorId, setFactorId] = (0, import_react.useState)(null);
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		fetchFactors();
	}, []);
	const fetchFactors = async () => {
		setLoading(true);
		const { data, error } = await supabase.auth.mfa.listFactors();
		if (error) console.error("Error fetching factors", error);
		else setFactors(data.all || []);
		setLoading(false);
	};
	const startEnrollment = async () => {
		setEnrolling(true);
		const { data, error } = await supabase.auth.mfa.enroll({ factorType: "totp" });
		if (error) {
			toast({
				title: "Error enrolling",
				description: error.message,
				variant: "destructive"
			});
			setEnrolling(false);
			return;
		}
		setFactorId(data.id);
		setQrCode(data.totp.qr_code);
	};
	const verifyEnrollment = async () => {
		if (!factorId) return;
		const { data: challengeData, error: challengeError } = await supabase.auth.mfa.challenge({ factorId });
		if (challengeError) {
			toast({
				title: "Error challenging factor",
				description: challengeError.message,
				variant: "destructive"
			});
			return;
		}
		const { error: verifyError } = await supabase.auth.mfa.verify({
			factorId,
			challengeId: challengeData.id,
			code: verifyCode
		});
		if (verifyError) toast({
			title: "Verification failed",
			description: verifyError.message,
			variant: "destructive"
		});
		else {
			toast({
				title: "Success!",
				description: "Two-factor authentication has been enabled."
			});
			setEnrolling(false);
			setQrCode(null);
			setVerifyCode("");
			fetchFactors();
			await logSecurityEvent("2FA_CHANGE", {
				type: "enabled",
				factorId
			});
			await triggerSecurityAlert("2FA_CHANGE", {
				title: "Security Alert: 2FA Enabled",
				message: "Two-factor authentication was enabled for your account."
			});
		}
	};
	const handleUnenroll = async (id) => {
		const { error } = await supabase.auth.mfa.unenroll({ factorId: id });
		if (error) toast({
			title: "Error",
			description: error.message,
			variant: "destructive"
		});
		else {
			toast({
				title: "MFA Disabled",
				description: "Factor removed successfully."
			});
			fetchFactors();
			await logSecurityEvent("2FA_CHANGE", {
				type: "disabled",
				factorId: id
			});
			await triggerSecurityAlert("2FA_CHANGE", {
				title: "Security Alert: 2FA Disabled",
				message: "Two-factor authentication was disabled for your account."
			});
		}
	};
	const hasVerifiedFactor = factors.some((f) => f.status === "verified");
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin h-6 w-6 text-muted-foreground" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5" }), "Two-Factor Authentication (MFA)"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Add an extra layer of security to your account." })]
				}), hasVerifiedFactor ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					className: "bg-green-500 hover:bg-green-600",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3 h-3 mr-1" }), " Enabled"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					children: "Disabled"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: enrolling ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 border rounded-md p-4 bg-muted/20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-lg",
						children: "Setup Authenticator App"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Scan the QR code below with your authenticator app (like Google Authenticator or Authy)."
					}),
					qrCode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center p-4 bg-white rounded-md w-fit mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: qrCode,
							alt: "QR Code",
							className: "w-48 h-48"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 max-w-xs mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "code",
							children: "Verification Code"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "code",
							placeholder: "Enter 6-digit code",
							value: verifyCode,
							onChange: (e) => setVerifyCode(e.target.value),
							maxLength: 6
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setEnrolling(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: verifyEnrollment,
							disabled: verifyCode.length !== 6,
							children: "Verify & Enable"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: factors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-medium text-sm",
						children: "Enrolled Factors"
					}), factors.map((factor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-3 border rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2 bg-muted rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium text-sm",
								children: [
									factor.factorType,
									" (",
									factor.status,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: ["ID: ", factor.id]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "destructive",
							size: "sm",
							onClick: () => handleUnenroll(factor.id),
							children: "Remove"
						})]
					}, factor.id))]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center p-6 text-center text-muted-foreground bg-muted/20 rounded-lg border-dashed border-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-10 w-10 mb-2 opacity-50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You have not enabled 2FA yet." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "We strongly recommend enabling it for admin accounts."
						})
					]
				})
			}) }),
			!enrolling && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
				className: "bg-muted/10 border-t px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: startEnrollment,
					children: factors.length > 0 ? "Add Another Factor" : "Enable 2FA"
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionManager, {})]
	});
};
const SeoSettings = () => {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [initialLoading, setInitialLoading] = (0, import_react.useState)(true);
	const [settings, setSettings] = (0, import_react.useState)({
		title: "",
		description: "",
		keywords: ""
	});
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		loadSettings();
	}, []);
	const loadSettings = async () => {
		setInitialLoading(true);
		try {
			const data = await getSiteSettings();
			if (data.seo_global) setSettings(data.seo_global);
		} catch (error) {
			console.error("Failed to load SEO settings", error);
		} finally {
			setInitialLoading(false);
		}
	};
	const handleSave = async () => {
		setLoading(true);
		try {
			const { error } = await upsertSiteSetting("seo_global", settings);
			if (error) throw error;
			toast({
				title: "Settings saved",
				description: "SEO configuration has been updated successfully."
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to save settings. Please try again.",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	if (initialLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5" }), " Global SEO Configuration"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Manage the default search engine optimization settings for your site. These will be used when page-specific settings are not available." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "site-title",
							children: "Global Site Title"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "site-title",
							placeholder: "e.g. My Awesome Portfolio",
							value: settings.title,
							onChange: (e) => setSettings({
								...settings,
								title: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Appended to page titles (e.g. \"About | My Awesome Portfolio\")"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "meta-description",
							children: "Meta Description"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "meta-description",
							placeholder: "A brief description of your portfolio website...",
							value: settings.description,
							onChange: (e) => setSettings({
								...settings,
								description: e.target.value
							}),
							rows: 3
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Recommended length: 150-160 characters."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "meta-keywords",
							children: "Meta Keywords"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "meta-keywords",
							placeholder: "portfolio, developer, react, typescript",
							value: settings.keywords,
							onChange: (e) => setSettings({
								...settings,
								keywords: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Comma-separated list of keywords."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
			className: "bg-muted/10 border-t px-6 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: handleSave,
				disabled: loading,
				children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }), "Save Configuration"]
			})
		})
	] });
};
function GeneralTab() {
	const { theme, setTheme } = useTheme();
	const { toast } = useToast();
	const [accentColor, setAccentColor] = (0, import_react.useState)("240 5.9% 10%");
	const [fontFamily, setFontFamily] = (0, import_react.useState)("Inter var, sans-serif");
	const [homeImage, setHomeImage] = (0, import_react.useState)("");
	const [uploadingImage, setUploadingImage] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		loadSettings();
	}, []);
	const loadSettings = async () => {
		try {
			const settings = await getSiteSettings();
			if (settings.home_hero_image) setHomeImage(settings.home_hero_image);
			const config = settings.theme_config;
			if (config) {
				if (config.primary) setAccentColor(config.primary);
				if (config.font) setFontFamily(config.font);
			} else {
				if (settings.theme_primary_color) setAccentColor(settings.theme_primary_color);
				if (settings.theme_font_family) setFontFamily(settings.theme_font_family);
			}
		} catch (error) {
			console.error("Failed to load settings", error);
		}
	};
	const saveThemeConfig = async (newMode, newPrimary, newFont) => {
		await upsertSiteSetting("theme_config", {
			mode: newMode || theme,
			primary: newPrimary || accentColor,
			font: newFont || fontFamily
		});
		if (newPrimary) document.documentElement.style.setProperty("--primary", newPrimary);
		if (newFont) document.documentElement.style.setProperty("--font-primary", newFont);
	};
	const handleModeChange = async (newTheme) => {
		setTheme(newTheme);
		await saveThemeConfig(newTheme);
		toast({
			title: "Theme Updated",
			description: `Appearance set to ${newTheme}`
		});
	};
	const handleAccentChange = async (hsl) => {
		setAccentColor(hsl);
		await saveThemeConfig(void 0, hsl);
		toast({
			title: "Theme Updated",
			description: "Primary color saved."
		});
	};
	const handleFontChange = async (font) => {
		setFontFamily(font);
		await saveThemeConfig(void 0, void 0, font);
		toast({
			title: "Theme Updated",
			description: "Font family saved."
		});
	};
	const handleImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setUploadingImage(true);
		try {
			const url = await uploadFile(file, "portfolio-media", "home");
			if (url) {
				setHomeImage(url);
				await upsertSiteSetting("home_hero_image", url);
				toast({
					title: "Image updated",
					description: "Home page hero image has been updated successfully."
				});
			}
		} catch (error) {
			toast({
				title: "Upload failed",
				description: "Failed to upload image.",
				variant: "destructive"
			});
		} finally {
			setUploadingImage(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-4 border rounded-lg bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-medium flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "h-5 w-5" }), " Theme Preference"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: [
							"light",
							"dark",
							"system"
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: theme === m ? "default" : "outline",
							onClick: () => handleModeChange(m),
							className: "flex-1 capitalize",
							children: [
								m === "light" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "mr-2 h-4 w-4" }),
								m === "dark" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "mr-2 h-4 w-4" }),
								m === "system" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "mr-2 h-4 w-4" }),
								m
							]
						}, m))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-4 border rounded-lg bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-medium flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-5 w-5" }), " Primary Color"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							{
								name: "Default",
								value: "240 5.9% 10%"
							},
							{
								name: "Blue",
								value: "221 83% 53%"
							},
							{
								name: "Green",
								value: "142 76% 36%"
							},
							{
								name: "Red",
								value: "346 84% 61%"
							},
							{
								name: "Purple",
								value: "262 83% 58%"
							},
							{
								name: "Orange",
								value: "24 94% 50%"
							}
						].map((acc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleAccentChange(acc.value),
							className: `w-8 h-8 rounded-full border-2 transition-all ${accentColor === acc.value ? "border-foreground scale-110" : "border-transparent hover:scale-105"}`,
							style: { backgroundColor: `hsl(${acc.value})` },
							title: acc.name
						}, acc.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-4 border rounded-lg bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-lg font-medium flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "h-5 w-5" }), " Font Family"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: fontFamily,
							onValueChange: handleFontChange,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a font" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
								{
									name: "Inter (Default)",
									value: "'Inter var', sans-serif"
								},
								{
									name: "Roboto",
									value: "'Roboto', sans-serif"
								},
								{
									name: "Serif",
									value: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
								},
								{
									name: "Monospace",
									value: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
								}
							].map((font) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: font.value,
								children: font.name
							}, font.name)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-2",
							style: { fontFamily },
							children: "Preview: The quick brown fox jumps over the lazy dog."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-4 border rounded-lg bg-card md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-medium flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-5 w-5" }), " Home Page Customization"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-6 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Hero Image" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "file",
									accept: "image/*",
									onChange: handleImageUpload,
									disabled: uploadingImage
								}),
								uploadingImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Uploading..."]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center md:justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-48 h-48 rounded-full overflow-hidden border-4 border-muted shadow-md",
								children: homeImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: homeImage,
									alt: "Home Hero",
									className: "w-full h-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full h-full bg-muted flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-10 w-10 opacity-20" })
								})
							})
						})]
					})]
				})
			]
		})
	});
}
function TranslationsTab() {
	const [dbTranslations, setDbTranslations] = (0, import_react.useState)([]);
	const [search, setSearch] = (0, import_react.useState)("");
	const [editingValues, setEditingValues] = (0, import_react.useState)({});
	const { toast } = useToast();
	const [isAddOpen, setIsAddOpen] = (0, import_react.useState)(false);
	const [newKey, setNewKey] = (0, import_react.useState)("");
	const [newLang, setNewLang] = (0, import_react.useState)("en");
	const [newValue, setNewValue] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadTranslations();
	}, []);
	const loadTranslations = async () => {
		setDbTranslations(await getSiteTranslations() || []);
	};
	const flattenedDefaults = (0, import_react.useMemo)(() => ({
		pt: flattenTranslations(translations.pt),
		en: flattenTranslations(translations.en),
		ko: flattenTranslations(translations.ko)
	}), []);
	const filteredKeys = (0, import_react.useMemo)(() => {
		const defaultKeys = Object.keys(flattenedDefaults.pt);
		const dbKeys = dbTranslations.map((t) => t.key);
		return Array.from(new Set([...defaultKeys, ...dbKeys])).sort();
	}, [flattenedDefaults, dbTranslations]).filter((key) => key.toLowerCase().includes(search.toLowerCase()));
	const handleSave = async (key, lang) => {
		const value = editingValues[`${key}-${lang}`];
		if (value === void 0) return;
		try {
			const { error } = await upsertTranslation(key, lang, value);
			if (error) throw error;
			toast({
				title: "Success",
				description: "Translation updated"
			});
			loadTranslations();
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to update",
				variant: "destructive"
			});
		}
	};
	const handleAddTranslation = async () => {
		if (!newKey || !newValue) {
			toast({
				title: "Error",
				description: "Key and Value are required",
				variant: "destructive"
			});
			return;
		}
		try {
			const { error } = await upsertTranslation(newKey, newLang, newValue);
			if (error) throw error;
			toast({
				title: "Success",
				description: "New translation added"
			});
			setIsAddOpen(false);
			setNewKey("");
			setNewValue("");
			loadTranslations();
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to add translation",
				variant: "destructive"
			});
		}
	};
	const getDisplayValue = (key, lang) => {
		if (editingValues[`${key}-${lang}`] !== void 0) return editingValues[`${key}-${lang}`];
		const dbValue = dbTranslations.find((t) => t.key === key && t.lang === lang)?.value;
		if (dbValue) return dbValue;
		return flattenedDefaults[lang][key] || "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-medium",
						children: "Content Translations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: "Manage site text content for all supported languages."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open: isAddOpen,
					onOpenChange: setIsAddOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), "Add Translation"] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add New Translation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Create a new translation entry." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-4 items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "key",
										className: "text-right",
										children: "Key"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "key",
										value: newKey,
										onChange: (e) => setNewKey(e.target.value),
										className: "col-span-3",
										placeholder: "e.g., home.welcome"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-4 items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "lang",
										className: "text-right",
										children: "Language"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: newLang,
										onValueChange: setNewLang,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "col-span-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "pt",
												children: "Português"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "en",
												children: "English"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "ko",
												children: "Korean"
											})
										] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-4 items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "value",
										className: "text-right",
										children: "Value"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "value",
										value: newValue,
										onChange: (e) => setNewValue(e.target.value),
										className: "col-span-3",
										placeholder: "Translated text..."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: handleAddTranslation,
							children: "Save Translation"
						}) })
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search keys...",
					className: "max-w-sm",
					value: search,
					onChange: (e) => setSearch(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "pt",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "pt",
						children: "Português"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "en",
						children: "English"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "ko",
						children: "Korean"
					})
				] }), [
					"pt",
					"en",
					"ko"
				].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: lang,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border rounded-md max-h-[600px] overflow-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "w-[300px]",
								children: "Key"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Value" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "w-[100px]",
								children: "Action"
							})
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [
							filteredKeys.slice(0, 50).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-mono text-xs",
									children: key
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: getDisplayValue(key, lang),
									onChange: (e) => setEditingValues((prev) => ({
										...prev,
										[`${key}-${lang}`]: e.target.value
									}))
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									onClick: () => handleSave(key, lang),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" })
								}) })
							] }, key)),
							filteredKeys.length > 50 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								colSpan: 3,
								className: "text-center text-sm",
								children: [
									"And ",
									filteredKeys.length - 50,
									" more..."
								]
							}) }),
							filteredKeys.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								colSpan: 3,
								className: "text-center p-4",
								children: "No translation keys found."
							}) })
						] })] })
					})
				}, lang))]
			})
		]
	});
}
const PushSubscriptionManager = () => {
	const [isSubscribed, setIsSubscribed] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		checkStatus();
	}, []);
	const checkStatus = async () => {
		try {
			setIsSubscribed(await checkSubscription());
		} catch (error) {
			console.error("Failed to check push status", error);
		} finally {
			setLoading(false);
		}
	};
	const handleSubscribe = async () => {
		setLoading(true);
		try {
			await registerPush();
			setIsSubscribed(true);
			toast({
				title: "Subscribed",
				description: "You will now receive push notifications."
			});
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: error.message || "Failed to subscribe.",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	const handleUnsubscribe = async () => {
		setLoading(true);
		try {
			await unsubscribePush();
			setIsSubscribed(false);
			toast({
				title: "Unsubscribed",
				description: "You will no longer receive push notifications."
			});
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Failed to unsubscribe.",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
		className: "pt-6 flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin h-6 w-6 text-muted-foreground" })
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
		className: "flex items-center gap-2",
		children: [isSubscribed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5 text-green-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellOff, { className: "h-5 w-5 text-muted-foreground" }), "Push Notifications"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Receive real-time alerts for critical events even when the app is closed." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
		className: "bg-muted/10 border-t px-6 py-4",
		children: isSubscribed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			onClick: handleUnsubscribe,
			children: "Disable Notifications"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: handleSubscribe,
			children: "Enable Notifications"
		})
	})] });
};
function SettingsManager() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold",
				children: "Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Manage site configurations and preferences."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "general",
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "mb-4 flex-wrap h-auto gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "general",
							children: "General"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "translations",
							children: "Translations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "seo",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4 mr-2" }), "SEO"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "notifications",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-4 h-4 mr-2" }), "Notifications"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "security",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4 mr-2" }), "Security"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "general",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeneralTab, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "translations",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TranslationsTab, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "seo",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoSettings, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "notifications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PushSubscriptionManager, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "security",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecuritySettings, {})
				})
			]
		})]
	});
}
export { SettingsManager as default };

//# sourceMappingURL=SettingsManager-C-q_7NnW.js.map