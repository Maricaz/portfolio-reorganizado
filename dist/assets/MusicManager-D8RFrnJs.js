import { a as DialogTrigger, c as Pencil, i as DialogTitle, n as DialogContent, o as Trash, r as DialogHeader, s as Plus, t as Dialog } from "./dialog-DLwiX4KB.js";
import { G as require_jsx_runtime, J as useToast, d as Button, nt as __toESM, tt as require_react } from "./index-WvNcIOTU.js";
import { t as Input } from "./input-DJVk3JqY.js";
import { t as Label } from "./label-CIoAEQ0g.js";
import { a as updateTrack, i as getMusicTracks, n as deleteTrack, t as createTrack } from "./music-DLWqdc25.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CIFWoc3Z.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function MusicManager() {
	const [tracks, setTracks] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingTrack, setEditingTrack] = (0, import_react.useState)(null);
	const { toast } = useToast();
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
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingTrack?.id) await updateTrack(editingTrack.id, editingTrack);
			else await createTrack(editingTrack);
			setIsOpen(false);
			loadTracks();
			toast({
				title: "Success",
				description: "Track saved"
			});
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold",
				children: "Music Manager"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditingTrack({}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Track"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingTrack?.id ? "Edit Track" : "Add Track" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingTrack?.title || "",
								onChange: (e) => setEditingTrack({
									...editingTrack,
									title: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Artist" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingTrack?.artist || "",
								onChange: (e) => setEditingTrack({
									...editingTrack,
									artist: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Source URL (MP3)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingTrack?.src_url || "",
								onChange: (e) => setEditingTrack({
									...editingTrack,
									src_url: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Save"
						})
					]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Title" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Artist" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: track.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: track.artist }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => {
							setEditingTrack(track);
							setIsOpen(true);
						},
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

//# sourceMappingURL=MusicManager-D8RFrnJs.js.map