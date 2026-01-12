import { t as LoaderCircle } from "./loader-circle-DDRBNwLd.js";
import { t as Pencil } from "./pencil-_a3NRBiV.js";
import { n as getAllProfiles, o as updateUserRole, s as ShieldAlert, t as createUser } from "./admin-CBCGbsHn.js";
import { Ct as composeEventHandlers, Ft as __toESM, Mt as require_react, St as useComposedRefs, V as cn, a as Content, bt as require_jsx_runtime, c as Portal, d as Trigger, f as WarningProvider, i as Close, it as createLucideIcon, kt as useNavigate, l as Root, o as Description, p as createDialogScope, s as Overlay, u as Title, v as Button, vt as createSlottable, w as useAuth, wt as useToast, y as buttonVariants, yt as createContextScope } from "./index-B_MaAK1e.js";
import { a as FormItem, d as string, f as a, i as FormField, l as _enum, m as useForm, n as FormControl, o as FormLabel, r as FormDescription, s as FormMessage, t as Form, u as object } from "./form-BBY34ZWg.js";
import { n as Input, t as Label } from "./label-4lRibj53.js";
import { t as Badge } from "./badge-DEzbe_iE.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-DsHMFuTh.js";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-ws9WfP13.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-_1p13d35.js";
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
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
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [createDialogScope]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
	const { __scopeAlertDialog, ...alertDialogProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		...dialogScope,
		...alertDialogProps,
		modal: true
	});
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...triggerProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		...dialogScope,
		...triggerProps,
		ref: forwardedRef
	});
});
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
	const { __scopeAlertDialog, ...portalProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		...dialogScope,
		...portalProps
	});
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...overlayProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		...dialogScope,
		...overlayProps,
		ref: forwardedRef
	});
});
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, children, ...contentProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	const cancelRef = import_react.useRef(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningProvider, {
		contentName: CONTENT_NAME,
		titleName: TITLE_NAME,
		docsSlug: "alert-dialog",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContentProvider, {
			scope: __scopeAlertDialog,
			cancelRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
				role: "alertdialog",
				...dialogScope,
				...contentProps,
				ref: composedRefs,
				onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
					event.preventDefault();
					cancelRef.current?.focus({ preventScroll: true });
				}),
				onPointerDownOutside: (event) => event.preventDefault(),
				onInteractOutside: (event) => event.preventDefault(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning, { contentRef })]
			})
		})
	});
});
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...titleProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
		...dialogScope,
		...titleProps,
		ref: forwardedRef
	});
});
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...descriptionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
		...dialogScope,
		...descriptionProps,
		ref: forwardedRef
	});
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...actionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, {
		...dialogScope,
		...actionProps,
		ref: forwardedRef
	});
});
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...cancelProps } = props;
	const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const ref = useComposedRefs(forwardedRef, cancelRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, {
		...dialogScope,
		...cancelProps,
		ref
	});
});
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
	const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
	import_react.useEffect(() => {
		if (!document.getElementById(contentRef.current?.getAttribute("aria-describedby"))) console.warn(MESSAGE);
	}, [MESSAGE, contentRef]);
	return null;
};
var Root2 = AlertDialog$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
var AlertDialog = Root2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
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
const EditUserDialog = ({ user, open, onOpenChange, onSuccess }) => {
	const [role, setRole] = (0, import_react.useState)("user");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		if (user) setRole(user.role || "user");
	}, [user]);
	const handleSave = async () => {
		if (!user) return;
		setLoading(true);
		try {
			await updateUserRole(user.id, role);
			toast({
				title: "Success",
				description: "User role updated"
			});
			onSuccess();
			onOpenChange(false);
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to update user role",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-[425px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit User" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: ["Update permissions for ", user?.email] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-4 items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "role",
							className: "text-right",
							children: "Role"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: role,
								onValueChange: setRole,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "role",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a role" })
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
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					onClick: () => onOpenChange(false),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					onClick: handleSave,
					disabled: loading,
					children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Save Changes"]
				})] })
			]
		})
	});
};
function UserManagement() {
	const [profiles, setProfiles] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const { toast } = useToast();
	const { user, role, loading: authLoading } = useAuth();
	const navigate = useNavigate();
	const [editingUser, setEditingUser] = (0, import_react.useState)(null);
	const [editDialogOpen, setEditDialogOpen] = (0, import_react.useState)(false);
	const [deletingUser, setDeletingUser] = (0, import_react.useState)(null);
	const [deleteDialogOpen, setDeleteDialogOpen] = (0, import_react.useState)(false);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
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
		if (!authLoading && (role === "super_admin" || role === "admin")) loadProfiles();
		else if (!authLoading && role && role !== "super_admin" && role !== "admin") setLoading(false);
	}, [role, authLoading]);
	if (authLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[50vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	if (role !== "super_admin" && role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[50vh] flex-col items-center justify-center gap-4 text-center animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-full bg-destructive/10 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-10 w-10 text-destructive" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "Acesso Restrito"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground max-w-md mt-2",
				children: "Você não tem permissão para gerenciar usuários. Esta seção é reservada para administradores."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => navigate("/admin"),
				children: "Voltar ao Dashboard"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold",
						children: "User Management"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Manage user roles, permissions and accounts."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateUserDialog, { onSuccess: loadProfiles })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border rounded-md bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User Info" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Joined" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Actions"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 4,
					className: "text-center py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin h-4 w-4" }), "Loading users..."]
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
						className: profile.role === "super_admin" ? "border-primary text-primary" : profile.role === "admin" ? "border-blue-500 text-blue-500" : "",
						children: profile.role || "user"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => handleEditClick(profile),
								disabled: role !== "super_admin",
								title: role !== "super_admin" ? "Only Super Admin can edit roles" : "Edit user role",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "text-destructive hover:text-destructive hover:bg-destructive/10",
								onClick: () => handleDeleteClick(profile),
								disabled: role !== "super_admin" || profile.id === user?.id,
								title: role !== "super_admin" ? "Only Super Admin can delete users" : "Delete user",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})
					})
				] }, profile.id)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditUserDialog, {
				user: editingUser,
				open: editDialogOpen,
				onOpenChange: setEditDialogOpen,
				onSuccess: loadProfiles
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: deleteDialogOpen,
				onOpenChange: setDeleteDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Are you absolutely sure?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete the user account and remove their data from our servers." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
					disabled: isDeleting,
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogAction, {
					onClick: (e) => {
						e.preventDefault();
						confirmDelete();
					},
					disabled: isDeleting,
					className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
					children: [isDeleting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Delete User"]
				})] })] })
			})
		]
	});
}
export { UserManagement as default };

//# sourceMappingURL=UserManagement-BhnaQWMY.js.map