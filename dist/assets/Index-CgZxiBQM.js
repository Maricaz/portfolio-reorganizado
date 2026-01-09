import { t as BookOpen } from "./book-open-GHdaZY1y.js";
import { t as Cpu } from "./cpu-BKi_RZZD.js";
import { t as Download } from "./download-CZNRsazT.js";
import { A as __toESM, E as useNavigate, T as Link, c as useAnalytics, d as Mail, l as cn, m as createLucideIcon, o as useLanguage, r as Button, x as require_jsx_runtime } from "./index-ChgqRT7g.js";
import { n as CardContent, o as useSEO, t as Card } from "./card-Y1fWjslY.js";
var Music2 = createLucideIcon("music-2", [["circle", {
	cx: "8",
	cy: "18",
	r: "4",
	key: "1fc0mg"
}], ["path", {
	d: "M12 18V2l7 4",
	key: "g04rme"
}]]);
var UserRound = createLucideIcon("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function Index() {
	const { t } = useLanguage();
	const navigate = useNavigate();
	const { trackResumeDownload } = useAnalytics();
	const resumeUrl = "/resume.pdf";
	useSEO({
		title: "Mariana Azevedo — Portfólio de TI, Música e Livros",
		description: "Portfólio vivo."
	});
	const handleResumeClick = () => {
		trackResumeDownload();
		window.open(resumeUrl, "_blank");
	};
	const cards = [
		{
			icon: Cpu,
			title: t.home.cards.it,
			href: "/it",
			color: "text-blue-500"
		},
		{
			icon: Music2,
			title: t.home.cards.music,
			href: "/music",
			color: "text-purple-500"
		},
		{
			icon: BookOpen,
			title: t.home.cards.books,
			href: "/books",
			color: "text-green-500"
		},
		{
			icon: UserRound,
			title: t.home.cards.about,
			href: "/about",
			color: "text-pink-500"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen w-full overflow-hidden font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/capa.jpg",
				alt: "Mariana Azevedo",
				className: "h-full w-full object-cover opacity-35"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#f7efe6]/40 to-[#f7efe6] dark:from-zinc-900/40 dark:to-zinc-950/80" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 container mx-auto flex min-h-screen items-center justify-center px-4 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid w-full grid-cols-1 gap-12 md:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center space-y-8 text-center md:items-start md:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up",
							children: t.home.hero_title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl text-muted-foreground sm:text-2xl md:text-3xl font-light animate-fade-in-up delay-100 max-w-2xl",
							children: t.home.hero_subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row animate-fade-in-up delay-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "rounded-full px-8 text-lg gap-2",
								onClick: () => navigate("/contact"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" }), t.home.cta_contact]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "lg",
								className: "rounded-full px-8 text-lg gap-2 bg-background/50 backdrop-blur-sm",
								onClick: handleResumeClick,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-5 w-5" }), t.home.resume_btn]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-soft p-6 rounded-3xl animate-fade-in delay-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4",
						children: cards.map((card, index) => {
							const Icon = card.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: card.href,
								className: "group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									className: "h-full border-primary/10 bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "flex flex-col items-center justify-center p-6 text-center space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cn("p-3 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors", card.color),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-sm sm:text-base leading-tight",
											children: card.title
										})]
									})
								})
							}, index);
						})
					})
				})]
			})
		})]
	});
}
export { Index as default };

//# sourceMappingURL=Index-CgZxiBQM.js.map