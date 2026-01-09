import { t as ArrowRight } from "./arrow-right-CzTaiPdT.js";
import { A as Code, G as Link, O as Music, V as require_jsx_runtime, X as __toESM, Y as require_react, j as createLucideIcon, o as useLanguage, s as Skeleton, v as Button } from "./index-5XTFupmN.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-CtO5ik88.js";
import { t as useSEO } from "./use-seo-BL1sjDwA.js";
import { n as getLatestItem } from "./database-BEo7tORy.js";
var Book = createLucideIcon("book", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var Typewriter = ({ texts }) => {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [subIndex, setSubIndex] = (0, import_react.useState)(0);
	const [reverse, setReverse] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (subIndex === texts[index].length + 1 && !reverse) {
			setTimeout(() => setReverse(true), 1e3);
			return;
		}
		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => (prev + 1) % texts.length);
			return;
		}
		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, reverse ? 75 : 150);
		return () => clearTimeout(timeout);
	}, [
		subIndex,
		index,
		reverse,
		texts
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "border-r-2 border-primary pr-1 animate-pulse",
		children: texts[index].substring(0, subIndex)
	});
};
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
	const roles = [
		t.home.role_1,
		t.home.role_2,
		t.home.role_3
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[60vh] flex flex-col justify-center items-start text-left space-y-6 max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[url('https://img.usecurling.com/p/1200/800?q=abstract%20art&color=blue')] bg-cover bg-center opacity-10 blur-3xl rounded-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-7xl font-bold tracking-tight",
						children: ["Hello, I'm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Dev"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl md:text-4xl font-light text-muted-foreground h-12",
						children: ["I am a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typewriter, { texts: roles })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								children: [
									t.nav.contact,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								children: t.nav.about
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/it",
						className: "group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "h-8 w-8 text-primary mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: t.nav.it })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground text-sm",
								children: [t.home.quick_nav, " - IT"]
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/music",
						className: "group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-8 w-8 text-primary mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: t.nav.music })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground text-sm",
								children: [t.home.quick_nav, " - Music"]
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/books",
						className: "group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "h-full hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, { className: "h-8 w-8 text-primary mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: t.nav.books })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground text-sm",
								children: [t.home.quick_nav, " - Books"]
							}) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-muted/30 p-8 rounded-2xl border border-border/50 animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-xl font-bold mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-green-500 animate-pulse" }), t.home.latest_update]
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-1/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-2/3" })]
				}) : latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-6 items-start md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: latest.item.image_url,
						alt: latest.item.title,
						className: "w-full md:w-32 h-32 object-cover rounded-lg shadow-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded",
							children: latest.type === "project" ? "Project" : "Book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-2xl font-bold mt-2",
							children: latest.item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1 max-w-2xl line-clamp-2",
							children: latest.type === "project" ? latest.item[`description_${language}`] : latest.item[`review_${language}`]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "link",
							className: "px-0 mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: latest.type === "project" ? "/it" : "/books",
								children: [
									t.home.view_project,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3 w-3" })
								]
							})
						})
					] })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "No updates found."
				})]
			})
		]
	});
}
export { Index as default };

//# sourceMappingURL=Index-BHNpNISh.js.map