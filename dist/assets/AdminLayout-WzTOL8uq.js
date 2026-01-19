import { t as Bell } from "./bell-CyujkRpz.js";
import { t as Check } from "./check-Dekdk3td.js";
import { t as ExternalLink } from "./external-link-cNSp1umW.js";
import { n as MessageSquare, t as Users } from "./users-AReBGWbX.js";
import { t as ShieldAlert } from "./shield-alert-DX8rcYc6.js";
import { At as useNavigate, B as Toaster, Ct as useComposedRefs, Dt as Navigate, Et as Link, F as Root2$1, I as createPopperScope, It as __toESM, J as Menu, K as Music, M as Anchor, N as Arrow, Nt as require_react, Ot as Outlet, P as Content, Q as LayoutDashboard, R as useId, S as LanguageSwitch, U as X, V as cn, X as LoaderCircle, _ as FocusScope, a as Content$1, at as createLucideIcon, bt as createContextScope, c as Portal$2, d as Trigger$1, dt as Portal, et as House, g as useFocusGuards, h as Combination_default, ht as Primitive, i as Close, it as BookOpen, kt as useLocation, l as Root, lt as useControllableState, m as hideOthers, nt as FileText, o as Description, ot as cva, pt as DismissableLayer, s as Overlay, u as Title, ut as Presence, v as Button, vt as createSlot, w as useAuth, wt as composeEventHandlers, xt as require_jsx_runtime } from "./index-Z5VPL8x_.js";
import { t as Badge } from "./badge-cl3Ro7mI.js";
import { t as ScrollArea } from "./scroll-area-CWHj4e1Y.js";
import { a as markAllNotificationsAsRead, i as getNotifications, o as markNotificationAsRead } from "./admin-C6s0CL5j.js";
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
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
const AdminSidebar = ({ onNavigate }) => {
	const location = useLocation();
	const { hasPermission, signOut } = useAuth();
	const navigate = useNavigate();
	const items = [
		{
			title: "Overview",
			url: "/admin",
			icon: LayoutDashboard,
			alwaysShow: true
		},
		{
			title: "Contacts",
			url: "/admin/contacts",
			icon: MessageSquare,
			permission: "content"
		},
		{
			title: "Books",
			url: "/admin/books",
			icon: BookOpen,
			permission: "content"
		},
		{
			title: "Music",
			url: "/admin/music",
			icon: Music,
			permission: "content"
		},
		{
			title: "Resume",
			url: "/admin/resume",
			icon: FileText,
			permission: "content"
		},
		{
			title: "Audit Logs",
			url: "/admin/audit-logs",
			icon: ShieldAlert,
			permission: "audit"
		},
		{
			title: "Settings",
			url: "/admin/settings",
			icon: Settings,
			permission: "settings"
		},
		{
			title: "Users",
			url: "/admin/users",
			icon: Users,
			permission: "users"
		}
	].filter((item) => item.alwaysShow || hasPermission(item.permission));
	const handleLogout = async () => {
		await signOut();
		navigate("/admin/login");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full w-full bg-card border-r",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6 h-16 flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold tracking-tight",
					children: "Admin"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 px-3 py-2 space-y-1 overflow-y-auto",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.url,
					onClick: onNavigate,
					className: cn("flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors", location.pathname === item.url ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.title]
				}, item.url))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 border-t space-y-4 mt-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
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
						className: "w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10",
						onClick: handleLogout,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), "Logout"]
					})]
				})]
			})
		]
	});
};
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [createPopperScope]);
var usePopperScope = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover$1 = (props) => {
	const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
	const popperScope = usePopperScope(__scopePopover);
	const triggerRef = import_react.useRef(null);
	const [hasCustomAnchor, setHasCustomAnchor] = import_react.useState(false);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: POPOVER_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$1, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverProvider, {
			scope: __scopePopover,
			contentId: useId(),
			triggerRef,
			open,
			onOpenChange: setOpen,
			onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
			hasCustomAnchor,
			onCustomAnchorAdd: import_react.useCallback(() => setHasCustomAnchor(true), []),
			onCustomAnchorRemove: import_react.useCallback(() => setHasCustomAnchor(false), []),
			modal,
			children
		})
	});
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = import_react.forwardRef((props, forwardedRef) => {
	const { __scopePopover, ...anchorProps } = props;
	const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
	const popperScope = usePopperScope(__scopePopover);
	const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
	import_react.useEffect(() => {
		onCustomAnchorAdd();
		return () => onCustomAnchorRemove();
	}, [onCustomAnchorAdd, onCustomAnchorRemove]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		...popperScope,
		...anchorProps,
		ref: forwardedRef
	});
});
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopePopover, ...triggerProps } = props;
	const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
	const popperScope = usePopperScope(__scopePopover);
	const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
	const trigger = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": context.open,
		"aria-controls": context.contentId,
		"data-state": getState(context.open),
		...triggerProps,
		ref: composedTriggerRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
	return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: true,
		...popperScope,
		children: trigger
	});
});
PopoverTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, { forceMount: void 0 });
var PopoverPortal = (props) => {
	const { __scopePopover, forceMount, children, container } = props;
	const context = usePopoverContext(PORTAL_NAME, __scopePopover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopePopover,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children
			})
		})
	});
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
});
PopoverContent$1.displayName = CONTENT_NAME;
var Slot = createSlot("PopoverContent.RemoveScroll");
var PopoverContentModal = import_react.forwardRef((props, forwardedRef) => {
	const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	const isRightClickOutsideRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combination_default, {
		as: Slot,
		allowPinchZoom: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentImpl, {
			...props,
			ref: composedRefs,
			trapFocus: context.open,
			disableOutsidePointerEvents: true,
			onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
				event.preventDefault();
				if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
				const originalEvent = event.detail.originalEvent;
				const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
				isRightClickOutsideRef.current = originalEvent.button === 2 || ctrlLeftClick;
			}, { checkForDefaultPrevented: false }),
			onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault(), { checkForDefaultPrevented: false })
		})
	});
});
var PopoverContentNonModal = import_react.forwardRef((props, forwardedRef) => {
	const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
});
var PopoverContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
	const context = usePopoverContext(CONTENT_NAME, __scopePopover);
	const popperScope = usePopperScope(__scopePopover);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			asChild: true,
			disableOutsidePointerEvents,
			onInteractOutside,
			onEscapeKeyDown,
			onPointerDownOutside,
			onFocusOutside,
			onDismiss: () => context.onOpenChange(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
				"data-state": getState(context.open),
				role: "dialog",
				id: context.contentId,
				...popperScope,
				...contentProps,
				ref: forwardedRef,
				style: {
					...contentProps.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
});
var CLOSE_NAME = "PopoverClose";
var PopoverClose = import_react.forwardRef((props, forwardedRef) => {
	const { __scopePopover, ...closeProps } = props;
	const context = usePopoverContext(CLOSE_NAME, __scopePopover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
});
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = import_react.forwardRef((props, forwardedRef) => {
	const { __scopePopover, ...arrowProps } = props;
	const popperScope = usePopperScope(__scopePopover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		...popperScope,
		...arrowProps,
		ref: forwardedRef
	});
});
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
	return open ? "open" : "closed";
}
var Root2 = Popover$1;
var Trigger = PopoverTrigger$1;
var Portal$1 = PopoverPortal;
var Content2 = PopoverContent$1;
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
const Notifications = () => {
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const fetchNotifications = async () => {
		setLoading(true);
		try {
			setNotifications(await getNotifications() || []);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchNotifications();
		const interval = setInterval(fetchNotifications, 6e4);
		return () => clearInterval(interval);
	}, []);
	const unreadCount = notifications.filter((n) => !n.read).length;
	const handleMarkAsRead = async (id, e) => {
		if (e) e.stopPropagation();
		try {
			await markNotificationAsRead(id);
			setNotifications((prev) => prev.map((n) => n.id === id ? {
				...n,
				read: true
			} : n));
		} catch (error) {
			console.error(error);
		}
	};
	const handleMarkAllRead = async () => {
		try {
			await markAllNotificationsAsRead();
			setNotifications((prev) => prev.map((n) => ({
				...n,
				read: true
			})));
		} catch (error) {
			console.error(error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "icon",
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "destructive",
					className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px]",
					children: unreadCount
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
			className: "w-80 p-0",
			align: "end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between p-4 border-b",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold",
					children: "Notifications"
				}), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-xs h-auto py-1",
					onClick: handleMarkAllRead,
					children: "Mark all read"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
				className: "h-[300px]",
				children: loading && notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center h-full text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }), "Loading..."]
				}) : notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center h-full text-muted-foreground p-4 text-sm",
					children: "No notifications"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y",
					children: notifications.map((notification) => {
						const Content$2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("p-4 transition-colors hover:bg-muted/50 flex gap-3 cursor-pointer", !notification.read && "bg-muted/20"),
							onClick: () => {
								if (!notification.read) handleMarkAsRead(notification.id);
								if (notification.link) setOpen(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: cn("text-sm font-medium leading-none", !notification.read && "font-semibold"),
											children: notification.title
										}), notification.link && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3 text-muted-foreground" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: notification.message
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] text-muted-foreground/60",
										children: [
											new Date(notification.created_at).toLocaleDateString(),
											" ",
											new Date(notification.created_at).toLocaleTimeString()
										]
									})
								]
							}), !notification.read && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-6 w-6 shrink-0",
								onClick: (e) => handleMarkAsRead(notification.id, e),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Mark read"
								})]
							})]
						});
						return notification.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: notification.link,
							className: "block",
							children: Content$2
						}, notification.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: Content$2 }, notification.id);
					})
				})
			})]
		})]
	});
};
var Sheet = Root;
var SheetTrigger = Trigger$1;
var SheetPortal = Portal$2;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = Overlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = Content$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = Title.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = Description.displayName;
const AdminHeader = () => {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "icon",
						className: "md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Toggle Menu"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					side: "left",
					className: "p-0 w-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, { onNavigate: () => setOpen(false) })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-semibold md:hidden",
					children: "Admin Panel"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notifications, {})
			})
		]
	});
};
function AdminLayout() {
	const { user, role, loading } = useAuth();
	const location = useLocation();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Verificando acesso..."
			})]
		})
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/login",
		state: { from: location },
		replace: true
	});
	if (!role || ![
		"admin",
		"super_admin",
		"editor"
	].includes(role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-full bg-destructive/10 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-8 w-8 text-destructive",
					children: "🚫"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Acesso Negado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground max-w-md",
				children: "Você não tem permissão para acessar a área administrativa. Entre em contato com o administrador do sistema se acreditar que isso é um erro."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => window.location.href = "/",
				className: "text-primary hover:underline underline-offset-4 text-sm",
				children: "Voltar para o site"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-background w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden md:block w-64 fixed inset-y-0 left-0 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col md:pl-64 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 overflow-y-auto bg-muted/5 p-4 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-6xl mx-auto w-full animate-fade-in",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {})
		]
	});
}
export { AdminLayout as default };

//# sourceMappingURL=AdminLayout-WzTOL8uq.js.map