import { t as Check } from "./check-DcFl0Xqu.js";
import { t as CircleCheckBig } from "./circle-check-big-CIboI23R.js";
import { a as DropdownMenuLabel, i as DropdownMenuItem, n as DropdownMenu, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as ExportButton } from "./ExportButton-CQUcQl3f.js";
import { t as Pencil } from "./pencil-DXc_6jMx.js";
import { t as Trash2 } from "./trash-2-D04WLII6.js";
import { Et as useToast, K as ShieldAlert, L as useSize, Lt as __toESM, Pt as require_react, St as require_jsx_runtime, Tt as composeEventHandlers, V as cn, Z as LoaderCircle, a as Content, bt as createSlottable, c as Portal, d as Trigger, dt as Presence, f as WarningProvider, gt as Primitive, i as Close, jt as useNavigate, l as Root, o as Description, ot as createLucideIcon, p as createDialogScope, s as Overlay, u as Title, ut as useControllableState, v as Button, w as useAuth, wt as useComposedRefs, xt as createContextScope, y as buttonVariants } from "./index-DzjohDXW.js";
import { a as FormItem, d as string, f as a, i as FormField, l as _enum, m as useForm, n as FormControl, o as FormLabel, r as FormDescription, s as FormMessage, t as Form, u as object } from "./form-Dfuu64eZ.js";
import { n as Input, t as Label } from "./label-COIvgApt.js";
import { t as Badge } from "./badge-DUPkkYtn.js";
import { t as usePrevious } from "./dist-BPhT9l3Z.js";
import { c as triggerPasswordReset, l as updateUserPermissions, n as deleteUserProfile, r as getAllProfiles, s as toggleUserBan, t as createUser, u as updateUserRole } from "./admin-DRka-g30.js";
import { a as DialogHeader, c as Table, d as TableHead, f as TableHeader, i as DialogFooter, l as TableBody, n as DialogContent, o as DialogTitle, p as TableRow, r as DialogDescription, s as DialogTrigger, t as Dialog, u as TableCell } from "./dialog-BP7GwD54.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-CmdSU4-O.js";
var Ban = createLucideIcon("ban", [["path", {
	d: "M4.929 4.929 19.07 19.071",
	key: "196cmz"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
var EllipsisVertical = createLucideIcon("ellipsis-vertical", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "12",
		cy: "5",
		r: "1",
		key: "gxeob9"
	}],
	["circle", {
		cx: "12",
		cy: "19",
		r: "1",
		key: "lyex9k"
	}]
]);
var KeyRound = createLucideIcon("key-round", [["path", {
	d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
	key: "1s6t7t"
}], ["circle", {
	cx: "16.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "w0ekpg"
}]]);
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
var TRIGGER_NAME$1 = "AlertDialogTrigger";
var AlertDialogTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...triggerProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		...dialogScope,
		...triggerProps,
		ref: forwardedRef
	});
});
AlertDialogTrigger$1.displayName = TRIGGER_NAME$1;
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
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
	const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: CHECKBOX_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const isFormControl = control ? !!form || !!control.closest("form") : true;
	const context = {
		checked,
		disabled,
		setChecked,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		required,
		defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
		isFormControl,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProviderImpl, {
		scope: __scopeCheckbox,
		...context,
		children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = import_react.forwardRef(({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
	const { control, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const form = control?.form;
		if (form) {
			const reset = () => setChecked(initialCheckedStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [control, setChecked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": isIndeterminate(checked) ? "mixed" : checked,
		"aria-required": required,
		"data-state": getState(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...checkboxProps,
		ref: composedRefs,
		onKeyDown: composeEventHandlers(onKeyDown, (event) => {
			if (event.key === "Enter") event.preventDefault();
		}),
		onClick: composeEventHandlers(onClick, (event) => {
			setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
});
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCheckbox, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProvider, {
		__scopeCheckbox,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxTrigger, {
			...checkboxProps,
			ref: forwardedRef,
			__scopeCheckbox
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxBubbleInput, { __scopeCheckbox })] })
	});
});
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
	const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isIndeterminate(context.checked) || context.checked === true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "none",
				...props.style
			}
		})
	});
});
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = import_react.forwardRef(({ __scopeCheckbox, ...props }, forwardedRef) => {
	const { control, hasConsumerStoppedPropagationRef, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
	const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
	const prevChecked = usePrevious(checked);
	const controlSize = useSize(control);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const bubbles = !hasConsumerStoppedPropagationRef.current;
		if (prevChecked !== checked && setChecked) {
			const event = new Event("click", { bubbles });
			input.indeterminate = isIndeterminate(checked);
			setChecked.call(input, isIndeterminate(checked) ? false : checked);
			input.dispatchEvent(event);
		}
	}, [
		bubbleInput,
		prevChecked,
		checked,
		hasConsumerStoppedPropagationRef
	]);
	const defaultCheckedRef = import_react.useRef(isIndeterminate(checked) ? false : checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
	return typeof value === "function";
}
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("flex items-center justify-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
const EditUserDialog = ({ user, open, onOpenChange, onSuccess }) => {
	const [role, setRole] = (0, import_react.useState)("user");
	const [permissions, setPermissions] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		if (user) {
			setRole(user.role || "user");
			setPermissions(user.permissions || {});
		}
	}, [user]);
	const handleSave = async () => {
		if (!user) return;
		setLoading(true);
		try {
			await updateUserRole(user.id, role);
			await updateUserPermissions(user.id, permissions);
			toast({
				title: "Success",
				description: "User updated successfully"
			});
			onSuccess();
			onOpenChange(false);
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to update user",
				variant: "destructive"
			});
		} finally {
			setLoading(false);
		}
	};
	const togglePermission = (key) => {
		setPermissions((prev) => ({
			...prev,
			[key]: !prev[key]
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-[500px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit User" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: ["Update role and permissions for ", user?.email] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						}),
						role !== "user" && role !== "super_admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-medium text-sm",
								children: "Granular Permissions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											id: "perm-content",
											checked: permissions.content,
											onCheckedChange: () => togglePermission("content")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "perm-content",
											children: "Manage Content"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											id: "perm-users",
											checked: permissions.users,
											onCheckedChange: () => togglePermission("users")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "perm-users",
											children: "Manage Users"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											id: "perm-settings",
											checked: permissions.settings,
											onCheckedChange: () => togglePermission("settings")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "perm-settings",
											children: "Manage Settings"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											id: "perm-audit",
											checked: permissions.audit,
											onCheckedChange: () => togglePermission("audit")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "perm-audit",
											children: "View Audit Logs"
										})]
									})
								]
							})]
						}),
						role === "super_admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md bg-muted p-3 text-sm text-muted-foreground",
							children: "Super Administrators have full access to all features automatically."
						})
					]
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
	const { user, role, hasPermission, loading: authLoading } = useAuth();
	const navigate = useNavigate();
	const [editingUser, setEditingUser] = (0, import_react.useState)(null);
	const [editDialogOpen, setEditDialogOpen] = (0, import_react.useState)(false);
	const [deletingUser, setDeletingUser] = (0, import_react.useState)(null);
	const [deleteDialogOpen, setDeleteDialogOpen] = (0, import_react.useState)(false);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	const [processingId, setProcessingId] = (0, import_react.useState)(null);
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
		if (!authLoading) if (hasPermission("users")) loadProfiles();
		else setLoading(false);
	}, [authLoading, role]);
	const handleEditClick = (profile) => {
		setEditingUser(profile);
		setEditDialogOpen(true);
	};
	const handleDeleteClick = (profile) => {
		setDeletingUser(profile);
		setDeleteDialogOpen(true);
	};
	const confirmDelete = async () => {
		if (!deletingUser) return;
		setIsDeleting(true);
		try {
			await deleteUserProfile(deletingUser.id);
			toast({
				title: "Success",
				description: "User deleted"
			});
			setProfiles((prev) => prev.filter((p) => p.id !== deletingUser.id));
			setDeleteDialogOpen(false);
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to delete user",
				variant: "destructive"
			});
		} finally {
			setIsDeleting(false);
			setDeletingUser(null);
		}
	};
	const handleToggleBan = async (profile) => {
		if (!profile.id) return;
		setProcessingId(profile.id);
		try {
			const newStatus = !profile.is_banned;
			await toggleUserBan(profile.id, newStatus);
			setProfiles((prev) => prev.map((p) => p.id === profile.id ? {
				...p,
				is_banned: newStatus
			} : p));
			toast({
				title: "Success",
				description: `User ${newStatus ? "banned" : "unbanned"} successfully`
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to update user status",
				variant: "destructive"
			});
		} finally {
			setProcessingId(null);
		}
	};
	const handleResetPassword = async (email) => {
		if (!email) return;
		try {
			await triggerPasswordReset(email);
			toast({
				title: "Email Sent",
				description: `Password reset email sent to ${email}`
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to send password reset email",
				variant: "destructive"
			});
		}
	};
	if (authLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[50vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	if (!hasPermission("users")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[50vh] flex-col items-center justify-center gap-4 text-center animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-full bg-destructive/10 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-10 w-10 text-destructive" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "Access Restricted"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground max-w-md mt-2",
				children: "You do not have permission to manage users."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => navigate("/admin"),
				children: "Back to Dashboard"
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, {
						data: profiles,
						filename: "users_export"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateUserDialog, { onSuccess: loadProfiles })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border rounded-md bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User Info" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Joined" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Permissions" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Actions"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 6,
					className: "text-center py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin h-4 w-4" }), "Loading users..."]
					})
				}) }) : profiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 6,
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: profile.role === "super_admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "All"
					}) : profile.permissions ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1",
						children: [Object.entries(profile.permissions).filter(([, v]) => v).map(([k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "text-[10px]",
							children: k
						}, k)), Object.values(profile.permissions).every((v) => !v) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "None"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "None"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: profile.is_banned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "destructive",
						className: "gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "h-3 w-3" }), " Banned"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "text-green-600 border-green-200 gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3 w-3" }), " Active"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: () => handleEditClick(profile),
									disabled: role !== "super_admin" && role !== "admin",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 h-4 w-4" }), "Edit Role & Perms"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: () => handleResetPassword(profile.email),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "mr-2 h-4 w-4" }), "Reset Password"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									onClick: () => handleToggleBan(profile),
									disabled: profile.id === user?.id || role !== "super_admin" && profile.role === "super_admin",
									children: profile.is_banned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "mr-2 h-4 w-4 text-green-600" }), "Unban User"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "mr-2 h-4 w-4 text-destructive" }), "Ban User"] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: () => handleDeleteClick(profile),
									className: "text-destructive focus:text-destructive",
									disabled: role !== "super_admin" || profile.id === user?.id,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), "Delete User"]
								})
							]
						})] })
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

//# sourceMappingURL=UserManagement-DSJad6xD.js.map