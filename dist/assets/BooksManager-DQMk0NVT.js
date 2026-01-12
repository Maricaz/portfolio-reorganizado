import { t as ExportButton } from "./ExportButton-zSGrQ0WK.js";
import { t as PaginationControl } from "./PaginationControl-B-Hppb9V.js";
import { t as Image } from "./image-Indw2TMD.js";
import { t as Pencil } from "./pencil-DWzYSryK.js";
import { t as Plus } from "./plus-C24jMhZF.js";
import { n as Search, t as uploadFile } from "./storage-CMB69-DD.js";
import { t as Trash } from "./trash-BsG-kPCa.js";
import { Et as useToast, Lt as __toESM, Pt as require_react, St as require_jsx_runtime, Z as LoaderCircle, v as Button } from "./index-BeQKhNV1.js";
import { a as updateBook, i as getBooksPaginated, n as deleteBook, t as createBook } from "./books-Do5-BZ_0.js";
import { a as FormItem, c as ZodNumber, d as string, f as a, i as FormField, l as _enum, m as useForm, n as FormControl, o as FormLabel, p as _coercedNumber, s as FormMessage, t as Form, u as object } from "./form-U1C-klka.js";
import { n as Input } from "./label-L8eV-STl.js";
import { t as Textarea } from "./textarea-DMD6rm83.js";
import { a as DialogHeader, c as Table, d as TableHead, f as TableHeader, l as TableBody, n as DialogContent, o as DialogTitle, p as TableRow, s as DialogTrigger, t as Dialog, u as TableCell } from "./dialog-CdxlwMiX.js";
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
	const [totalBooks, setTotalBooks] = (0, import_react.useState)(0);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [totalPages, setTotalPages] = (0, import_react.useState)(1);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)("");
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const { toast } = useToast();
	const pageSize = 10;
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
		setIsLoading(true);
		try {
			const { data, count, totalPages: total } = await getBooksPaginated(currentPage, pageSize, search);
			setBooks(data || []);
			setTotalBooks(count);
			setTotalPages(total);
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to load books",
				variant: "destructive"
			});
		} finally {
			setIsLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		const delayDebounceFn = setTimeout(() => {
			if (currentPage !== 1 && search) setCurrentPage(1);
			else loadBooks();
		}, 500);
		return () => clearTimeout(delayDebounceFn);
	}, [search, currentPage]);
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground",
						children: ["Manage your reading list. Total: ", totalBooks]
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
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 5,
					className: "h-24 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin mx-auto text-muted-foreground" })
				}) }) : books.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 5,
					className: "h-24 text-center text-muted-foreground",
					children: "No books found."
				}) }) : books.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: book.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: book.image_url,
						alt: book.title,
						className: "h-10 w-8 object-cover rounded",
						loading: "lazy"
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationControl, {
				currentPage,
				totalPages,
				onPageChange: setCurrentPage
			})
		]
	});
}
export { BooksManager as default };

//# sourceMappingURL=BooksManager-DQMk0NVT.js.map