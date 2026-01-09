import { t as BookOpen } from "./book-open-Bj7S_AqJ.js";
import { N as require_react, P as __toESM, T as require_jsx_runtime, c as useAnalytics, d as slugify, g as createLucideIcon, o as useLanguage, s as supabase, t as Skeleton } from "./index-C-k0zUEW.js";
import { a as CardTitle, i as CardHeader, n as CardContent, o as useSEO, t as Card } from "./card-CdZOsjwd.js";
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const getBooks = async () => {
	return await supabase.from("books").select("*").order("created_at", { ascending: false }).returns();
};
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function BooksPage() {
	const { t } = useLanguage();
	const { trackEvent } = useAnalytics();
	const [books, setBooks] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: "Curadoria de Livros — Mariana Azevedo",
		description: "Leituras que moldam a sensibilidade."
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
	const trackBookSynopsisToggle = (bookTitle, isOpen) => {
		trackEvent("book_synopsis_toggle", {
			book: bookTitle,
			state: isOpen ? "open" : "closed"
		});
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
								alt: book.title,
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
								title: book.title,
								children: book.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground line-clamp-1",
								children: book.author
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							className: "flex-1 pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group/details",
								onToggle: (e) => {
									const target = e.target;
									trackBookSynopsisToggle(book.title, target.open);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "cursor-pointer list-none flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.books.seeSynopsis }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 transition-transform duration-300 group-open/details:rotate-180" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-sm text-muted-foreground leading-relaxed animate-accordion-down overflow-hidden",
									children: book.synopsis || book.review_pt || "No synopsis available."
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

//# sourceMappingURL=BooksPage-Cw6FPb-I.js.map