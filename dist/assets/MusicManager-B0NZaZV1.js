import { t as Image } from "./image-Du9nZuPT.js";
import { n as uploadFile, t as ExportButton } from "./ExportButton-DrajbskH.js";
import { n as Pencil, t as Trash } from "./trash-BPuAJdG9.js";
import { t as Plus } from "./plus-Ol9J6q4l.js";
import { Ct as __toESM, St as require_react, dt as require_jsx_runtime, ht as useToast, m as Button } from "./index-BC0sjyFi.js";
import { a as FormLabel, d as string, f as a, i as FormItem, l as literal, m as useForm, n as FormControl, o as FormMessage, r as FormField, t as Form, u as object } from "./form-DGYmxs6z.js";
import { n as Input } from "./label-CPN4V0f-.js";
import { a as updateTrack, i as getMusicTracks, n as deleteTrack, t as createTrack } from "./music-DCVlYERJ.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./dialog-DCEcH5MC.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-8pAFLcmD.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var trackSchema = object({
	title: string().min(1, "Title is required"),
	artist: string().min(1, "Artist is required"),
	src_url: string().url("Must be a valid URL").optional().or(literal("")),
	image_url: string().optional()
});
function MusicManager() {
	const [tracks, setTracks] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const { toast } = useToast();
	const form = useForm({
		resolver: a(trackSchema),
		defaultValues: {
			title: "",
			artist: "",
			src_url: "",
			image_url: ""
		}
	});
	const loadTracks = async () => {
		try {
			setTracks(await getMusicTracks() || []);
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to load tracks",
				variant: "destructive"
			});
		}
	};
	(0, import_react.useEffect)(() => {
		loadTracks();
	}, []);
	const handleEdit = (track) => {
		setEditingId(track.id);
		form.reset({
			title: track.title,
			artist: track.artist,
			src_url: track.src_url || "",
			image_url: track.image_url || ""
		});
		setIsOpen(true);
	};
	const handleAddNew = () => {
		setEditingId(null);
		form.reset({
			title: "",
			artist: "",
			src_url: "",
			image_url: ""
		});
		setIsOpen(true);
	};
	const handleImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		try {
			setUploading(true);
			const url = await uploadFile(file, "portfolio-media", "music");
			form.setValue("image_url", url);
			toast({
				title: "Success",
				description: "Album art uploaded"
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
				await updateTrack(editingId, values);
				toast({
					title: "Success",
					description: "Track updated"
				});
			} else {
				await createTrack(values);
				toast({
					title: "Success",
					description: "Track created"
				});
			}
			setIsOpen(false);
			loadTracks();
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
			await deleteTrack(id);
			loadTracks();
			toast({
				title: "Success",
				description: "Track deleted"
			});
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Music Manager"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Manage your tracks and albums."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, {
					data: tracks,
					filename: "music_export"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open: isOpen,
					onOpenChange: setIsOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleAddNew,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Track"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingId ? "Edit Track" : "Add Track" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
						...form,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: form.handleSubmit(onSubmit),
							className: "space-y-4",
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
									name: "artist",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Artist" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									control: form.control,
									name: "src_url",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Audio URL (MP3)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...field,
											placeholder: "https://..."
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Album Art" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-4 items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "file",
												accept: "image/*",
												onChange: handleImageUpload,
												disabled: uploading
											}), form.watch("image_url") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative h-16 w-16 border rounded overflow-hidden shrink-0",
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
												placeholder: "Or image URL...",
												...field
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})] })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full",
									disabled: uploading,
									children: uploading ? "Uploading..." : "Save Track"
								})
							]
						})
					})] })]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Art" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Title" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Artist" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: track.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: track.image_url,
					alt: "",
					className: "h-10 w-10 object-cover rounded"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-10 w-10 bg-muted rounded flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4 text-muted-foreground" })
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: track.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: track.artist }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => handleEdit(track),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "text-destructive",
						onClick: () => handleDelete(track.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
					})]
				})
			] }, track.id)) })] })
		})]
	});
}
export { MusicManager as default };

//# sourceMappingURL=MusicManager-B0NZaZV1.js.map