import { t as CircleCheck } from "./circle-check-C1VUrrx3.js";
import { A as useAnalytics, It as __toESM, Nt as require_react, T as useLanguage, Tt as useToast, X as LoaderCircle, Y as Mail, at as createLucideIcon, k as supabase, v as Button, xt as require_jsx_runtime } from "./index-BW8M9qXG.js";
import { t as useSEO } from "./use-seo-Cyc6kDbM.js";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-DtbxVFnJ.js";
import { a as FormItem, d as string, f as a, i as FormField, m as useForm, n as FormControl, o as FormLabel, s as FormMessage, t as Form, u as object } from "./form-BoFZnTCa.js";
import { n as Input } from "./label-DVZLs76x.js";
import { t as Textarea } from "./textarea-4TWL4ZDu.js";
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
async function submitContactForm(data) {
	return await supabase.from("contact_submissions").insert(data);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ContactPage() {
	const { t } = useLanguage();
	const { toast } = useToast();
	const { trackContactSubmit } = useAnalytics();
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	useSEO({
		title: `${t.contact.title} — Mariana Azevedo`,
		description: t.contact.description
	});
	const form = useForm({
		resolver: a(object({
			name: string().min(2, t.contact.validation?.name || "Name must be at least 2 characters"),
			email: string().email(t.contact.validation?.email || "Invalid email address"),
			message: string().min(10, t.contact.validation?.message || "Message must be at least 10 characters"),
			company: string().optional()
		})),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			message: "",
			company: ""
		}
	});
	const { isValid } = form.formState;
	const onSubmit = async (values) => {
		if (values.company) {
			setIsSuccess(true);
			form.reset();
			return;
		}
		setIsSubmitting(true);
		try {
			const formspreeEndpoint = "https://formspree.io/f/PLACEHOLDER";
			if (formspreeEndpoint.includes("PLACEHOLDER")) {} else if (!(await fetch(formspreeEndpoint, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: values.name,
					email: values.email,
					message: values.message,
					_subject: `[Portfólio] Nova mensagem de ${values.name}`,
					_origin: window.location.href
				})
			})).ok) throw new Error("Formspree submission failed");
			const { error } = await submitContactForm({
				name: values.name,
				email: values.email,
				message: values.message,
				origin: window.location.href
			});
			if (error) throw error;
			setIsSuccess(true);
			trackContactSubmit(true);
			toast({
				title: t.contact.success,
				variant: "default"
			});
			form.reset();
		} catch (error) {
			console.error(error);
			trackContactSubmit(false);
			toast({
				title: t.contact.error,
				variant: "destructive"
			});
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-12 max-w-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 text-center mb-8 animate-fade-in-down",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-bold tracking-tight",
				children: t.contact.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-muted-foreground",
				children: t.contact.description
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "animate-fade-in-up shadow-xl border-primary/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "bg-muted/30 pb-6 border-b border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-primary" }), t.contact.title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: t.contact.description })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "pt-6",
				children: isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-16 w-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-green-800 dark:text-green-300",
							children: t.contact.success
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setIsSuccess(false),
							className: "mt-4",
							children: t.contact.send_another
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
					...form,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: form.handleSubmit(onSubmit),
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: form.control,
								name: "company",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormItem, {
									className: "hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										...field,
										tabIndex: -1,
										autoComplete: "off"
									}) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: form.control,
								name: "name",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: t.contact.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Ex: Mariana Azevedo",
										...field,
										className: "bg-background/50"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: form.control,
								name: "email",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: t.contact.email }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Ex: mariana@example.com",
										type: "email",
										...field,
										className: "bg-background/50"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: form.control,
								name: "message",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: t.contact.message }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										placeholder: t.contact.message,
										className: "min-h-[120px] bg-background/50 resize-y",
										...field
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full font-semibold shadow-lg hover:shadow-xl transition-all",
								disabled: isSubmitting || !isValid,
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), t.contact.sending] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 h-4 w-4" }), t.contact.send] })
							})
						]
					})
				})
			})]
		})]
	});
}
export { ContactPage as default };

//# sourceMappingURL=ContactPage-B-SqFfiV.js.map