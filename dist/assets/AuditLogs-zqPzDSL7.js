import { t as ExportButton } from "./ExportButton-B5nXQbTq.js";
import { t as PaginationControl } from "./PaginationControl-DoXK964I.js";
import { t as Eye } from "./eye-tk4x66iN.js";
import { Ct as require_jsx_runtime, Ft as require_react, Q as LoaderCircle, Rt as __toESM, k as supabase, st as createLucideIcon, v as Button, w as useAuth } from "./index-DEnmuh5e.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-EswSyFPZ.js";
import { t as Badge } from "./badge-CyFmpbhT.js";
import { t as ScrollArea } from "./scroll-area-C00FBqIm.js";
import { a as DialogHeader, c as Table, d as TableHead, f as TableHeader, l as TableBody, n as DialogContent, o as DialogTitle, p as TableRow, r as DialogDescription, t as Dialog, u as TableCell } from "./dialog-D0lo0Sb6.js";
var RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const getAuditLogsPaginated = async (page = 1, limit = 10) => {
	const from = (page - 1) * limit;
	const to = from + limit - 1;
	const { data, error, count } = await supabase.from("audit_logs").select("*", { count: "exact" }).order("created_at", { ascending: false }).range(from, to).returns();
	if (error) throw error;
	return {
		data: data || [],
		count: count || 0,
		totalPages: count ? Math.ceil(count / limit) : 0
	};
};
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function AuditLogs() {
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedLog, setSelectedLog] = (0, import_react.useState)(null);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [totalPages, setTotalPages] = (0, import_react.useState)(1);
	const { hasPermission } = useAuth();
	const pageSize = 10;
	(0, import_react.useEffect)(() => {
		if (hasPermission("audit")) fetchLogs();
		else setLoading(false);
	}, [currentPage]);
	const fetchLogs = async () => {
		setLoading(true);
		try {
			const { data, count, totalPages: total } = await getAuditLogsPaginated(currentPage, pageSize);
			setLogs(data);
			setTotalPages(total);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};
	const getActionColor = (action) => {
		switch (action) {
			case "INSERT": return "bg-green-500 hover:bg-green-600";
			case "UPDATE": return "bg-blue-500 hover:bg-blue-600";
			case "DELETE": return "bg-red-500 hover:bg-red-600";
			default: return "bg-gray-500";
		}
	};
	if (!hasPermission("audit")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[50vh] flex-col items-center justify-center gap-4 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-bold",
			children: "Access Restricted"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "You do not have permission to view audit logs."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold",
						children: "Audit Logs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Track system changes and activity for accountability."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, {
						data: logs,
						filename: "audit_logs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: fetchLogs,
						disabled: loading,
						children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-2 h-4 w-4" }), "Refresh"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Change History" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Timestamp" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Action" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Table" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User ID" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Details"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 5,
				className: "h-24 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin mx-auto text-muted-foreground" })
			}) }) : logs.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-mono text-xs text-muted-foreground",
					children: new Date(log.created_at).toLocaleString()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: `${getActionColor(log.action)} text-white`,
					children: log.action
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: log.table_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-mono text-xs text-muted-foreground",
					children: log.user_id ? log.user_id : "System/Unknown"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => setSelectedLog(log),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "View Details"
						})]
					})
				})
			] }, log.id)), !loading && logs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 5,
				className: "text-center h-24",
				children: "No activity recorded yet."
			}) })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationControl, {
				currentPage,
				totalPages,
				onPageChange: setCurrentPage
			})] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!selectedLog,
				onOpenChange: (open) => !open && setSelectedLog(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-4xl max-h-[80vh] flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Audit Log Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						selectedLog?.action,
						" on ",
						selectedLog?.table_name,
						" by",
						" ",
						selectedLog?.user_id
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-hidden min-h-[300px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "font-semibold text-sm flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-red-500" }), "Old Data (Before)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
								className: "flex-1 rounded-md border p-4 bg-muted/30",
								children: selectedLog?.old_data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "text-xs font-mono whitespace-pre-wrap break-all text-muted-foreground",
									children: JSON.stringify(selectedLog.old_data, null, 2)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center h-full text-muted-foreground text-sm italic",
									children: "No previous data (Insert)"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "font-semibold text-sm flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-green-500" }), "New Data (After)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
								className: "flex-1 rounded-md border p-4 bg-muted/30",
								children: selectedLog?.new_data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "text-xs font-mono whitespace-pre-wrap break-all text-muted-foreground",
									children: JSON.stringify(selectedLog.new_data, null, 2)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center h-full text-muted-foreground text-sm italic",
									children: "Deleted"
								})
							})]
						})]
					})]
				})
			})
		]
	});
}
export { AuditLogs as default };

//# sourceMappingURL=AuditLogs-zqPzDSL7.js.map