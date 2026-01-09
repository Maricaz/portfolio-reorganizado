import { t as ArrowRight } from "./arrow-right-Cg61Wb8q.js";
import { D as Music, H as require_jsx_runtime, K as Link, M as createLucideIcon, Q as __toESM, Z as require_react, j as Code, m as Button, t as Skeleton, v as useLanguage } from "./index-BvwkRJRs.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-6MhxgsR0.js";
import { t as useSEO } from "./use-seo-BIaJr0en.js";
import { n as getLatestItem } from "./database-DQO5v4G_.js";
var Book = createLucideIcon("book", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function Index() {
	const { t, language } = useLanguage();
	const [latest, setLatest] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: t.nav.home,
		description: t.about.bio
	});
	(0, import_react.useEffect)(() => {
		getLatestItem().then((res) => {
			setLatest(res);
			setLoading(false);
		});
	}, []);
	const getLocalizedContent = (item, field, lang) => {
		return item[`${field}_${lang}`] || item[`${field}_en`] || item[`${field}_pt`];
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-16 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[60vh] flex flex-col justify-center items-center text-center space-y-8 max-w-4xl mx-auto py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight animate-fade-in-down bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70",
						children: t.home.hero_title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl md:text-3xl font-light text-muted-foreground animate-fade-in-up delay-100 max-w-2xl",
						children: t.home.hero_subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in delay-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-full h-14 px-8 text-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								children: [
									t.nav.contact,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-5 w-5" })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "rounded-full h-14 px-8 text-lg bg-background/50 backdrop-blur-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								children: t.home.explore
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/it",
						className: "group block h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-xl",
								children: t.nav.it
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: t.it.title
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/music",
						className: "group block h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-xl",
								children: t.nav.music
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: t.music.title
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/books",
						className: "group block h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, { className: "h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-xl",
								children: t.nav.books
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: t.books.title
							}) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-muted/30 p-8 rounded-3xl border border-border/50 animate-fade-in delay-500 hover:bg-muted/50 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-xl font-bold mb-8 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-3 w-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-green-500" })]
					}), t.home.latest]
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-1/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full" })]
				}) : latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-8 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full md:w-64 h-48 md:h-auto aspect-video md:aspect-auto shrink-0 overflow-hidden rounded-xl shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: latest.type === "project" ? latest.item.image_url : latest.item.cover_url,
							alt: latest.item.title,
							className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold font-mono text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full",
									children: latest.type === "project" ? "Project" : "Book"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: new Date(latest.item.created_at).toLocaleDateString()
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-3xl font-bold",
								children: latest.item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-lg leading-relaxed line-clamp-3",
								children: latest.type === "project" ? getLocalizedContent(latest.item, "description", language) : getLocalizedContent(latest.item, "review", language)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "link",
								className: "px-0 text-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: latest.type === "project" ? "/it" : "/books",
									children: [
										t.it.view_project,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })
									]
								})
							})
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground italic",
					children: "No updates found."
				})]
			})
		]
	});
}
export { Index as default };

//# sourceMappingURL=Index-Dt0y_7hf.js.map