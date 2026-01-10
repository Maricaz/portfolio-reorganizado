import { a as DialogTrigger, c as Pencil, i as DialogTitle, n as DialogContent, o as Trash, r as DialogHeader, s as Plus, t as Dialog } from "./dialog-DLwiX4KB.js";
import { G as require_jsx_runtime, J as useToast, d as Button, nt as __toESM, tt as require_react } from "./index-WvNcIOTU.js";
import { t as Input } from "./input-DJVk3JqY.js";
import { t as Label } from "./label-CIoAEQ0g.js";
import { a as getResumeExperience, i as getResumeEducation, l as updateResumeItem, n as deleteResumeItem, t as createResumeItem } from "./resume-BmSdkyUP.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DXQ5AzY6.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CIFWoc3Z.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ResumeManager() {
	const [experience, setExperience] = (0, import_react.useState)([]);
	const [education, setEducation] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("experience");
	const [editingItem, setEditingItem] = (0, import_react.useState)({});
	const { toast } = useToast();
	const loadData = async () => {
		try {
			const [exp, edu] = await Promise.all([getResumeExperience(), getResumeEducation()]);
			setExperience(exp.data || []);
			setEducation(edu.data || []);
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to load resume data",
				variant: "destructive"
			});
		}
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const table = activeTab === "experience" ? "resume_experience" : "resume_education";
		try {
			if (editingItem.id) await updateResumeItem(table, editingItem.id, editingItem);
			else await createResumeItem(table, editingItem);
			setIsOpen(false);
			loadData();
			toast({
				title: "Success",
				description: "Saved successfully"
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
		const table = activeTab === "experience" ? "resume_experience" : "resume_education";
		try {
			await deleteResumeItem(table, id);
			loadData();
			toast({
				title: "Success",
				description: "Deleted successfully"
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
				children: "Resume Manager"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditingItem({}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Item"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Add/Edit ", activeTab] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [activeTab === "experience" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Company" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.company || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									company: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role (PT)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.role_pt || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									role_pt: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Start Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: editingItem.start_date || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									start_date: e.target.value
								}),
								required: true
							})]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Institution" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.institution || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									institution: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Degree (PT)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.degree_pt || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									degree_pt: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Start Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: editingItem.start_date || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									start_date: e.target.value
								}),
								required: true
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Save"
					})]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			value: activeTab,
			onValueChange: setActiveTab,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "experience",
					children: "Experience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "education",
					children: "Education"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "experience",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border rounded-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Company" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.company }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.role_pt }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => {
										setEditingItem(item);
										setIsOpen(true);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "text-destructive",
									onClick: () => handleDelete(item.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
								})]
							})
						] }, item.id)) })] })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "education",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border rounded-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Institution" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Degree" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.institution }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.degree_pt }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => {
										setEditingItem(item);
										setIsOpen(true);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "text-destructive",
									onClick: () => handleDelete(item.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
								})]
							})
						] }, item.id)) })] })
					})
				})
			]
		})]
	});
}
export { ResumeManager as default };

//# sourceMappingURL=ResumeManager-DprMCjoN.js.map