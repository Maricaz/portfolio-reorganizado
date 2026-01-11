import { Ct as __toESM, St as require_react, dt as require_jsx_runtime, ht as useToast, v as useAuth, yt as useNavigate } from "./index-CN_pEYFp.js";
import { t as Badge } from "./badge-DsfAIA-k.js";
import { a as updateUserRole, t as getAllProfiles } from "./admin-oleWSmOv.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-D4tFIIMw.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-CrMlF_q4.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function UserManagement() {
	const [profiles, setProfiles] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const { toast } = useToast();
	const { user, role } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (role && role !== "super_admin") {
			toast({
				title: "Access Denied",
				description: "You do not have permission to view this page.",
				variant: "destructive"
			});
			navigate("/admin");
		}
	}, [
		role,
		navigate,
		toast
	]);
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
		if (role === "super_admin") loadProfiles();
	}, [role]);
	const handleRoleChange = async (userId, newRole) => {
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
	if (role !== "super_admin") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold",
				children: "User Management"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Manage user roles and permissions."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User ID" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Joined" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Current Role" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Actions" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 4,
				className: "text-center py-8",
				children: "Loading users..."
			}) }) : profiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 4,
				className: "text-center py-8",
				children: "No users found."
			}) }) : profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					className: "font-mono text-xs",
					children: [profile.id, profile.id === user?.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "ml-2",
						children: "You"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: new Date(profile.created_at).toLocaleDateString() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					children: profile.role || "user"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: profile.role || "user",
					onValueChange: (val) => handleRoleChange(profile.id, val),
					disabled: profile.id === user?.id,
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

//# sourceMappingURL=UserManagement-B5rVV3WI.js.map