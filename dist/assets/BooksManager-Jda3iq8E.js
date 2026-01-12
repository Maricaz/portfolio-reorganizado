import { t as ExportButton } from "./ExportButton-CYjzrkWw.js";
import { t as Image } from "./image-BCWCaRda.js";
import { t as Pencil } from "./pencil-CMfr5cEu.js";
import { t as Plus } from "./plus-BwGeaCTg.js";
import { t as Search } from "./search-QvKUTLj3.js";
import { t as Trash } from "./trash-Cel5R4cl.js";
import { Mt as __toESM, _t as require_jsx_runtime, g as Button, kt as require_react, xt as useToast } from "./index-B6XaT7BC.js";
import { a as updateBook, n as deleteBook, r as getAllBooks, t as createBook } from "./books-CfTy-IAQ.js";
import { a as FormItem, c as ZodNumber, d as string, f as a, i as FormField, l as _enum, m as useForm, n as FormControl, o as FormLabel, p as _coercedNumber, s as FormMessage, t as Form, u as object } from "./form-B4sSnhDw.js";
import { n as Input } from "./label-CNPGrKA1.js";
import { t as Textarea } from "./textarea-sYjQFoVY.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-D2jQlU_S.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./dialog-DxTB_XFL.js";
import { t as uploadFile } from "./storage-BRgDZqW1.js";
function number(params) {
	return _coercedNumber(ZodNumber, params);
}
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var bookSchema = object({
	title: string().min(1, "Title is required"),
	author: string().min(1, "Author is required"),
	category: string().optional(),
	language_code: _enum([
		"pt",
		"en",
		"ko"
	]),
	rating: number().min(1).max(5).optional(),
	synopsis: string().optional(),
	curation: string().optional(),
	original_title: string().optional(),
	image_url: string().optional()
});
function BooksManager() {
	const [books, setBooks] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [search, setSearch] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const { toast } = useToast();
	const form = useForm({
		resolver: a(bookSchema),
		defaultValues: {
			title: "",
			author: "",
			category: "",
			language_code: "pt",
			rating: 5,
			synopsis: "",
			curation: "",
			original_title: "",
			image_url: ""
		}
	});
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
	const handleEdit = (book) => {
		setEditingId(book.id);
		form.reset({
			title: book.title,
			author: book.author,
			category: book.category || "",
			language_code: book.language_code,
			rating: book.rating || 5,
			synopsis: book.synopsis || "",
			curation: book.curation || "",
			original_title: book.original_title || "",
			image_url: book.image_url || ""
		});
		setIsOpen(true);
	};
	const handleAddNew = () => {
		setEditingId(null);
		form.reset({
			title: "",
			author: "",
			category: "",
			language_code: "pt",
			rating: 5,
			synopsis: "",
			curation: "",
			original_title: "",
			image_url: ""
		});
		setIsOpen(true);
	};
	const handleImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		try {
			setUploading(true);
			const url = await uploadFile(file, "portfolio-media", "books");
			form.setValue("image_url", url);
			toast({
				title: "Success",
				description: "Image uploaded successfully"
			});
		} catch (error) {
			toast({
				title: "Upload Error",
				description: "Failed to upload image",
				variant: "destructive"
			});
		} finally {
			setUploading(false);
		}
	};
	const onSubmit = async (values) => {
		try {
			if (editingId) {
				await updateBook(editingId, values);
				toast({
					title: "Success",
					description: "Book updated"
				});
			} else {
				await createBook(values);
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold",
						children: "Books Manager"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Manage your reading list."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, {
						data: books,
						filename: "books_export"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open: isOpen,
						onOpenChange: setIsOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleAddNew,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Book"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "max-w-2xl max-h-[90vh] overflow-y-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingId ? "Edit Book" : "Add Book" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
								...form,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: form.handleSubmit(onSubmit),
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
													control: form.control,
													name: "title",
													render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Title" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
													] })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
													control: form.control,
													name: "author",
													render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Author" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
													] })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
													control: form.control,
													name: "category",
													render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Category" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
													] })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
													control: form.control,
													name: "language_code",
													render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Language" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
															...field,
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "pt",
																	children: "Portuguese"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "en",
																	children: "English"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "ko",
																	children: "Korean"
																})
															]
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
													] })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
													control: form.control,
													name: "rating",
													render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Rating (1-5)" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															type: "number",
															min: "1",
															max: "5",
															...field
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
													] })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
													control: form.control,
													name: "original_title",
													render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Original Title" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
													] })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Cover Image" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-4 items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														type: "file",
														accept: "image/*",
														onChange: handleImageUpload,
														disabled: uploading
													}), form.watch("image_url") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "relative h-16 w-12 border rounded overflow-hidden",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: form.watch("image_url"),
															alt: "Preview",
															className: "h-full w-full object-cover"
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
													control: form.control,
													name: "image_url",
													render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														placeholder: "Or enter URL manually",
														...field
													}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})] })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
											control: form.control,
											name: "synopsis",
											render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Synopsis" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
													className: "h-24",
													...field
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
											] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
											control: form.control,
											name: "curation",
											render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Curation Note" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
													className: "h-24",
													...field
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
											] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											className: "w-full",
											disabled: uploading,
											children: uploading ? "Uploading Image..." : "Save Book"
										})
									]
								})
							})]
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Cover" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Title" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Author" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Lang" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredBooks.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: book.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: book.image_url,
						alt: book.title,
						className: "h-10 w-8 object-cover rounded"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-10 w-8 bg-muted rounded flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4 text-muted-foreground" })
					}) }),
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
							onClick: () => handleEdit(book),
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

//# sourceMappingURL=BooksManager-Jda3iq8E.js.map