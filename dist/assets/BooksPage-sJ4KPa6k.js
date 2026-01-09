import { t as Book } from "./book-bya8LgkV.js";
import { A as require_react, a as useLanguage, f as createLucideIcon, j as __toESM, t as Skeleton, x as require_jsx_runtime } from "./index-D3SFnwNh.js";
import { n as Card, o as CardHeader, r as CardContent, s as CardTitle, t as useSEO } from "./use-seo-CszuZLRy.js";
import { t as getBooks } from "./database-BUdGOmQT.js";
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function BooksPage() {
	const { t, language } = useLanguage();
	const [books, setBooks] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: `${t.books.title} - Portfolio`,
		description: t.books.description
	});
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
	const getReview = (book) => {
		return book[`review_${language}`] || book.review_en || "";
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-64 w-full rounded-xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-3/4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2" })
				]
			}, i))
		}) : books.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
			children: books.map((book, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col animate-fade-in-up",
				style: { animationDelay: `${index * 50}ms` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aspect-[2/3] relative overflow-hidden bg-muted group",
						children: [book.cover_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: book.cover_url,
							alt: book.title,
							className: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-full flex items-center justify-center bg-muted/50 text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, { className: "h-12 w-12 opacity-20" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-bold",
								children: [book.rating, "/5"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "pb-2",
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
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground line-clamp-4 italic",
							children: [
								"\"",
								getReview(book),
								"\""
							]
						})
					})
				]
			}, book.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-20 bg-muted/20 rounded-xl border border-dashed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, { className: "h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "No books found."
			})]
		})]
	});
}
export { BooksPage as default };

//# sourceMappingURL=BooksPage-sJ4KPa6k.js.map