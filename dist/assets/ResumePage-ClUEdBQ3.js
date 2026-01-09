import { n as Download, t as GraduationCap } from "./graduation-cap-dW0bW_NL.js";
import { C as require_jsx_runtime, M as require_react, N as __toESM, a as useLanguage, l as cn, m as createLucideIcon, n as Button, t as Skeleton } from "./index-DDHUyA49.js";
import { a as CardHeader, n as CardContent, o as CardTitle, s as useSEO, t as Card } from "./card-C8ef2dxk.js";
import { i as getResumeData } from "./database-CMVGGNzl.js";
var Briefcase = createLucideIcon("briefcase", [["path", {
	d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
	key: "jecpp"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "6",
	rx: "2",
	key: "i6l2r4"
}]]);
var Trophy = createLucideIcon("trophy", [
	["path", {
		d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
		key: "1n3hpd"
	}],
	["path", {
		d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
		key: "rfe1zi"
	}],
	["path", {
		d: "M18 9h1.5a1 1 0 0 0 0-5H18",
		key: "7xy6bh"
	}],
	["path", {
		d: "M4 22h16",
		key: "57wxv0"
	}],
	["path", {
		d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
		key: "1mhfuq"
	}],
	["path", {
		d: "M6 9H4.5a1 1 0 0 1 0-5H6",
		key: "tex48p"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function NeonTabs({ tabs, activeTab, onChange, className }) {
	const containerRef = (0, import_react.useRef)(null);
	const activeTabRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (activeTabRef.current && containerRef.current) {
			const container = containerRef.current;
			const tab = activeTabRef.current;
			const containerRect = container.getBoundingClientRect();
			const tabRect = tab.getBoundingClientRect();
			if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) tab.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center"
			});
		}
	}, [activeTab]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex w-full items-center", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: containerRef,
			className: "flex w-full overflow-x-auto no-scrollbar gap-2 p-1 touch-pan-x",
			role: "tablist",
			children: tabs.map((tab) => {
				const isActive = activeTab === tab.value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: isActive ? activeTabRef : null,
					onClick: () => onChange(tab.value),
					className: cn("px-6 py-2 rounded-full font-medium whitespace-nowrap text-sm md:text-base", isActive ? "btn-neon" : "btn-neon-ghost"),
					role: "tab",
					"aria-selected": isActive,
					"aria-current": isActive ? "page" : void 0,
					"aria-controls": `panel-${tab.value}`,
					id: `tab-${tab.value}`,
					children: tab.label
				}, tab.value);
			})
		})
	});
}
function ResumePage() {
	const { t, language } = useLanguage();
	const [data, setData] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [activeTab, setActiveTab] = (0, import_react.useState)("experience");
	useSEO({
		title: `${t.resume.title} - Portfolio`,
		description: t.resume.description
	});
	(0, import_react.useEffect)(() => {
		const fetchData = async () => {
			try {
				const { data: data$1 } = await getResumeData();
				if (data$1) setData(data$1);
			} catch (err) {
				console.error("Failed to fetch resume data", err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	const getText = (item, field) => {
		if (field === "institution") return item.institution || "";
		return item[`${field}_${language}`] || item[`${field}_en`] || "";
	};
	const getIcon = (category) => {
		switch (category.toLowerCase()) {
			case "education": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5" });
			case "experience": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5" });
			case "skills":
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5" });
		}
	};
	const tabs = [
		{
			value: "experience",
			label: t.resume.experience
		},
		{
			value: "education",
			label: t.resume.education
		},
		{
			value: "skills",
			label: t.resume.skills
		}
	];
	const filteredData = data.filter((item) => item.category === activeTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-8 max-w-4xl space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-fade-in-down",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-bold tracking-tight",
						children: t.resume.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground",
						children: t.resume.description
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), t.resume.download]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-[4.5rem] z-40 bg-background/95 backdrop-blur py-2 -mx-4 px-4 md:mx-0 md:px-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeonTabs, {
					tabs,
					activeTab,
					onChange: setActiveTab,
					className: "max-w-md mx-auto md:mx-0"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "tabpanel",
				id: `panel-${activeTab}`,
				"aria-labelledby": `tab-${activeTab}`,
				className: "min-h-[400px]",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: [
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-12 rounded-full shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-1/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-full" })]
						})]
					}, i))
				}) : filteredData.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8 animate-fade-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative border-l-2 border-muted ml-4 pl-8 space-y-8 py-2",
						children: filteredData.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative animate-fade-in-up",
							style: { animationDelay: `${index * 100}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -left-[41px] top-1 p-1 rounded-full bg-background border-2 border-primary text-primary",
								children: getIcon(item.category)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "neon-card border-none bg-transparent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
									className: "p-4 pb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col md:flex-row md:items-center justify-between gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
												className: "text-lg font-bold",
												children: getText(item, "title")
											}), getText(item, "institution") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-muted-foreground",
												children: getText(item, "institution")
											})]
										}), item.period && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "self-start md:self-center text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap",
											children: item.period
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
									className: "p-4 pt-0 text-muted-foreground whitespace-pre-line text-sm md:text-base",
									children: getText(item, "description")
								})]
							})]
						}, item.id))
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-12 w-12 text-muted-foreground/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: t.common.error || "No items found for this category."
					})]
				})
			})
		]
	});
}
export { ResumePage as default };

//# sourceMappingURL=ResumePage-ClUEdBQ3.js.map