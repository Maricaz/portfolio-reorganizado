import { t as ArrowRight } from "./arrow-right-DLx2b721.js";
import { t as BookOpen } from "./book-open-B19CHag7.js";
import { n as Download, t as getSiteSettings } from "./settings-DnVXHro4.js";
import { t as Music } from "./music-DsJepN1h.js";
import { H as require_react, P as require_jsx_runtime, R as Link, T as createLucideIcon, U as __toESM, d as Button, g as useAnalytics, m as useLanguage, v as cn, x as Mail } from "./index-C8Bn1IEJ.js";
import { n as CardContent, t as Card } from "./card-esJkR1OV.js";
import { t as getLatestItem } from "./database-BhEWouye.js";
var Code = createLucideIcon("code", [["path", {
	d: "m16 18 6-6-6-6",
	key: "eg8j8"
}], ["path", {
	d: "m8 6-6 6 6 6",
	key: "ppft3o"
}]]);
var User = createLucideIcon("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function Index() {
	const { t, language } = useLanguage();
	const { trackResumeDownload } = useAnalytics();
	const [latest, setLatest] = (0, import_react.useState)(null);
	const [settings, setSettings] = (0, import_react.useState)({});
	const [gradient, setGradient] = (0, import_react.useState)("from-indigo-500 to-fuchsia-500");
	(0, import_react.useEffect)(() => {
		async function loadData() {
			const [latestItem, siteSettings] = await Promise.all([getLatestItem(), getSiteSettings()]);
			if (latestItem) setLatest(latestItem);
			if (siteSettings) {
				setSettings(siteSettings);
				if (siteSettings.brand_config?.primary_gradient) setGradient(siteSettings.brand_config.primary_gradient);
			}
		}
		loadData();
	}, []);
	const handleDownloadResume = () => {
		trackResumeDownload();
		if (settings.resume_config?.url) window.open(settings.resume_config.url, "_blank");
	};
	const getLatestDescription = (item, type) => {
		if (type === "project") return item[`description_${language}`] || item.description_en || item.description_pt || "";
		else return item[`review_${language}`] || item.review_en || item.review_pt || "";
	};
	const getLatestTitle = (item) => {
		if (language === "ko" && item.title_ko) return item.title_ko;
		return item.title;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex-1 flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 space-y-8 animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl md:text-7xl font-bold tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("bg-clip-text text-transparent bg-gradient-to-r", gradient),
							children: t.home.hero_title
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl md:text-2xl text-muted-foreground leading-relaxed",
						children: t.home.hero_subtitle
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						asChild: true,
						className: "rounded-full px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-2 h-4 w-4" }), t.home.cta]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						className: "rounded-full px-8",
						onClick: handleDownloadResume,
						disabled: !settings.resume_config?.url,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), t.home.resume_btn]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container px-4 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/it",
							className: "group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 flex flex-col items-center text-center space-y-4 h-full justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "h-8 w-8" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-lg",
										children: t.home.cards.it
									})]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/music",
							className: "group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 flex flex-col items-center text-center space-y-4 h-full justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-8 w-8" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-lg",
										children: t.home.cards.music
									})]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/books",
							className: "group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 flex flex-col items-center text-center space-y-4 h-full justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-8 w-8" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-lg",
										children: t.home.cards.books
									})]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group-hover:-translate-y-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 flex flex-col items-center text-center space-y-4 h-full justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-8 w-8" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-lg",
										children: t.home.cards.about
									})]
								})
							})
						})
					]
				})
			}),
			latest && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container px-4 pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: t.home.latest
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: latest.type === "project" ? "/it" : "/books",
							children: [
								t.home.explore,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "overflow-hidden hover:shadow-md transition-shadow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:w-1/3 h-64 md:h-auto relative",
							children: latest.item.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: latest.item.image_url,
								alt: latest.item.title,
								className: "absolute inset-0 w-full h-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 w-full h-full bg-muted flex items-center justify-center",
								children: latest.type === "project" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "h-12 w-12 text-muted-foreground/50" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-12 w-12 text-muted-foreground/50" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 md:w-2/3 flex flex-col justify-center space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium text-primary uppercase tracking-wider",
									children: latest.type === "project" ? t.nav.projects : t.nav.books
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold",
									children: getLatestTitle(latest.item)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground line-clamp-2",
									children: getLatestDescription(latest.item, latest.type)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "w-fit",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: latest.type === "project" ? "/it" : "/books",
										children: t.home.explore
									})
								})
							]
						})]
					})
				})]
			})
		]
	});
}
export { Index as default };

//# sourceMappingURL=Index-2Y8IWb9a.js.map