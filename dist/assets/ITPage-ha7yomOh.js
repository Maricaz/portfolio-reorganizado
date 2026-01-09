import { t as CodeXml } from "./code-xml-B5it1FKV.js";
import { t as ExternalLink } from "./external-link-CXQFCuGb.js";
import { L as require_react, R as __toESM, b as createLucideIcon, c as useAnalytics, k as require_jsx_runtime, n as Button, o as useLanguage, s as supabase, t as Skeleton } from "./index-DN9yCVks.js";
import { t as useSEO } from "./use-seo-BSxSEp2T.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-B1udeWR3.js";
import { t as Badge } from "./badge-DfWwGJLJ.js";
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
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const getITProjects = async () => {
	return await supabase.from("it_projects").select("*").order("created_at", { ascending: false }).returns();
};
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ITPage() {
	const { t, language } = useLanguage();
	const { trackProjectOpen } = useAnalytics();
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-12 md:py-16 max-w-6xl space-y-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
		}) : projects.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr",
			children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-fade-in-up group",
				style: { animationDelay: `${index * 100}ms` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-xl line-clamp-2 group-hover:text-primary transition-colors",
					children: getTitle(project)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2 mt-2",
					children: project.tags?.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "text-xs font-normal rounded-full border-primary/20 bg-primary/5",
						children: tech
					}, tech))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex-1 flex flex-col justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm leading-relaxed line-clamp-4",
						children: getDescription(project)
					}), project.link && project.link !== "#" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "default",
						className: "w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
						asChild: true,
						onClick: () => handleProjectClick(getTitle(project), project.link),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.link,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-2 h-4 w-4" }), t.it.view_project || "Ver Projeto"]
						})
					})]
				})]
			}, project.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-20 bg-muted/20 rounded-xl border border-dashed animate-fade-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t.projects.no_projects
			})]
		})]
	});
}
export { ITPage as default };

//# sourceMappingURL=ITPage-ha7yomOh.js.map