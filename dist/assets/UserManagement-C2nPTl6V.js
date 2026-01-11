import { t as LoaderCircle } from "./loader-circle-DnztkOqO.js";
import { Ct as __toESM, St as require_react, Z as createLucideIcon, dt as require_jsx_runtime, ht as useToast, m as Button, v as useAuth, yt as useNavigate } from "./index-87M8N5Wh.js";
import { a as FormItem, d as string, f as a, i as FormField, l as _enum, m as useForm, n as FormControl, o as FormLabel, r as FormDescription, s as FormMessage, t as Form, u as object } from "./form-pAH3df2n.js";
import { n as Input } from "./label-Calgs-jJ.js";
import { t as Badge } from "./badge-BRhF4Mil.js";
import { n as getAllProfiles, o as updateUserRole, t as createUser } from "./admin-DYmprcia.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-ULih3P89.js";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-2v03BXg1.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BO9G_REH.js";
var UserPlus = createLucideIcon("user-plus", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["line", {
		x1: "19",
		x2: "19",
		y1: "8",
		y2: "14",
		key: "1bvyxn"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "11",
		y2: "11",
		key: "1shjgl"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var formSchema = object({
	email: string().email({ message: "Invalid email address" }),
	password: string().min(6, { message: "Password must be at least 6 characters" }),
	role: _enum([
		"user",
		"editor",
		"admin",
		"super_admin"
	])
});
const CreateUserDialog = ({ onSuccess }) => {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { toast } = useToast();
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: {
			email: "",
			password: "",
			role: "user"
		}
	});
	const onSubmit = async (values) => {
		setLoading(true);
		try {
			const { error } = await createUser(values);
			if (error) throw new Error(error.message || "Failed to create user");
			toast({
				title: "User created",
				description: `Successfully created user ${values.email}`
			});
			setOpen(false);
			form.reset();
			onSuccess?.();
		} catch (error) {
			toast({
				title: "Error",
				description: error.message,
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "h-4 w-4" }), "Create User"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-[425px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create New User" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Add a new user to the system. They will receive an email confirmation." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
				...form,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: form.handleSubmit(onSubmit),
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							control: form.control,
							name: "email",
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Email" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "user@example.com",
									...field
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							control: form.control,
							name: "password",
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Password" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "password",
									placeholder: "******",
									...field
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, { children: "Must be at least 6 characters long." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							control: form.control,
							name: "role",
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "Role" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									onValueChange: field.onChange,
									defaultValue: field.value,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a role" }) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "user",
											children: "User"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "editor",
											children: "Editor"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "admin",
											children: "Admin"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "super_admin",
											children: "Super Admin"
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: loading,
							children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Create User"]
						}) })
					]
				})
			})]
		})]
	});
};
function UserManagement() {
	const [profiles, setProfiles] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const { toast } = useToast();
	const { user, role } = useAuth();
	(0, import_react.useEffect)(() => {
		if (role && role !== "super_admin" && role !== "admin") {}
	}, [role, useNavigate()]);
	const loadProfiles = async () => {
		setLoading(true);
		try {
			setProfiles(await getAllProfiles() || []);
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to load user profiles",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (role === "super_admin" || role === "admin") loadProfiles();
	}, [role]);
	const handleRoleChange = async (userId, newRole) => {
		if (role !== "super_admin") {
			toast({
				title: "Permission Denied",
				description: "Only Super Admins can change roles",
				variant: "destructive"
			});
			return;
		}
		try {
			await updateUserRole(userId, newRole);
			setProfiles((prev) => prev.map((p) => p.id === userId ? {
				...p,
				role: newRole
			} : p));
			toast({
				title: "Success",
				description: "User role updated"
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to update role",
				variant: "destructive"
			});
		}
	};
	if (role !== "super_admin" && role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[50vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "Access Denied"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "You do not have permission to view this page."
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "User Management"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Manage user roles and permissions."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateUserDialog, { onSuccess: loadProfiles })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User Info" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Joined" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 4,
				className: "text-center py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-center items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-primary" }), "Loading users..."]
				})
			}) }) : profiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 4,
				className: "text-center py-8",
				children: "No users found."
			}) }) : profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-sm",
						children: profile.email || "No email available"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs text-muted-foreground",
						children: [profile.id, profile.id === user?.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "ml-2 h-4 px-1",
							children: "You"
						})]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: new Date(profile.created_at).toLocaleDateString() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					children: profile.role || "user"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: profile.role || "user",
					onValueChange: (val) => handleRoleChange(profile.id, val),
					disabled: profile.id === user?.id || role !== "super_admin",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-[140px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "user",
							children: "User"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "editor",
							children: "Editor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "admin",
							children: "Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "super_admin",
							children: "Super Admin"
						})
					] })]
				}) })
			] }, profile.id)) })] })
		})]
	});
}
export { UserManagement as default };

//# sourceMappingURL=UserManagement-C2nPTl6V.js.map