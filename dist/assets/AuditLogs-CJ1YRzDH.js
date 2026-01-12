import { t as Eye } from "./eye-D1HqpVtF.js";
import { t as LoaderCircle } from "./loader-circle-BVAV9Uoz.js";
import { E as supabase, Ot as require_react, _t as require_jsx_runtime, g as Button, jt as __toESM, tt as createLucideIcon } from "./index-DHXKWtf3.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-0y4Oc2rB.js";
import { t as Badge } from "./badge-kZFMXYXi.js";
import { t as ScrollArea } from "./scroll-area-Duoh9krs.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-t8q_6w8v.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-NWP8njYw.js";
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
const getAuditLogs = async () => {
	const { data, error } = await supabase.from("audit_logs").select("*").order("created_at", { ascending: false }).limit(100).returns();
	if (error) {
		console.error("Error fetching audit logs:", error);
		return [];
	}
	return data;
};
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function AuditLogs() {
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedLog, setSelectedLog] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		fetchLogs();
	}, []);
	const fetchLogs = async () => {
		setLoading(true);
		setLogs(await getAuditLogs());
		setLoading(false);
	};
	const getActionColor = (action) => {
		switch (action) {
			case "INSERT": return "bg-green-500 hover:bg-green-600";
			case "UPDATE": return "bg-blue-500 hover:bg-blue-600";
			case "DELETE": return "bg-red-500 hover:bg-red-600";
			default: return "bg-gray-500";
		}
	};
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
						children: "Track system changes and activity."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: fetchLogs,
					disabled: loading,
					children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-2 h-4 w-4" }), "Refresh"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Change History" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Timestamp" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Action" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Table" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User ID" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Details"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [logs.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
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
					children: log.user_id ? log.user_id.split("-")[0] + "..." : "System"
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
			}) })] })] }) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!selectedLog,
				onOpenChange: (open) => !open && setSelectedLog(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-4xl max-h-[80vh] flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Audit Log Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						selectedLog?.action,
						" on ",
						selectedLog?.table_name,
						" at",
						" ",
						selectedLog && new Date(selectedLog.created_at).toLocaleString()
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
									children: "No previous data"
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

//# sourceMappingURL=AuditLogs-CJ1YRzDH.js.map