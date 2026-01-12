import { t as ExternalLink } from "./external-link-DVR9Ec03.js";
import { t as Pencil } from "./pencil-Bi9Ms7eg.js";
import { t as Plus } from "./plus-LHZU1x99.js";
import { t as Trash } from "./trash-h4DmVuC7.js";
import { Ft as __toESM, Mt as require_react, bt as require_jsx_runtime, v as Button, wt as useToast } from "./index-qQw-v09Y.js";
import { n as Input, t as Label } from "./label-fEB9RlzD.js";
import { a as getResumeExperience, c as getResumeSkills, i as getResumeEducation, l as updateResumeItem, n as deleteResumeItem, o as getResumeLanguages, r as getResumeCertifications, s as getResumePublications, t as createResumeItem } from "./resume-SK1Mx4jt.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-OT1NX4ix.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./dialog-D-6BIsEq.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CUYVu3uo.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ExperienceManager() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingItem, setEditingItem] = (0, import_react.useState)({});
	const { toast } = useToast();
	const loadData = async () => {
		const { data } = await getResumeExperience();
		setItems(data || []);
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingItem.id) await updateResumeItem("resume_experience", editingItem.id, editingItem);
			else await createResumeItem("resume_experience", editingItem);
			setIsOpen(false);
			loadData();
			toast({
				title: "Success",
				description: "Experience saved"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to save",
				variant: "destructive"
			});
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this item?")) return;
		await deleteResumeItem("resume_experience", id);
		loadData();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditingItem({}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Experience"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Experience" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
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
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role (PT)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.role_pt || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									role_pt: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Start Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: editingItem.start_date || "",
									onChange: (e) => setEditingItem({
										...editingItem,
										start_date: e.target.value
									}),
									required: true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "End Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: editingItem.end_date || "",
									onChange: (e) => setEditingItem({
										...editingItem,
										end_date: e.target.value
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Save"
						})
					]
				})] })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Company" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Dates" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[100px]",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: item.company
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.role_pt }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
					item.start_date,
					" - ",
					item.end_date || "Present"
				] }),
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
		})]
	});
}
function EducationManager() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingItem, setEditingItem] = (0, import_react.useState)({});
	const { toast } = useToast();
	const loadData = async () => {
		const { data } = await getResumeEducation();
		setItems(data || []);
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingItem.id) await updateResumeItem("resume_education", editingItem.id, editingItem);
			else await createResumeItem("resume_education", editingItem);
			setIsOpen(false);
			loadData();
			toast({
				title: "Success",
				description: "Education saved"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to save",
				variant: "destructive"
			});
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this item?")) return;
		await deleteResumeItem("resume_education", id);
		loadData();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditingItem({}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Education"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Education" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
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
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Degree (PT)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.degree_pt || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									degree_pt: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Start Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: editingItem.start_date || "",
									onChange: (e) => setEditingItem({
										...editingItem,
										start_date: e.target.value
									}),
									required: true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "End Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: editingItem.end_date || "",
									onChange: (e) => setEditingItem({
										...editingItem,
										end_date: e.target.value
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Save"
						})
					]
				})] })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Institution" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Degree" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Dates" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[100px]",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: item.institution
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.degree_pt }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
					item.start_date,
					" - ",
					item.end_date || "Present"
				] }),
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
		})]
	});
}
function SkillsManager() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingItem, setEditingItem] = (0, import_react.useState)({});
	const { toast } = useToast();
	const loadData = async () => {
		const { data } = await getResumeSkills();
		setItems(data || []);
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingItem.id) await updateResumeItem("resume_skills", editingItem.id, editingItem);
			else await createResumeItem("resume_skills", editingItem);
			setIsOpen(false);
			loadData();
			toast({
				title: "Success",
				description: "Skill saved"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to save",
				variant: "destructive"
			});
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this item?")) return;
		await deleteResumeItem("resume_skills", id);
		loadData();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditingItem({ proficiency: 80 }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Skill"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Skill" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Skill Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.name || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									name: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.category || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									category: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Proficiency (0-100)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: "0",
								max: "100",
								value: editingItem.proficiency || 0,
								onChange: (e) => setEditingItem({
									...editingItem,
									proficiency: parseInt(e.target.value)
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
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Name" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Category" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Proficiency" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[100px]",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: item.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.category }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [item.proficiency, "%"] }),
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
		})]
	});
}
function CertificationsManager() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingItem, setEditingItem] = (0, import_react.useState)({});
	const { toast } = useToast();
	const loadData = async () => {
		const { data } = await getResumeCertifications();
		setItems(data || []);
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingItem.id) await updateResumeItem("resume_certifications", editingItem.id, editingItem);
			else await createResumeItem("resume_certifications", editingItem);
			setIsOpen(false);
			loadData();
			toast({
				title: "Success",
				description: "Certification saved"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to save",
				variant: "destructive"
			});
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this item?")) return;
		await deleteResumeItem("resume_certifications", id);
		loadData();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditingItem({}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Certification"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Certification" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.name || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									name: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
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
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: editingItem.date || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									date: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.url || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									url: e.target.value
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
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Name" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Institution" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[100px]",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: item.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.institution }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.date }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					className: "flex gap-2",
					children: [
						item.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.url,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => {
								setEditingItem(item);
								setIsOpen(true);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "text-destructive",
							onClick: () => handleDelete(item.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
						})
					]
				})
			] }, item.id)) })] })
		})]
	});
}
function LanguagesManager() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingItem, setEditingItem] = (0, import_react.useState)({});
	const { toast } = useToast();
	const loadData = async () => {
		const { data } = await getResumeLanguages();
		setItems(data || []);
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingItem.id) await updateResumeItem("resume_languages", editingItem.id, editingItem);
			else await createResumeItem("resume_languages", editingItem);
			setIsOpen(false);
			loadData();
			toast({
				title: "Success",
				description: "Language saved"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to save",
				variant: "destructive"
			});
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this item?")) return;
		await deleteResumeItem("resume_languages", id);
		loadData();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditingItem({ proficiency: 50 }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Language"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Language" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Language (PT)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.language_pt || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									language_pt: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Level (PT)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.level_pt || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									level_pt: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Proficiency (0-100)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: "0",
								max: "100",
								value: editingItem.proficiency || 0,
								onChange: (e) => setEditingItem({
									...editingItem,
									proficiency: parseInt(e.target.value)
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
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Language" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Level" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Proficiency" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[100px]",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: item.language_pt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.level_pt }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [item.proficiency, "%"] }),
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
		})]
	});
}
function PublicationsManager() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingItem, setEditingItem] = (0, import_react.useState)({});
	const { toast } = useToast();
	const loadData = async () => {
		const { data } = await getResumePublications();
		setItems(data || []);
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingItem.id) await updateResumeItem("resume_publications", editingItem.id, editingItem);
			else await createResumeItem("resume_publications", editingItem);
			setIsOpen(false);
			loadData();
			toast({
				title: "Success",
				description: "Publication saved"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to save",
				variant: "destructive"
			});
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this item?")) return;
		await deleteResumeItem("resume_publications", id);
		loadData();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditingItem({}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add Publication"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Publication" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.title || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									title: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Summary (PT)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.summary_pt || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									summary_pt: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: editingItem.date || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									date: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editingItem.url || "",
								onChange: (e) => setEditingItem({
									...editingItem,
									url: e.target.value
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
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Title" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[100px]",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: item.date }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					className: "flex gap-2",
					children: [
						item.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.url,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => {
								setEditingItem(item);
								setIsOpen(true);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "text-destructive",
							onClick: () => handleDelete(item.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "h-4 w-4" })
						})
					]
				})
			] }, item.id)) })] })
		})]
	});
}
function ResumeManager() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("experience");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold",
				children: "Resume Manager"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Manage your professional career data."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			value: activeTab,
			onValueChange: setActiveTab,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "w-full justify-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "experience",
								children: "Experience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "education",
								children: "Education"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "skills",
								children: "Skills"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "certifications",
								children: "Certifications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "languages",
								children: "Languages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "publications",
								children: "Publications"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "experience",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceManager, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "education",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationManager, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "skills",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsManager, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "certifications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationsManager, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "languages",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagesManager, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "publications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicationsManager, {})
				})
			]
		})]
	});
}
export { ResumeManager as default };

//# sourceMappingURL=ResumeManager-h7WV0zRQ.js.map