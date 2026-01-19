import { t as ExportButton } from "./ExportButton-Bo_h0nZU.js";
import { t as ExternalLink } from "./external-link-Bg-SJRDI.js";
import { t as Trash } from "./trash-DEfaDYkX.js";
import { It as __toESM, Nt as require_react, Tt as useToast, X as LoaderCircle, Y as Mail, k as supabase, v as Button, xt as require_jsx_runtime } from "./index-fyBjNUg6.js";
import { a as DialogHeader, c as Table, d as TableHead, f as TableHeader, l as TableBody, n as DialogContent, o as DialogTitle, p as TableRow, s as DialogTrigger, t as Dialog, u as TableCell } from "./dialog-Tchq1aVy.js";
import "./push-BQrjugFs.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const getContactSubmissions = async () => {
	const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
	if (error) throw error;
	return data;
};
const deleteContactSubmission = async (id) => {
	const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
	if (error) throw error;
	return true;
};
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ContactManager() {
	const [submissions, setSubmissions] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const { toast } = useToast();
	const loadSubmissions = async () => {
		try {
			setLoading(true);
			setSubmissions(await getContactSubmissions());
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to load submissions",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadSubmissions();
	}, []);
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this message?")) return;
		try {
			await deleteContactSubmission(id);
			setSubmissions((prev) => prev.filter((s) => s.id !== id));
			toast({
				title: "Success",
				description: "Message deleted"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to delete message",
				variant: "destructive"
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold tracking-tight",
				children: "Contact Messages"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Manage incoming messages from the contact form."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, {
					data: submissions,
					filename: "contact_submissions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: loadSubmissions,
					variant: "outline",
					size: "sm",
					children: "Refresh"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center p-12 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Loading messages..."
				})]
			}) : submissions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center p-12 space-y-2 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-full bg-muted p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-6 w-6 text-muted-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-lg",
						children: "No messages yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground max-w-sm",
						children: "Messages sent through the contact form will appear here."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Name" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Email" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Message Preview" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: submissions.map((submission) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "whitespace-nowrap",
					children: new Date(submission.created_at).toLocaleDateString()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: submission.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `mailto:${submission.email}`,
					className: "hover:underline flex items-center gap-1",
					children: [submission.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3 opacity-50" })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "max-w-md truncate",
					children: submission.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								children: "View"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Message Details" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold block text-muted-foreground",
											children: "From"
										}), submission.name] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold block text-muted-foreground",
											children: "Date"
										}), new Date(submission.created_at).toLocaleString()] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold block text-muted-foreground",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${submission.email}`,
												className: "text-primary hover:underline",
												children: submission.email
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-muted p-4 rounded-md text-sm whitespace-pre-wrap",
									children: submission.message
								}),
								submission.origin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: ["Origin: ", submission.origin]
								})
							]
						})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "text-destructive hover:text-destructive hover:bg-destructive/10",
							onClick: () => handleDelete(submission.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
						})]
					})
				})
			] }, submission.id)) })] })
		})]
	});
}
export { ContactManager as default };

//# sourceMappingURL=ContactManager-Btw-9vH7.js.map