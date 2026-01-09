import { t as BookOpen } from "./book-open-B19CHag7.js";
import { H as require_react, P as require_jsx_runtime, U as __toESM, a as Overlay, b as X, c as Title, d as Button, g as useAnalytics, h as supabase, i as Description, l as Trigger, m as useLanguage, n as Close, o as Portal, r as Content, s as Root, t as Skeleton, v as cn, y as slugify } from "./index-C8Bn1IEJ.js";
import { t as useSEO } from "./use-seo-CEkz_ngS.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-esJkR1OV.js";
import { t as ScrollArea } from "./scroll-area-B1cbez-b.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const getBooks = async () => {
	return await supabase.from("books").select("*").order("created_at", { ascending: false }).returns();
};
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
function BooksPage() {
	const { t, language } = useLanguage();
	const { trackBookSynopsisToggle } = useAnalytics();
	const [books, setBooks] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: `${t.books.title} — Mariana Azevedo`,
		description: t.books.description
	});
	const bookImages = (0, import_react.useMemo)(() => {
		return {};
	}, []);
	(0, import_react.useEffect)(() => {
		const fetchBooks = async () => {
			try {
				const { data } = await getBooks();
				if (data) setBooks(data);
			} catch (err) {
				console.error("Failed to fetch books", err);
			} finally {
				setLoading(false);
			}
		};
		fetchBooks();
	}, []);
	const getCoverImage = (title) => {
		const slug = slugify(title);
		const match = Object.entries(bookImages).find(([path]) => path.toLowerCase().includes(slug));
		return match ? match[1] : null;
	};
	const getTitle = (book) => {
		if (language === "ko" && book.title_ko) return book.title_ko;
		return book.title;
	};
	const getSynopsis = (book) => {
		if (language === "pt") return book.synopsis_pt || book.review_pt;
		if (language === "en") return book.synopsis_en || book.review_en;
		if (language === "ko") return book.synopsis_ko || book.review_ko;
		return book.synopsis_en || book.review_en;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-8 max-w-6xl space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 animate-fade-in-down",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-bold tracking-tight",
				children: t.books.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-muted-foreground max-w-2xl",
				children: t.books.description
			})]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
			children: [
				1,
				2,
				3,
				4
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-[3/4] w-full rounded-xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-3/4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2" })
				]
			}, i))
		}) : books.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-auto-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
			children: books.map((book, index) => {
				const coverUrl = getCoverImage(book.title);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "overflow-hidden glass-soft border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col animate-fade-in-up group",
					style: { animationDelay: `${index * 50}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[3/4] relative overflow-hidden bg-muted/30",
							children: coverUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: coverUrl,
								alt: getTitle(book),
								loading: "lazy",
								className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full h-full flex flex-col items-center justify-center bg-muted/50 text-muted-foreground p-4 text-center space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-12 w-12 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs opacity-50",
									children: t.books.seeSynopsis
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
							className: "pb-2 space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-lg leading-tight line-clamp-2",
								title: getTitle(book),
								children: getTitle(book)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground line-clamp-1",
								children: book.author
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							className: "flex-1 pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
								onOpenChange: (open) => trackBookSynopsisToggle(getTitle(book), open ? "open" : "closed"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										className: "w-full justify-start p-0 h-auto font-normal hover:bg-transparent hover:text-primary group/btn",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 text-sm font-medium text-primary group-hover/btn:text-primary/80 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.books.seeSynopsis }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" })]
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
									className: "sm:max-w-[500px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
										className: "text-2xl font-bold leading-tight",
										children: getTitle(book)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
										className: "text-base font-medium text-primary",
										children: book.author
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
										className: "max-h-[60vh] mt-4 pr-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-muted-foreground leading-relaxed text-base whitespace-pre-line",
											children: getSynopsis(book) || "No synopsis available."
										})
									})]
								})]
							})
						})
					]
				}, book.id);
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-20 bg-muted/20 rounded-xl border border-dashed border-primary/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t.projects.no_projects
			})]
		})]
	});
}
export { BooksPage as default };

//# sourceMappingURL=BooksPage-V3MtyUKz.js.map