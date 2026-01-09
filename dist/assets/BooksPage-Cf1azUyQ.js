import { B as createContextScope, C as Root2$1, E as cn, F as Portal, H as useComposedRefs, L as DismissableLayer, N as useControllableState, P as Presence, S as Content, U as composeEventHandlers, V as require_jsx_runtime, X as __toESM, Y as require_react, b as Anchor, j as createLucideIcon, o as useLanguage, s as Skeleton, w as createPopperScope, x as Arrow, z as Primitive } from "./index-PX6pJ-En.js";
import { t as useSEO } from "./use-seo-D1ycOCZJ.js";
import { t as getBooks } from "./database-D0EtR00K.js";
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var originalBodyUserSelect;
var HOVERCARD_NAME = "HoverCard";
var [createHoverCardContext, createHoverCardScope] = createContextScope(HOVERCARD_NAME, [createPopperScope]);
var usePopperScope = createPopperScope();
var [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME);
var HoverCard$1 = (props) => {
	const { __scopeHoverCard, children, open: openProp, defaultOpen, onOpenChange, openDelay = 700, closeDelay = 300 } = props;
	const popperScope = usePopperScope(__scopeHoverCard);
	const openTimerRef = import_react.useRef(0);
	const closeTimerRef = import_react.useRef(0);
	const hasSelectionRef = import_react.useRef(false);
	const isPointerDownOnContentRef = import_react.useRef(false);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: HOVERCARD_NAME
	});
	const handleOpen = import_react.useCallback(() => {
		clearTimeout(closeTimerRef.current);
		openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
	}, [openDelay, setOpen]);
	const handleClose = import_react.useCallback(() => {
		clearTimeout(openTimerRef.current);
		if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
	}, [closeDelay, setOpen]);
	const handleDismiss = import_react.useCallback(() => setOpen(false), [setOpen]);
	import_react.useEffect(() => {
		return () => {
			clearTimeout(openTimerRef.current);
			clearTimeout(closeTimerRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardProvider, {
		scope: __scopeHoverCard,
		open,
		onOpenChange: setOpen,
		onOpen: handleOpen,
		onClose: handleClose,
		onDismiss: handleDismiss,
		hasSelectionRef,
		isPointerDownOnContentRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$1, {
			...popperScope,
			children
		})
	});
};
HoverCard$1.displayName = HOVERCARD_NAME;
var TRIGGER_NAME = "HoverCardTrigger";
var HoverCardTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeHoverCard, ...triggerProps } = props;
	const context = useHoverCardContext(TRIGGER_NAME, __scopeHoverCard);
	const popperScope = usePopperScope(__scopeHoverCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.a, {
			"data-state": context.open ? "open" : "closed",
			...triggerProps,
			ref: forwardedRef,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
			onFocus: composeEventHandlers(props.onFocus, context.onOpen),
			onBlur: composeEventHandlers(props.onBlur, context.onClose),
			onTouchStart: composeEventHandlers(props.onTouchStart, (event) => event.preventDefault())
		})
	});
});
HoverCardTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "HoverCardPortal";
var [PortalProvider, usePortalContext] = createHoverCardContext(PORTAL_NAME, { forceMount: void 0 });
var HoverCardPortal = (props) => {
	const { __scopeHoverCard, forceMount, children, container } = props;
	const context = useHoverCardContext(PORTAL_NAME, __scopeHoverCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeHoverCard,
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
HoverCardPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "HoverCardContent";
var HoverCardContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeHoverCard);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useHoverCardContext(CONTENT_NAME, props.__scopeHoverCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContentImpl, {
			"data-state": context.open ? "open" : "closed",
			...contentProps,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
			ref: forwardedRef
		})
	});
});
HoverCardContent$1.displayName = CONTENT_NAME;
var HoverCardContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeHoverCard, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
	const context = useHoverCardContext(CONTENT_NAME, __scopeHoverCard);
	const popperScope = usePopperScope(__scopeHoverCard);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const [containSelection, setContainSelection] = import_react.useState(false);
	import_react.useEffect(() => {
		if (containSelection) {
			const body = document.body;
			originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
			body.style.userSelect = "none";
			body.style.webkitUserSelect = "none";
			return () => {
				body.style.userSelect = originalBodyUserSelect;
				body.style.webkitUserSelect = originalBodyUserSelect;
			};
		}
	}, [containSelection]);
	import_react.useEffect(() => {
		if (ref.current) {
			const handlePointerUp = () => {
				setContainSelection(false);
				context.isPointerDownOnContentRef.current = false;
				setTimeout(() => {
					if (document.getSelection()?.toString() !== "") context.hasSelectionRef.current = true;
				});
			};
			document.addEventListener("pointerup", handlePointerUp);
			return () => {
				document.removeEventListener("pointerup", handlePointerUp);
				context.hasSelectionRef.current = false;
				context.isPointerDownOnContentRef.current = false;
			};
		}
	}, [context.isPointerDownOnContentRef, context.hasSelectionRef]);
	import_react.useEffect(() => {
		if (ref.current) getTabbableNodes(ref.current).forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
		asChild: true,
		disableOutsidePointerEvents: false,
		onInteractOutside,
		onEscapeKeyDown,
		onPointerDownOutside,
		onFocusOutside: composeEventHandlers(onFocusOutside, (event) => {
			event.preventDefault();
		}),
		onDismiss: context.onDismiss,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
			...popperScope,
			...contentProps,
			onPointerDown: composeEventHandlers(contentProps.onPointerDown, (event) => {
				if (event.currentTarget.contains(event.target)) setContainSelection(true);
				context.hasSelectionRef.current = false;
				context.isPointerDownOnContentRef.current = true;
			}),
			ref: composedRefs,
			style: {
				...contentProps.style,
				userSelect: containSelection ? "text" : void 0,
				WebkitUserSelect: containSelection ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
});
var ARROW_NAME = "HoverCardArrow";
var HoverCardArrow = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeHoverCard, ...arrowProps } = props;
	const popperScope = usePopperScope(__scopeHoverCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		...popperScope,
		...arrowProps,
		ref: forwardedRef
	});
});
HoverCardArrow.displayName = ARROW_NAME;
function excludeTouch(eventHandler) {
	return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
function getTabbableNodes(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
var Root2 = HoverCard$1;
var Trigger = HoverCardTrigger$1;
var Content2 = HoverCardContent$1;
var HoverCard = Root2;
var HoverCardTrigger = Trigger;
var HoverCardContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]", className),
	...props
}));
HoverCardContent.displayName = Content2.displayName;
function BooksPage() {
	const { t, language } = useLanguage();
	const [books, setBooks] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: t.books.title,
		description: "A curated list of books I recommend"
	});
	(0, import_react.useEffect)(() => {
		getBooks(language).then(({ data }) => {
			if (data) setBooks(data);
			setLoading(false);
		});
	}, [language]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-bold",
			children: t.books.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6",
			children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 w-full rounded-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-3/4" })]
			}, i)) : books.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HoverCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group cursor-pointer space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[2/3] overflow-hidden rounded-md shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: book.cover_url,
						alt: book.title,
						className: "w-full h-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex text-yellow-400",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3 w-3 ${i < book.rating ? "fill-current" : "text-gray-400"}` }, i))
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-sm leading-tight truncate",
					children: book.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground truncate",
					children: book.author
				})] })]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContent, {
				className: "w-80",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold",
							children: book.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 text-yellow-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-bold",
								children: [book.rating, "/5"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-current" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground italic",
							children: [
								"\"",
								book.review,
								"\""
							]
						})
					]
				})
			})] }, book.id))
		})]
	});
}
export { BooksPage as default };

//# sourceMappingURL=BooksPage-Cf1azUyQ.js.map