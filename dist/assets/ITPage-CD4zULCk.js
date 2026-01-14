import { t as CodeXml } from "./code-xml-CNS1Tf6P.js";
import { t as ExternalLink } from "./external-link-f0df7Gi8.js";
import { A as useAnalytics, It as __toESM, Nt as require_react, T as useLanguage, at as createLucideIcon, r as Skeleton, tt as Github, v as Button, xt as require_jsx_runtime } from "./index-q_3lYq-G.js";
import { t as useSEO } from "./use-seo-ClJYTv5C.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-dBzdFOfB.js";
import { t as getITProjects } from "./it-projects-DZAh8x45.js";
import { t as Badge } from "./badge-TVEGC7Ci.js";
var Cpu = createLucideIcon("cpu", [
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M17 20v2",
		key: "1rnc9c"
	}],
	["path", {
		d: "M17 2v2",
		key: "11trls"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M2 17h2",
		key: "7oei6x"
	}],
	["path", {
		d: "M2 7h2",
		key: "asdhe0"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "M20 17h2",
		key: "1fpfkl"
	}],
	["path", {
		d: "M20 7h2",
		key: "1o8tra"
	}],
	["path", {
		d: "M7 20v2",
		key: "4gnj0m"
	}],
	["path", {
		d: "M7 2v2",
		key: "1i4yhu"
	}],
	["rect", {
		x: "4",
		y: "4",
		width: "16",
		height: "16",
		rx: "2",
		key: "1vbyd7"
	}],
	["rect", {
		x: "8",
		y: "8",
		width: "8",
		height: "8",
		rx: "1",
		key: "z9xiuo"
	}]
]);
var Funnel = createLucideIcon("funnel", [["path", {
	d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
	key: "sc7q7i"
}]]);
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ITPage() {
	const { t, language } = useLanguage();
	const { trackProjectOpen, trackEvent } = useAnalytics();
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [selectedTech, setSelectedTech] = (0, import_react.useState)("All");
	useSEO({
		title: `${t.projects.title} — Mariana Azevedo`,
		description: t.projects.description
	});
	(0, import_react.useEffect)(() => {
		const fetchProjects = async () => {
			try {
				const { data, error } = await getITProjects();
				if (data) setProjects(data);
				if (error) console.error("Failed to fetch IT projects", error);
			} catch (err) {
				console.error("Failed to fetch IT projects", err);
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, []);
	const categories = (0, import_react.useMemo)(() => {
		const cats = new Set(projects.map((p) => p.category || "Other"));
		return ["All", ...Array.from(cats)];
	}, [projects]);
	const technologies = (0, import_react.useMemo)(() => {
		const techs = /* @__PURE__ */ new Set();
		projects.forEach((p) => {
			p.tags?.forEach((tag) => techs.add(tag));
		});
		return ["All", ...Array.from(techs).sort()];
	}, [projects]);
	const filteredProjects = (0, import_react.useMemo)(() => {
		return projects.filter((project) => {
			const categoryMatch = selectedCategory === "All" || (project.category || "Other") === selectedCategory;
			const techMatch = selectedTech === "All" || project.tags && project.tags.includes(selectedTech);
			return categoryMatch && techMatch;
		});
	}, [
		projects,
		selectedCategory,
		selectedTech
	]);
	const getDescription = (project) => {
		if (language === "pt") return project.description_pt;
		if (language === "en") return project.description_en;
		if (language === "ko") return project.description_ko;
		return project.description_en || "";
	};
	const getTitle = (project) => {
		if (language === "ko" && project.title_ko) return project.title_ko;
		return project.title;
	};
	const handleProjectClick = (title, link) => {
		trackProjectOpen(title, link);
	};
	const handleFilterChange = (type, value) => {
		if (type === "category") setSelectedCategory(value);
		else setSelectedTech(value);
		trackEvent("filter_projects", {
			type,
			value
		});
	};
	const getProjectLink = (project) => {
		return project.demo_url || project.link;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-12 md:py-16 max-w-7xl space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center space-y-4 animate-fade-in-down",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 bg-primary/10 rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-10 h-10 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl md:text-5xl font-bold tracking-tight",
						children: t.projects.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground max-w-2xl",
						children: t.projects.description
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row gap-6 justify-center items-start md:items-center bg-muted/20 p-6 rounded-2xl animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 w-full md:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4" }),
								" ",
								t.projects.filter_category
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: selectedCategory === cat ? "default" : "outline",
								size: "sm",
								onClick: () => handleFilterChange("category", cat),
								className: "rounded-full text-xs",
								children: cat === "All" ? t.projects.filter_all : cat
							}, cat))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block w-px h-12 bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 w-full md:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" }),
								" ",
								t.projects.filter_tech
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [technologies.slice(0, 8).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: selectedTech === tech ? "default" : "outline",
								size: "sm",
								onClick: () => handleFilterChange("tech", tech),
								className: "rounded-full text-xs",
								children: tech === "All" ? t.projects.filter_all : tech
							}, tech)), technologies.length > 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-8 rounded-full border border-input bg-transparent px-3 py-1 text-xs shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
								value: selectedTech,
								onChange: (e) => handleFilterChange("tech", e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "All",
									children: "More..."
								}), technologies.slice(8).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: tech,
									children: tech
								}, tech))]
							})]
						})]
					})
				]
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: [
					1,
					2,
					3,
					4,
					5,
					6
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-64 w-full rounded-xl" })
				}, i))
			}) : filteredProjects.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr",
				children: filteredProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-primary/10 hover:border-primary/50 animate-fade-in-up group bg-card/50 backdrop-blur-sm",
					style: { animationDelay: `${index * 50}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-48 overflow-hidden rounded-t-xl bg-muted",
							children: [project.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image_url,
								alt: getTitle(project),
								loading: "lazy",
								className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full h-full flex items-center justify-center bg-muted/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-12 w-12 text-muted-foreground/30" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-2 right-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "backdrop-blur-md bg-background/80",
									children: project.category
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-xl line-clamp-2 group-hover:text-primary transition-colors",
							children: getTitle(project)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2 mt-2",
							children: [project.tags?.slice(0, 4).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] font-normal rounded-md border-primary/20 bg-primary/5 px-2",
								children: tech
							}, tech)), project.tags && project.tags.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "text-[10px] px-1",
								children: ["+", project.tags.length - 4]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "flex-1 flex flex-col justify-between gap-6 pt-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm leading-relaxed line-clamp-4",
								children: getDescription(project)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 mt-auto",
								children: [getProjectLink(project) && getProjectLink(project) !== "#" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "default",
									size: "sm",
									className: "flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
									asChild: true,
									onClick: () => handleProjectClick(getTitle(project), getProjectLink(project)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: getProjectLink(project),
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-2 h-3 w-3" }), t.projects.view_demo]
									})
								}), project.github_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: "flex-1",
									asChild: true,
									onClick: () => handleProjectClick(getTitle(project), project.github_url),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.github_url,
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-2 h-3 w-3" }), t.projects.view_code]
									})
								})]
							})]
						})
					]
				}, project.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-20 bg-muted/20 rounded-xl border border-dashed animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: t.projects.no_projects
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "link",
						onClick: () => {
							setSelectedCategory("All");
							setSelectedTech("All");
						},
						children: "Clear filters"
					})
				]
			})
		]
	});
}
export { ITPage as default };

//# sourceMappingURL=ITPage-CD4zULCk.js.map