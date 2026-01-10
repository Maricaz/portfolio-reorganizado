import { t as Search } from "./search-Cs465PU1.js";
import { G as require_jsx_runtime, I as createLucideIcon, J as useToast, _ as getSiteTranslations, d as Button, g as flattenTranslations, nt as __toESM, tt as require_react, v as upsertTranslation, x as translations } from "./index-WvNcIOTU.js";
import { t as Input } from "./input-DJVk3JqY.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DXQ5AzY6.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CIFWoc3Z.js";
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
function SettingsManager() {
	const [dbTranslations, setDbTranslations] = (0, import_react.useState)([]);
	const [search, setSearch] = (0, import_react.useState)("");
	const [editingValues, setEditingValues] = (0, import_react.useState)({});
	const { toast } = useToast();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Content Manager"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Manage site-wide text and translations."
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
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredKeys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
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
						] }, key)) })] })
					})
				}, lang))]
			})
		]
	});
}
export { SettingsManager as default };

//# sourceMappingURL=SettingsManager--CH9FM4W.js.map