import { A as Github, E as X, H as require_jsx_runtime, M as createLucideIcon, Q as __toESM, T as cn, Z as require_react, a as Overlay, c as Title, i as Description, l as Trigger, m as Button, n as Close, o as Portal, r as Content, s as Root, t as Skeleton, v as useLanguage } from "./index-BvwkRJRs.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, t as Card } from "./card-6MhxgsR0.js";
import { t as Badge } from "./badge-CPBL9Sbw.js";
import { t as useSEO } from "./use-seo-BIaJr0en.js";
import { i as getProjects } from "./database-DQO5v4G_.js";
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
var Dialog = Root;
var DialogTrigger = Trigger;
var DialogPortal = Portal;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-y-auto max-h-screen", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = Title.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = Description.displayName;
function ITPage() {
	const { t, language } = useLanguage();
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: t.it.title,
		description: "My technical projects and portfolio"
	});
	(0, import_react.useEffect)(() => {
		getProjects().then(({ data }) => {
			if (data) setProjects(data);
			setLoading(false);
		});
	}, []);
	const getDescription = (project) => {
		return project[`description_${language}`] || project.description_en || project.description_pt || "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-bold border-b pb-4",
			children: t.it.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
			children: loading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 w-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-3/4" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }) })
				]
			}, i)) : projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "group hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden border-border/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-48 overflow-hidden bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image_url,
							alt: project.title,
							className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "text-white border-white hover:bg-white hover:text-black",
									children: t.it.view_project
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "line-clamp-1 text-xl",
						children: project.title
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed",
							children: getDescription(project)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1.5",
							children: [project.tech_stack?.slice(0, 4).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "font-mono text-[10px] px-2",
								children: tag
							}, tag)), project.tech_stack?.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "text-[10px] px-2",
								children: ["+", project.tech_stack.length - 4]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
						className: "pt-0 flex gap-2",
						children: [project.demo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							className: "flex-1 gap-2",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.demo_url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " Demo"]
							})
						}), project.github_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							className: "flex-1 gap-2",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.github_url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), " Code"]
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-2xl",
					children: project.title
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-6 mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-video rounded-lg overflow-hidden bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image_url,
							alt: project.title,
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "text-base text-foreground leading-relaxed whitespace-pre-line",
								children: getDescription(project)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3",
								children: t.it.tech_stack
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: project.tech_stack?.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									className: "text-sm py-1 px-3",
									children: tag
								}, tag))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [project.demo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "flex-1",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.demo_url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-2 h-4 w-4" }), " Visit Demo"]
									})
								}), project.github_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "flex-1",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.github_url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-2 h-4 w-4" }), " View Code"]
									})
								})]
							})
						]
					})]
				})]
			})] }, project.id))
		})]
	});
}
export { ITPage as default };

//# sourceMappingURL=ITPage-F1-C7jIT.js.map