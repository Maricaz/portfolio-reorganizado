import { t as ExportButton } from "./ExportButton-CXt6Zhvf.js";
import { t as PaginationControl } from "./PaginationControl-BKOum5-G.js";
import { t as Eye } from "./eye-B6MPL3up.js";
import { t as Image } from "./image-CURRnWkM.js";
import { t as Pencil } from "./pencil-B38PtB_2.js";
import { t as Plus } from "./plus-BeVGLOZo.js";
import { n as Search, t as uploadFile } from "./storage-CyfoGy3J.js";
import { t as Trash } from "./trash-DSgbvRNb.js";
import { Et as useToast, Lt as __toESM, Pt as require_react, St as require_jsx_runtime, U as X, Z as LoaderCircle, ot as createLucideIcon, q as Music, v as Button } from "./index-D09P2277.js";
import { a as FormItem, d as string, f as a, i as FormField, m as useForm, n as FormControl, o as FormLabel, r as FormDescription, s as FormMessage, t as Form, u as object } from "./form-C2YTTsFz.js";
import { n as Input } from "./label-BInDbCTU.js";
import { t as Textarea } from "./textarea-PlobuP2R.js";
import { t as Badge } from "./badge-5epQURPn.js";
import { a as deleteTrack, c as getPlaylistTracks, d as removeTrackFromPlaylist, f as updatePlaylist, i as deletePlaylist, l as getPlaylists, n as createPlaylist, p as updateTrack, r as createTrack, s as getMusicTracks, t as addTrackToPlaylist, u as getTracksPaginated } from "./music-7v-xqifw.js";
import { t as ScrollArea } from "./scroll-area-Xyc1GYjL.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CwxMZU7N.js";
import { a as DialogHeader, c as Table, d as TableHead, f as TableHeader, i as DialogFooter, l as TableBody, n as DialogContent, o as DialogTitle, p as TableRow, s as DialogTrigger, t as Dialog, u as TableCell } from "./dialog-TNHZEQAc.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-CshDWJjr.js";
var ListMusic = createLucideIcon("list-music", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M11 12H3",
		key: "51ecnj"
	}],
	["path", {
		d: "M11 19H3",
		key: "zflm78"
	}],
	["path", {
		d: "M21 16V5",
		key: "yxg4q8"
	}],
	["circle", {
		cx: "18",
		cy: "16",
		r: "3",
		key: "1hluhg"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function TrackDetailsDialog({ track, open, onOpenChange }) {
	if (!track) return null;
	const lyrics = track.lyrics || {};
	const platforms = track.platforms || {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-2xl max-h-[90vh] flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "text-2xl font-bold flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-6 h-6" }), "Track Details"]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "h-full pr-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-6 items-start",
								children: [track.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: track.image_url,
									alt: track.title,
									className: "w-32 h-32 rounded-lg object-cover shadow-md"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-32 h-32 bg-muted rounded-lg flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-12 h-12 text-muted-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-semibold",
											children: track.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-lg",
											children: track.artist
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: Object.keys(platforms).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "capitalize",
												children: p
											}, p))
										})
									]
								})]
							}),
							track.src_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-muted/30 p-4 rounded-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-medium mb-2 text-sm text-muted-foreground",
									children: "Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("audio", {
									controls: true,
									className: "w-full h-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", { src: track.src_url }), "Your browser does not support the audio element."]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold",
									children: "Lyrics"
								}), Object.keys(lyrics).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
									defaultValue: Object.keys(lyrics)[0],
									className: "w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, { children: Object.keys(lyrics).map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: lang,
										className: "uppercase",
										children: lang
									}, lang)) }), Object.entries(lyrics).map(([lang, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
										value: lang,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-4 bg-muted/20 rounded-lg whitespace-pre-wrap text-sm leading-relaxed border",
											children: text
										})
									}, lang))]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground italic",
									children: "No lyrics available."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold",
									children: "Platform Links"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
									children: Object.entries(platforms).map(([platform, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between p-3 border rounded-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "capitalize font-medium",
											children: platform
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "text-xs bg-muted px-2 py-1 rounded",
											children: id
										})]
									}, platform))
								})]
							})
						]
					})
				})
			})]
		})
	});
}
var trackSchema = object({
	title: string().min(1, "Title is required"),
	artist: string().min(1, "Artist is required"),
	src_url: string().optional(),
	image_url: string().optional(),
	lyrics_pt: string().optional(),
	lyrics_en: string().optional(),
	lyrics_ko: string().optional(),
	spotify_id: string().optional(),
	deezer_id: string().optional(),
	apple_id: string().optional(),
	youtube_id: string().optional()
});
function TracksTab() {
	const [tracks, setTracks] = (0, import_react.useState)([]);
	const [totalTracks, setTotalTracks] = (0, import_react.useState)(0);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [totalPages, setTotalPages] = (0, import_react.useState)(1);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [audioUploading, setAudioUploading] = (0, import_react.useState)(false);
	const [viewTrack, setViewTrack] = (0, import_react.useState)(null);
	const { toast } = useToast();
	const pageSize = 10;
	const form = useForm({
		resolver: a(trackSchema),
		defaultValues: {
			title: "",
			artist: "",
			src_url: "",
			image_url: "",
			lyrics_pt: "",
			lyrics_en: "",
			lyrics_ko: "",
			spotify_id: "",
			deezer_id: "",
			apple_id: "",
			youtube_id: ""
		}
	});
	const loadTracks = async () => {
		try {
			setLoading(true);
			const { data, count, totalPages: total } = await getTracksPaginated(currentPage, pageSize, search);
			setTracks(data || []);
			setTotalTracks(count);
			setTotalPages(total);
		} catch (error) {
			console.error("Failed to load tracks:", error);
			toast({
				title: "Error",
				description: "Failed to load tracks. Please try again.",
				variant: "destructive"
			});
			setTracks([]);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			if (currentPage !== 1 && search) setCurrentPage(1);
			else loadTracks();
		}, 500);
		return () => clearTimeout(timer);
	}, [search, currentPage]);
	const handleEdit = (track) => {
		setEditingId(track.id);
		const lyrics = track.lyrics || {};
		const platforms = track.platforms || {};
		form.reset({
			title: track.title,
			artist: track.artist,
			src_url: track.src_url || "",
			image_url: track.image_url || "",
			lyrics_pt: lyrics.pt || "",
			lyrics_en: lyrics.en || "",
			lyrics_ko: lyrics.ko || "",
			spotify_id: platforms.spotify || "",
			deezer_id: platforms.deezer || "",
			apple_id: platforms.apple || "",
			youtube_id: platforms.youtube || ""
		});
		setIsOpen(true);
	};
	const handleAddNew = () => {
		setEditingId(null);
		form.reset({
			title: "",
			artist: "",
			src_url: "",
			image_url: "",
			lyrics_pt: "",
			lyrics_en: "",
			lyrics_ko: "",
			spotify_id: "",
			deezer_id: "",
			apple_id: "",
			youtube_id: ""
		});
		setIsOpen(true);
	};
	const handleImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		try {
			setUploading(true);
			const url = await uploadFile(file, "portfolio-media", "music-covers");
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
	const handleAudioUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		try {
			setAudioUploading(true);
			const url = await uploadFile(file, "music", "tracks");
			form.setValue("src_url", url);
			toast({
				title: "Success",
				description: "Audio track uploaded"
			});
		} catch (error) {
			console.error(error);
			toast({
				title: "Upload Error",
				description: "Failed to upload audio file. Ensure \"music\" bucket exists.",
				variant: "destructive"
			});
		} finally {
			setAudioUploading(false);
		}
	};
	const onSubmit = async (values) => {
		try {
			const trackData = {
				title: values.title,
				artist: values.artist,
				src_url: values.src_url,
				image_url: values.image_url,
				lyrics: {
					pt: values.lyrics_pt,
					en: values.lyrics_en,
					ko: values.lyrics_ko
				},
				platforms: {
					spotify: values.spotify_id,
					deezer: values.deezer_id,
					apple: values.apple_id,
					youtube: values.youtube_id
				}
			};
			if (editingId) {
				await updateTrack(editingId, trackData);
				toast({
					title: "Success",
					description: "Track updated"
				});
			} else {
				await createTrack(trackData);
				toast({
					title: "Success",
					description: "Track created"
				});
			}
			setIsOpen(false);
			loadTracks();
		} catch (error) {
			console.error("Operation failed:", error);
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
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold tracking-tight",
						children: "Music Tracks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground",
						children: ["Upload and manage your music library. Total: ", totalTracks]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, {
						data: tracks,
						filename: "music_tracks_export"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open: isOpen,
						onOpenChange: setIsOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleAddNew,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Track"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "max-w-2xl max-h-[90vh] overflow-y-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingId ? "Edit Track" : "Add Track" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
								...form,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: form.handleSubmit(onSubmit),
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
												control: form.control,
												name: "title",
												render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Title" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
												] })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
												control: form.control,
												name: "artist",
												render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Artist" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
												] })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Audio File" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex gap-2 items-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															type: "file",
															accept: ".mp3,audio/*",
															onChange: handleAudioUpload,
															disabled: audioUploading
														}), audioUploading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin h-4 w-4" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
														control: form.control,
														name: "src_url",
														render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																placeholder: "Or audio URL...",
																...field
															}) }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, {
																className: "text-xs",
																children: "Upload an MP3 or paste a direct link."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
														] })
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Album Art" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex gap-2 items-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															type: "file",
															accept: "image/*",
															onChange: handleImageUpload,
															disabled: uploading
														}), form.watch("image_url") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "relative h-10 w-10 border rounded overflow-hidden shrink-0",
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
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border rounded p-4 space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-sm",
												children: "Lyrics"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 md:grid-cols-3 gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
														control: form.control,
														name: "lyrics_pt",
														render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Portuguese" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																className: "h-24",
																...field
															}) }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
														] })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
														control: form.control,
														name: "lyrics_en",
														render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "English" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																className: "h-24",
																...field
															}) }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
														] })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
														control: form.control,
														name: "lyrics_ko",
														render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Korean" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																className: "h-24",
																...field
															}) }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
														] })
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border rounded p-4 space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-sm",
												children: "Platform IDs"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
														control: form.control,
														name: "spotify_id",
														render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Spotify ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) })] })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
														control: form.control,
														name: "deezer_id",
														render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Deezer ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) })] })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
														control: form.control,
														name: "apple_id",
														render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Apple ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) })] })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
														control: form.control,
														name: "youtube_id",
														render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "YouTube ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field }) })] })
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											className: "w-full",
											disabled: uploading || audioUploading,
											children: uploading || audioUploading ? "Uploading..." : "Save Track"
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
					placeholder: "Search tracks...",
					className: "max-w-sm",
					value: search,
					onChange: (e) => setSearch(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border rounded-md",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center p-8 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading tracks..."
					})]
				}) : tracks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center p-8 space-y-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-muted p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-6 w-6 text-muted-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-lg",
							children: "No tracks found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground max-w-sm",
							children: "You haven't added any music tracks yet. Click the \"Add Track\" button to get started."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Art" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Title" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Artist" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: track.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: track.image_url,
						alt: "",
						className: "h-10 w-10 object-cover rounded",
						loading: "lazy"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-10 w-10 bg-muted rounded flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-4 w-4 text-muted-foreground" })
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: track.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: track.artist }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => setViewTrack(track),
								title: "View Details",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => handleEdit(track),
								title: "Edit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "text-destructive",
								onClick: () => handleDelete(track.id),
								title: "Delete",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
							})
						]
					})
				] }, track.id)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationControl, {
				currentPage,
				totalPages,
				onPageChange: setCurrentPage
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackDetailsDialog, {
				track: viewTrack,
				open: !!viewTrack,
				onOpenChange: (open) => !open && setViewTrack(null)
			})
		]
	});
}
var playlistSchema = object({
	name: string().min(1, "Name is required"),
	description: string().optional(),
	image_url: string().optional()
});
function PlaylistsTab() {
	const [playlists, setPlaylists] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [imagePreview, setImagePreview] = (0, import_react.useState)(null);
	const [managingId, setManagingId] = (0, import_react.useState)(null);
	const [playlistTracks, setPlaylistTracks] = (0, import_react.useState)([]);
	const [availableTracks, setAvailableTracks] = (0, import_react.useState)([]);
	const [selectedTrackToAdd, setSelectedTrackToAdd] = (0, import_react.useState)("");
	const { toast } = useToast();
	const form = useForm({
		resolver: a(playlistSchema),
		defaultValues: {
			name: "",
			description: "",
			image_url: ""
		}
	});
	const loadPlaylists = async () => {
		try {
			setLoading(true);
			setPlaylists(await getPlaylists());
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to load playlists",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	const loadTracksForPlaylist = async (playlistId) => {
		try {
			setPlaylistTracks(await getPlaylistTracks(playlistId));
			setAvailableTracks(await getMusicTracks());
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Failed to load playlist tracks",
				variant: "destructive"
			});
		}
	};
	(0, import_react.useEffect)(() => {
		loadPlaylists();
	}, []);
	const handleEdit = (playlist) => {
		setEditingId(playlist.id);
		form.reset({
			name: playlist.name,
			description: playlist.description || "",
			image_url: playlist.image_url || ""
		});
		setImagePreview(playlist.image_url || null);
		setIsOpen(true);
	};
	const handleAddNew = () => {
		setEditingId(null);
		form.reset({
			name: "",
			description: "",
			image_url: ""
		});
		setImagePreview(null);
		setIsOpen(true);
	};
	const handleImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onloadend = () => {
			setImagePreview(reader.result);
		};
		reader.readAsDataURL(file);
		try {
			setUploading(true);
			const url = await uploadFile(file, "playlist-covers", "covers");
			form.setValue("image_url", url);
			toast({
				title: "Success",
				description: "Cover image uploaded"
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
				await updatePlaylist(editingId, values);
				toast({
					title: "Success",
					description: "Playlist updated"
				});
			} else {
				await createPlaylist(values);
				toast({
					title: "Success",
					description: "Playlist created"
				});
			}
			setIsOpen(false);
			loadPlaylists();
		} catch (error) {
			toast({
				title: "Error",
				description: "Operation failed",
				variant: "destructive"
			});
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Are you sure? This will delete the playlist but keep the tracks.")) return;
		try {
			await deletePlaylist(id);
			loadPlaylists();
			toast({
				title: "Success",
				description: "Playlist deleted"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to delete",
				variant: "destructive"
			});
		}
	};
	const handleManageTracks = (playlist) => {
		setManagingId(playlist.id);
		loadTracksForPlaylist(playlist.id);
	};
	const onAddTrack = async () => {
		if (!managingId || !selectedTrackToAdd) return;
		try {
			await addTrackToPlaylist(managingId, selectedTrackToAdd, playlistTracks.reduce((max, t) => Math.max(max, t.order_index), -1) + 1);
			await loadTracksForPlaylist(managingId);
			setSelectedTrackToAdd("");
			toast({
				title: "Success",
				description: "Track added to playlist"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to add track",
				variant: "destructive"
			});
		}
	};
	const onRemoveTrack = async (trackId) => {
		if (!managingId) return;
		try {
			await removeTrackFromPlaylist(managingId, trackId);
			await loadTracksForPlaylist(managingId);
			toast({
				title: "Success",
				description: "Track removed from playlist"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to remove track",
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold tracking-tight",
						children: "Playlists"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Curate collections of music tracks with custom covers."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, {
						data: playlists,
						filename: "playlists_export"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open: isOpen,
						onOpenChange: setIsOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleAddNew,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Create Playlist"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingId ? "Edit Playlist" : "Create Playlist" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
							...form,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: form.handleSubmit(onSubmit),
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										control: form.control,
										name: "name",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Name" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...field,
												placeholder: "My Awesome Playlist"
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										control: form.control,
										name: "description",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Description" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												...field,
												placeholder: "A short description..."
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Cover Image" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "file",
												accept: "image/*",
												onChange: handleImageUpload,
												disabled: uploading
											}), imagePreview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative aspect-square w-32 border rounded-md overflow-hidden bg-muted",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: imagePreview,
													alt: "Preview",
													className: "h-full w-full object-cover"
												})
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "w-full",
										disabled: uploading,
										children: uploading ? "Uploading..." : "Save Playlist"
									})
								]
							})
						})] })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border rounded-md",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center p-8 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading playlists..."
					})]
				}) : playlists.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center p-8 space-y-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-muted p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "h-6 w-6 text-muted-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-lg",
							children: "No playlists found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground max-w-sm",
							children: "Create your first playlist to get started."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Cover" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Name" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Description" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: playlists.map((playlist) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: playlist.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: playlist.image_url,
						alt: "",
						className: "h-10 w-10 object-cover rounded"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-10 w-10 bg-muted rounded flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4 text-muted-foreground" })
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: playlist.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "max-w-xs truncate",
						children: playlist.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => handleManageTracks(playlist),
								title: "Manage Tracks",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => handleEdit(playlist),
								title: "Edit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "text-destructive",
								onClick: () => handleDelete(playlist.id),
								title: "Delete",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
							})
						]
					})
				] }, playlist.id)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!managingId,
				onOpenChange: (open) => !open && setManagingId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-3xl max-h-[80vh] flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Manage Playlist Tracks" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 flex flex-col gap-4 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: selectedTrackToAdd,
									onValueChange: setSelectedTrackToAdd,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a track to add..." })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: availableTracks.filter((t) => !playlistTracks.some((pt) => pt.track_id === t.id)).map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: track.id,
										children: [
											track.title,
											" - ",
											track.artist
										]
									}, track.id)) })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: onAddTrack,
									disabled: !selectedTrackToAdd,
									children: "Add"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border rounded-md flex-1 overflow-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "w-12",
										children: "#"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Title" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Artist" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { className: "w-12" })
								] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: playlistTracks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									colSpan: 4,
									className: "text-center text-muted-foreground h-32",
									children: "No tracks in this playlist yet."
								}) }) : playlistTracks.map((pt, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: index + 1 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "font-medium",
										children: pt.track?.title || "Unknown"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: pt.track?.artist || "Unknown" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										className: "h-8 w-8 text-destructive",
										onClick: () => onRemoveTrack(pt.track_id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									}) })
								] }, pt.id)) })] })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setManagingId(null),
							children: "Close"
						}) })
					]
				})
			})
		]
	});
}
function MusicManager() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-between items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Music Manager"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Manage your tracks, playlists and audio files."
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "tracks",
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "grid w-full max-w-md grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "tracks",
						children: "Tracks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "playlists",
						children: "Playlists"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "tracks",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TracksTab, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "playlists",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaylistsTab, {})
				})
			]
		})]
	});
}
export { MusicManager as default };

//# sourceMappingURL=MusicManager-DhuNvw8o.js.map