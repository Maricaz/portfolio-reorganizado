import { t as ChevronLeft } from "./chevron-left-Cf-TKbdl.js";
import { t as ChevronRight } from "./chevron-right-CA3rs9Bu.js";
import { Lt as __toESM, Pt as require_react, St as require_jsx_runtime, V as cn, ot as createLucideIcon, y as buttonVariants } from "./index-BZhoeJHC.js";
var Ellipsis = createLucideIcon("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var Pagination = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: cn("mx-auto flex w-full justify-center", className),
	...props
});
Pagination.displayName = "Pagination";
var PaginationContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
	ref,
	className: cn("flex flex-row items-center gap-1", className),
	...props
}));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
	ref,
	className: cn("", className),
	...props
}));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({ className, isActive, size = "icon", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
	"aria-current": isActive ? "page" : void 0,
	className: cn(buttonVariants({
		variant: isActive ? "outline" : "ghost",
		size
	}), className),
	...props
});
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationLink, {
	"aria-label": "Go to previous page",
	size: "default",
	className: cn("gap-1 pl-2.5", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Previous" })]
});
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationLink, {
	"aria-label": "Go to next page",
	size: "default",
	className: cn("gap-1 pr-2.5", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
});
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
	"aria-hidden": true,
	className: cn("flex h-9 w-9 items-center justify-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: "More pages"
	})]
});
PaginationEllipsis.displayName = "PaginationEllipsis";
function PaginationControl({ currentPage, totalPages, onPageChange }) {
	if (totalPages <= 1) return null;
	const getPageNumbers = () => {
		const pages = [];
		if (totalPages <= 5) for (let i = 1; i <= totalPages; i++) pages.push(i);
		else if (currentPage <= 3) {
			for (let i = 1; i <= 4; i++) pages.push(i);
			pages.push(-1);
			pages.push(totalPages);
		} else if (currentPage >= totalPages - 2) {
			pages.push(1);
			pages.push(-1);
			for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
		} else {
			pages.push(1);
			pages.push(-1);
			pages.push(currentPage - 1);
			pages.push(currentPage);
			pages.push(currentPage + 1);
			pages.push(-1);
			pages.push(totalPages);
		}
		return pages;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, {
		className: "mt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationPrevious, {
				onClick: () => onPageChange(Math.max(1, currentPage - 1)),
				className: currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
			}) }),
			getPageNumbers().map((page, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: page === -1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationEllipsis, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationLink, {
				isActive: currentPage === page,
				onClick: () => onPageChange(page),
				className: "cursor-pointer",
				children: page
			}) }, index)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationNext, {
				onClick: () => onPageChange(Math.min(totalPages, currentPage + 1)),
				className: currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
			}) })
		] })
	});
}
export { PaginationControl as t };

//# sourceMappingURL=PaginationControl-hCG6jVJk.js.map