import { t as ArrowRight } from "./arrow-right-gmJS9PuR.js";
import { n as Calendar, t as getSiteSettings } from "./settings-Bd7AUpBi.js";
import { t as CodeXml } from "./code-xml-CQiJkpSn.js";
import { Ct as __toESM, L as User, St as require_react, X as BookOpen, Y as Code, dt as require_jsx_runtime, gt as Link, m as Button, t as Skeleton, w as useAnalytics, y as useLanguage, z as Music } from "./index-CwSGJ-86.js";
import { t as useSEO } from "./use-seo-D3qyehGg.js";
import { n as CardContent, t as Card } from "./card-DiJIHrLf.js";
import { t as getITProjects } from "./it-projects-BPOpGJ8t.js";
import { t as Badge } from "./badge-B06CbqiK.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
const LatestItem = () => {
	const { t, language } = useLanguage();
	const [project, setProject] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const fetchLatest = async () => {
			try {
				const { data } = await getITProjects();
				if (data && data.length > 0) setProject(data[0]);
			} catch (error) {
				console.error("Failed to fetch latest project", error);
			} finally {
				setLoading(false);
			}
		};
		fetchLatest();
	}, []);
	const getLocalizedDescription = (project$1) => {
		if (language === "pt") return project$1.description_pt;
		if (language === "en") return project$1.description_en;
		if (language === "ko") return project$1.description_ko;
		return project$1.description_en || "";
	};
	const getLocalizedTitle = (project$1) => {
		if (language === "ko" && project$1.title_ko) return project$1.title_ko;
		return project$1.title;
	};
	project?.demo_url || project?.link;
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row h-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "w-full md:w-2/5 h-48 md:h-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 md:p-8 flex-1 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-3/4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-32" })
					]
				})]
			})
		})
	});
	if (!project) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "overflow-hidden group hover:shadow-xl transition-all duration-300 border-primary/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden bg-muted",
					children: [project.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image_url,
						alt: getLocalizedTitle(project),
						className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-full flex items-center justify-center text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-12 w-12 opacity-20" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-4 left-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "bg-background/80 backdrop-blur text-foreground hover:bg-background/90",
							children: t.home.latest
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 p-6 md:p-8 flex flex-col justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(project.created_at).toLocaleDateString() }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "text-xs font-normal",
										children: project.category
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors",
								children: getLocalizedTitle(project)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none",
							children: getLocalizedDescription(project)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "group/btn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/it",
									children: [t.it.view_project, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" })]
								})
							})
						})
					]
				})]
			})
		})
	});
};
function Index() {
	const { t } = useLanguage();
	const { trackEvent } = useAnalytics();
	const [heroImage, setHeroImage] = (0, import_react.useState)("https://img.usecurling.com/ppl/large?gender=female&seed=mari");
	useSEO({
		title: t.home.hero_title,
		description: t.home.hero_subtitle
	});
	(0, import_react.useEffect)(() => {
		const fetchSettings = async () => {
			try {
				const settings = await getSiteSettings();
				if (settings.home_hero_image) setHeroImage(settings.home_hero_image);
			} catch (error) {
				console.error("Failed to fetch hero image settings", error);
			}
		};
		fetchSettings();
	}, []);
	const cards = [
		{
			title: t.home.cards.it,
			icon: Code,
			link: "/it",
			color: "text-blue-500",
			bg: "bg-blue-500/10"
		},
		{
			title: t.home.cards.music,
			icon: Music,
			link: "/music",
			color: "text-purple-500",
			bg: "bg-purple-500/10"
		},
		{
			title: t.home.cards.books,
			icon: BookOpen,
			link: "/books",
			color: "text-amber-500",
			bg: "bg-amber-500/10"
		},
		{
			title: t.home.cards.about,
			icon: User,
			link: "/about",
			color: "text-green-500",
			bg: "bg-green-500/10"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-16 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col-reverse md:flex-row items-center gap-12 animate-fade-in-down",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-6 text-center md:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60",
							children: t.home.hero_title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl",
							children: t.home.hero_subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-center md:justify-start gap-4 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								className: "rounded-full px-8 shadow-lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: t.home.cta
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "lg",
								className: "rounded-full px-8",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/resume",
									children: t.nav.resume
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 flex justify-center md:justify-end animate-float",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: heroImage,
							alt: "Mariana Azevedo",
							className: "w-full h-full object-cover",
							loading: "eager"
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up",
				children: cards.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: card.link,
					onClick: () => trackEvent("nav_click", { link: card.link }),
					className: "group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "h-full hover:shadow-xl transition-all duration-300 border-primary/5 hover:border-primary/20 hover:-translate-y-1 bg-card/50 backdrop-blur-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "flex flex-col items-center justify-center p-8 gap-4 text-center h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `p-4 rounded-2xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, { className: "w-8 h-8" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold group-hover:text-primary transition-colors",
								children: card.title
							})]
						})
					})
				}, card.link))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-8 animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold",
						children: t.home.latest
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/it",
							children: [t.home.explore, " →"]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestItem, {})]
			})
		]
	});
}
export { Index as default };

//# sourceMappingURL=Index-C3lNxn9P.js.map