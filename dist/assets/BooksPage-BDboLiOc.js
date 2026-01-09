import { t as BookOpen } from "./book-open-DBMnJxCc.js";
import { M as require_react, N as __toESM, c as useAnalytics, h as createLucideIcon, o as useLanguage, r as Button, s as supabase, t as Skeleton, u as cn, w as require_jsx_runtime } from "./index-C4BVOJOy.js";
import { t as useSEO } from "./use-seo-Cq0jE1x8.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CQ6s8KJd.js";
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
var ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const getBooks = async (language) => {
	return await supabase.from("books").select("*").eq("language", language).order("created_at", { ascending: false }).returns();
};
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function BookCard({ book, trackToggle }) {
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const { t } = useLanguage();
	const toggleSynopsis = () => {
		const newState = !isExpanded;
		setIsExpanded(newState);
		trackToggle(book.title, newState ? "open" : "closed");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "overflow-hidden glass-soft border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col group animate-fade-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[2/3] relative overflow-hidden bg-muted/30",
				children: book.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: book.image_url,
					alt: book.title,
					loading: "lazy",
					className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full h-full flex flex-col items-center justify-center bg-muted/50 text-muted-foreground p-4 text-center space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-12 w-12 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs opacity-50",
						children: t.books.title
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "pb-2 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-lg leading-tight line-clamp-2",
					title: book.title,
					children: book.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground line-clamp-1",
					children: book.author
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "flex-1 pt-2 flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("text-sm text-muted-foreground relative transition-all duration-300 overflow-hidden", isExpanded ? "max-h-[500px]" : "max-h-[80px]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-line leading-relaxed",
						children: book.synopsis || "No synopsis available."
					}), !isExpanded && book.synopsis && book.synopsis.length > 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-card to-transparent" })]
				}), book.synopsis && book.synopsis.length > 50 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: toggleSynopsis,
					className: "mt-2 w-full flex items-center justify-center gap-1 text-xs font-medium text-primary hover:text-primary/80 hover:bg-primary/5",
					children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Show Less ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3 w-3" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Read Synopsis ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })] })
				})]
			})
		]
	});
}
function BooksPage() {
	const { t, language } = useLanguage();
	const { trackBookSynopsisToggle } = useAnalytics();
	const [books, setBooks] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: `${t.books.title} — Mariana Azevedo`,
		description: t.books.description
	});
	(0, import_react.useEffect)(() => {
		const fetchBooks = async () => {
			setLoading(true);
			try {
				const { data } = await getBooks(language);
				if (data) setBooks(data);
				else setBooks([]);
			} catch (err) {
				console.error("Failed to fetch books", err);
			} finally {
				setLoading(false);
			}
		};
		fetchBooks();
	}, [language]);
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-[2/3] w-full rounded-xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-3/4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2" })
				]
			}, i))
		}) : books.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-auto-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
			children: books.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCard, {
				book,
				trackToggle: trackBookSynopsisToggle
			}, book.id))
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

//# sourceMappingURL=BooksPage-BDboLiOc.js.map