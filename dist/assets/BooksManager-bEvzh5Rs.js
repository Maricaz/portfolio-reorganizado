import { a as DialogTrigger, c as Pencil, i as DialogTitle, n as DialogContent, o as Trash, r as DialogHeader, s as Plus, t as Dialog } from "./dialog-DLwiX4KB.js";
import { t as Search } from "./search-Cs465PU1.js";
import { G as require_jsx_runtime, J as useToast, d as Button, nt as __toESM, tt as require_react } from "./index-WvNcIOTU.js";
import { a as updateBook, n as deleteBook, r as getAllBooks, t as createBook } from "./books-CsD7Twv9.js";
import { t as Input } from "./input-DJVk3JqY.js";
import { t as Textarea } from "./textarea-BX8auOAZ.js";
import { t as Label } from "./label-CIoAEQ0g.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CIFWoc3Z.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function BooksManager() {
	const [books, setBooks] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingBook, setEditingBook] = (0, import_react.useState)(null);
	const [search, setSearch] = (0, import_react.useState)("");
	const { toast } = useToast();
	const loadBooks = async () => {
		try {
			setBooks(await getAllBooks() || []);
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to load books",
				variant: "destructive"
			});
		}
	};
	(0, import_react.useEffect)(() => {
		loadBooks();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingBook?.id) {
				await updateBook(editingBook.id, editingBook);
				toast({
					title: "Success",
					description: "Book updated"
				});
			} else {
				await createBook(editingBook);
				toast({
					title: "Success",
					description: "Book created"
				});
			}
			setIsOpen(false);
			loadBooks();
		} catch (error) {
			toast({
				title: "Error",
				description: "Operation failed",
				variant: "destructive"
			});
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Are you sure?")) return;
		try {
			await deleteBook(id);
			toast({
				title: "Success",
				description: "Book deleted"
			});
			loadBooks();
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to delete",
				variant: "destructive"
			});
		}
	};
	const filteredBooks = books.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Books Manager"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open: isOpen,
					onOpenChange: setIsOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => setEditingBook({}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Book"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-2xl max-h-[90vh] overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingBook?.id ? "Edit Book" : "Add Book" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: editingBook?.title || "",
												onChange: (e) => setEditingBook({
													...editingBook,
													title: e.target.value
												}),
												required: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Author" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: editingBook?.author || "",
												onChange: (e) => setEditingBook({
													...editingBook,
													author: e.target.value
												}),
												required: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: editingBook?.category || "",
												onChange: (e) => setEditingBook({
													...editingBook,
													category: e.target.value
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Language Code (pt/en/ko)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: editingBook?.language_code || "",
												onChange: (e) => setEditingBook({
													...editingBook,
													language_code: e.target.value
												}),
												required: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Image URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: editingBook?.image_url || "",
												onChange: (e) => setEditingBook({
													...editingBook,
													image_url: e.target.value
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Original Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: editingBook?.original_title || "",
												onChange: (e) => setEditingBook({
													...editingBook,
													original_title: e.target.value
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Synopsis" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: editingBook?.synopsis || "",
										onChange: (e) => setEditingBook({
											...editingBook,
											synopsis: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Curation Note" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: editingBook?.curation || "",
										onChange: (e) => setEditingBook({
											...editingBook,
											curation: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full",
									children: "Save"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search books...",
					className: "max-w-sm",
					value: search,
					onChange: (e) => setSearch(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border rounded-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Title" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Author" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Lang" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredBooks.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: book.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: book.author }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: book.language_code }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => {
								setEditingBook(book);
								setIsOpen(true);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "text-destructive",
							onClick: () => handleDelete(book.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
						})]
					})
				] }, book.id)) })] })
			})
		]
	});
}
export { BooksManager as default };

//# sourceMappingURL=BooksManager-bEvzh5Rs.js.map