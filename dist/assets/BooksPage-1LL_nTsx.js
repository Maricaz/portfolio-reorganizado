import { n as ChevronDown, t as ChevronUp } from "./chevron-up-CjwFVf5s.js";
import { Ct as __toESM, P as cn, St as require_react, X as BookOpen, Z as createLucideIcon, dt as require_jsx_runtime, m as Button, t as Skeleton, w as useAnalytics, y as useLanguage } from "./index-BSQDXmof.js";
import { t as useSEO } from "./use-seo-DQqLjzl1.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-BhLl2tO9.js";
import { i as getBooks } from "./books-dmMCjOkN.js";
var Globe = createLucideIcon("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
var PenTool = createLucideIcon("pen-tool", [
	["path", {
		d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
		key: "nt11vn"
	}],
	["path", {
		d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
		key: "15qc1e"
	}],
	["path", {
		d: "m2.3 2.3 7.286 7.286",
		key: "1wuzzi"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "2",
		key: "xmgehs"
	}]
]);
var Quote = createLucideIcon("quote", [["path", {
	d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "rib7q0"
}], ["path", {
	d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "1ymkrd"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				className: "pb-2 space-y-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-xl leading-tight line-clamp-2 font-bold font-serif tracking-tight",
						title: book.title,
						children: book.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary/80 line-clamp-1",
						children: book.author
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "flex-1 pt-0 flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 opacity-70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3 w-3" }), " Original"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium truncate",
								title: book.original_title || "—",
								children: book.original_title || "—"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 opacity-70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenTool, { className: "h-3 w-3" }),
									" ",
									book.language_code === "pt" ? "Tradução" : "Translation"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium truncate",
								title: book.translation || "—",
								children: book.translation || "—"
							})]
						})]
					}),
					book.curation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative pl-3 border-l-2 border-primary/30 italic text-sm text-muted-foreground/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-3 w-3 absolute -top-1 -left-4 text-primary/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "line-clamp-3 leading-relaxed",
							children: [
								"\"",
								book.curation,
								"\""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("text-sm text-muted-foreground relative transition-all duration-300 overflow-hidden", isExpanded ? "max-h-[500px]" : "max-h-[60px]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "whitespace-pre-line leading-relaxed text-xs",
								children: book.synopsis || "No synopsis available."
							}), !isExpanded && book.synopsis && book.synopsis.length > 80 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-card to-transparent" })]
						}), book.synopsis && book.synopsis.length > 50 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: toggleSynopsis,
							className: "w-full flex items-center justify-center gap-1 text-[10px] font-medium text-primary hover:text-primary/80 h-6",
							children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3 w-3" }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" }) })
						})]
					})
				]
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
				const data = await getBooks(language);
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
		className: "container mx-auto px-4 py-8 max-w-7xl space-y-12 min-h-[80vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 animate-fade-in-down text-center max-w-3xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-8 w-8 text-primary" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl font-bold tracking-tight font-serif",
					children: t.books.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted-foreground leading-relaxed",
					children: t.books.description
				})
			]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
			children: [
				1,
				2,
				3,
				4
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-[2/3] w-full rounded-xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-3/4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full" })
				]
			}, i))
		}) : books.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
			children: books.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCard, {
				book,
				trackToggle: trackBookSynopsisToggle
			}, book.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-20 bg-muted/20 rounded-xl border border-dashed border-primary/20 max-w-md mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground font-medium",
				children: t.books.no_books
			})]
		})]
	});
}
export { BooksPage as default };

//# sourceMappingURL=BooksPage-1LL_nTsx.js.map