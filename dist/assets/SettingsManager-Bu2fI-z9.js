import { t as Search } from "./search-CFJhcz15.js";
import { B as Moon, M as useTheme, P as cn, R as Sun, S as upsertTranslation, St as __toESM, T as translations, X as createLucideIcon, b as flattenTranslations, m as Button, mt as useToast, ut as require_jsx_runtime, x as getSiteTranslations, xt as require_react } from "./index-CVh1OjeJ.js";
import { t as Primitive } from "./dist-ChJBzI_l.js";
import { t as Input } from "./input-D6ow8L1r.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DPMly2x1.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-B4AtllQt.js";
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
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = import_react.forwardRef((props, forwardedRef) => {
	const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
	const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
	const ariaOrientation = orientation === "vertical" ? orientation : void 0;
	const semanticProps = decorative ? { role: "none" } : {
		"aria-orientation": ariaOrientation,
		role: "separator"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-orientation": orientation,
		...semanticProps,
		...domProps,
		ref: forwardedRef
	});
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
	return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}));
Separator.displayName = Root.displayName;
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
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Manage site configurations and preferences."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
										" more... (Search to find)"
									]
								}) })] })] })
							})
						}, lang))]
					})
				]
			})
		]
	});
}
export { SettingsManager as default };

//# sourceMappingURL=SettingsManager-Bu2fI-z9.js.map