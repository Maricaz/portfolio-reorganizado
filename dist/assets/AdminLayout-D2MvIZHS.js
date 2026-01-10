import { $ as useNavigate, C as Toaster, I as BookOpen, K as require_jsx_runtime, L as createLucideIcon, M as House, O as Music, P as FileText, Q as useLocation, X as Link, Z as Outlet, d as Button, nt as require_react, rt as __toESM, t as useAuth, w as cn } from "./index-7n91VYFD.js";
var LayoutDashboard = createLucideIcon("layout-dashboard", [
	["rect", {
		width: "7",
		height: "9",
		x: "3",
		y: "3",
		rx: "1",
		key: "10lvy0"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "14",
		y: "3",
		rx: "1",
		key: "16une8"
	}],
	["rect", {
		width: "7",
		height: "9",
		x: "14",
		y: "12",
		rx: "1",
		key: "1hutg5"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "ldoo1y"
	}]
]);
var LogOut = createLucideIcon("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]);
var Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var items = [
	{
		title: "Overview",
		url: "/admin",
		icon: LayoutDashboard
	},
	{
		title: "Books",
		url: "/admin/books",
		icon: BookOpen
	},
	{
		title: "Music",
		url: "/admin/music",
		icon: Music
	},
	{
		title: "Resume",
		url: "/admin/resume",
		icon: FileText
	},
	{
		title: "Settings",
		url: "/admin/settings",
		icon: Settings
	}
];
const AdminSidebar = () => {
	const location = useLocation();
	const { signOut } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full w-64 bg-card border-r",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold tracking-tight",
					children: "Admin Panel"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 px-3 py-2 space-y-1",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.url,
					className: cn("flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors", location.pathname === item.url ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.title]
				}, item.url))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 border-t space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full justify-start",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "mr-2 h-4 w-4" }), "View Site"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20",
					onClick: () => signOut(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), "Logout"]
				})]
			})
		]
	});
};
function AdminLayout() {
	const { user, role, loading } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!loading) {
			if (!user) navigate("/admin/login");
			else if (role && role !== "admin") {
				console.warn("Unauthorized access attempt by", user.email);
				navigate("/");
			}
		}
	}, [
		user,
		role,
		loading,
		navigate
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-full bg-primary/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-muted-foreground",
				children: "Verifying access..."
			})]
		})
	});
	if (!user || role !== "admin") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen bg-background overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 overflow-y-auto bg-muted/5 p-4 md:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-6xl mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {})
		]
	});
}
export { AdminLayout as default };

//# sourceMappingURL=AdminLayout-D2MvIZHS.js.map