import { t as Cpu } from "./cpu-B8LaW2dD.js";
import { C as require_jsx_runtime, M as require_react, N as __toESM, a as useLanguage, h as cva, l as cn, m as createLucideIcon, n as Button, o as supabase, s as useAnalytics, t as Skeleton } from "./index-EGupCy6-.js";
import { a as CardTitle, i as CardHeader, n as CardContent, o as useSEO, t as Card } from "./card-C2fW3bnl.js";
var CodeXml = createLucideIcon("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]);
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const getITProjects = async () => {
	return await supabase.from("it_projects").select("*").order("created_at", { ascending: false }).returns();
};
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function ITPage() {
	const { t, language } = useLanguage();
	const { trackITProjectClick } = useAnalytics();
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: "Projetos de TI — Mariana Azevedo",
		description: "Projetos"
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
		return project[`description_${language}`] || project.description_en || "";
	};
	const handleProjectClick = (title, link) => {
		trackITProjectClick(title, link);
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
					children: t.it.title
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
					children: project.title
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
						onClick: () => handleProjectClick(project.title, project.link),
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

//# sourceMappingURL=ITPage-Cxlgn1P3.js.map