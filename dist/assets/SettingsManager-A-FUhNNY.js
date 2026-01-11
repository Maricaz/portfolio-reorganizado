import { t as LoaderCircle } from "./loader-circle-D_oS30lV.js";
import { t as Search } from "./search-tKGvS3se.js";
import { B as Moon, C as supabase, Ct as __toESM, M as useTheme, R as Sun, S as upsertTranslation, St as require_react, T as translations, Z as createLucideIcon, b as flattenTranslations, dt as require_jsx_runtime, ht as useToast, m as Button, x as getSiteTranslations } from "./index-CT347kgo.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-Ch4Q0RGl.js";
import { n as Input, t as Label } from "./label-BSZHb8Py.js";
import { t as Badge } from "./badge-DcBjw4K-.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-Bedaqfp5.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C6Djs7oA.js";
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
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
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
		}
	};
	const hasVerifiedFactor = factors.some((f) => f.status === "verified");
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin h-6 w-6 text-muted-foreground" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
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
		] })
	});
};
function SettingsManager() {
	const [dbTranslations, setDbTranslations] = (0, import_react.useState)([]);
	const [search, setSearch] = (0, import_react.useState)("");
	const [editingValues, setEditingValues] = (0, import_react.useState)({});
	const { toast } = useToast();
	const { theme, setTheme } = useTheme();
	const [accentColor, setAccentColor] = (0, import_react.useState)("240 5.9% 10%");
	const flattenedDefaults = (0, import_react.useMemo)(() => {
		return {
			pt: flattenTranslations(translations.pt),
			en: flattenTranslations(translations.en),
			ko: flattenTranslations(translations.ko)
		};
	}, []);
	const allKeys = (0, import_react.useMemo)(() => {
		return Object.keys(flattenedDefaults.pt).sort();
	}, [flattenedDefaults]);
	(0, import_react.useEffect)(() => {
		loadTranslations();
		const savedAccent = localStorage.getItem("admin_accent");
		if (savedAccent) setAccentColor(savedAccent);
	}, []);
	const loadTranslations = async () => {
		setDbTranslations(await getSiteTranslations() || []);
	};
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
	const getDisplayValue = (key, lang) => {
		if (editingValues[`${key}-${lang}`] !== void 0) return editingValues[`${key}-${lang}`];
		const dbValue = dbTranslations.find((t) => t.key === key && t.lang === lang)?.value;
		if (dbValue) return dbValue;
		return flattenedDefaults[lang][key] || "";
	};
	const filteredKeys = allKeys.filter((key) => key.toLowerCase().includes(search.toLowerCase()));
	const handleAccentChange = (hsl) => {
		setAccentColor(hsl);
		document.documentElement.style.setProperty("--primary", hsl);
		localStorage.setItem("admin_accent", hsl);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
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
					className: "mb-4",
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
							value: "security",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4 mr-2" }), "Security"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "general",
					className: "space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 p-4 border rounded-lg bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-medium",
								children: "Theme Preference"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: theme === "light" ? "default" : "outline",
										onClick: () => setTheme("light"),
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "mr-2 h-4 w-4" }), " Light"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: theme === "dark" ? "default" : "outline",
										onClick: () => setTheme("dark"),
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "mr-2 h-4 w-4" }), " Dark"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: theme === "system" ? "default" : "outline",
										onClick: () => setTheme("system"),
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "mr-2 h-4 w-4" }), " System"]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 p-4 border rounded-lg bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-medium",
								children: "Accent Color"
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
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "translations",
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-medium",
								children: "Content Translations"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm",
								children: "Override default text for different languages."
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
									className: "border rounded-md",
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
									] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [filteredKeys.slice(0, 50).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
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
									] }, key)), filteredKeys.length > 50 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
										colSpan: 3,
										className: "text-center text-sm",
										children: [
											"And ",
											filteredKeys.length - 50,
											" more..."
										]
									}) })] })] })
								})
							}, lang))]
						})
					]
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

//# sourceMappingURL=SettingsManager-A-FUhNNY.js.map