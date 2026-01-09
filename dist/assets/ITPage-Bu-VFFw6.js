import { A as require_react, a as useLanguage, d as Github, f as createLucideIcon, j as __toESM, n as Button, t as Skeleton, x as require_jsx_runtime } from "./index-D3SFnwNh.js";
import { a as CardFooter, i as CardDescription, n as Card, o as CardHeader, r as CardContent, s as CardTitle, t as useSEO } from "./use-seo-CszuZLRy.js";
import { t as Badge } from "./badge-CEIxqgCh.js";
import { i as getProjects } from "./database-BUdGOmQT.js";
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
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ITPage() {
	const { t, language } = useLanguage();
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: `${t.projects.title} - Portfolio`,
		description: t.projects.description
	});
	(0, import_react.useEffect)(() => {
		const fetchProjects = async () => {
			try {
				const { data, error } = await getProjects();
				if (data) setProjects(data);
			} catch (err) {
				console.error("Failed to fetch projects", err);
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, []);
	const getDescription = (project) => {
		return project[`description_${language}`] || project.description_en || "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-8 max-w-6xl space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 text-center md:text-left animate-fade-in-down",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-bold tracking-tight",
				children: t.projects.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-muted-foreground max-w-2xl",
				children: t.projects.description
			})]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: [
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 w-full rounded-xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-2/3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" })
				]
			}, i))
		}) : projects.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-col overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in-up",
				style: { animationDelay: `${index * 100}ms` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-video overflow-hidden bg-muted",
						children: project.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image_url,
							alt: project.title,
							className: "object-cover w-full h-full transition-transform duration-500 hover:scale-105"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-full flex items-center justify-center bg-muted/50 text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-12 w-12 opacity-20" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "line-clamp-1",
						children: project.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 mt-2",
						children: project.tech_stack?.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "text-xs",
							children: tech
						}, tech))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "line-clamp-3",
							children: getDescription(project)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
						className: "flex gap-2 pt-0",
						children: [project.demo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "flex-1",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.demo_url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-2 h-4 w-4" }), t.projects.view_demo]
							})
						}), project.github_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "flex-1",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.github_url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-2 h-4 w-4" }), t.projects.view_code]
							})
						})]
					})
				]
			}, project.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-20 bg-muted/20 rounded-xl border border-dashed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t.projects.no_projects
			})]
		})]
	});
}
export { ITPage as default };

//# sourceMappingURL=ITPage-Bu-VFFw6.js.map