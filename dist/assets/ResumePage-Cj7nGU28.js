import { t as Calendar } from "./calendar-Dco2NxVp.js";
import { t as CircleCheck } from "./circle-check-YY01Pb1M.js";
import { t as Download } from "./download-CjcUpwQZ.js";
import { t as ExternalLink } from "./external-link-Cgnv92qN.js";
import { $ as Languages, A as useAnalytics, It as __toESM, Nt as require_react, T as useLanguage, at as createLucideIcon, it as BookOpen, r as Skeleton, t as getSiteSettings, v as Button, xt as require_jsx_runtime } from "./index-DyHnbn0Y.js";
import { t as useSEO } from "./use-seo-V3n7eGng.js";
import { t as Progress } from "./progress-C5xXE-x0.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-SrWkGUVV.js";
import { t as Badge } from "./badge-BC5Fg-WW.js";
import { a as getResumeExperience, c as getResumeSkills, i as getResumeEducation, o as getResumeLanguages, r as getResumeCertifications, s as getResumePublications } from "./resume-BcDa8Kgz.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DdLOIxXl.js";
var Award = createLucideIcon("award", [["path", {
	d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
	key: "1yiouv"
}], ["circle", {
	cx: "12",
	cy: "8",
	r: "6",
	key: "1vp47v"
}]]);
var Briefcase = createLucideIcon("briefcase", [["path", {
	d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
	key: "jecpp"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "6",
	rx: "2",
	key: "i6l2r4"
}]]);
var GraduationCap = createLucideIcon("graduation-cap", [
	["path", {
		d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
		key: "j76jl0"
	}],
	["path", {
		d: "M22 10v6",
		key: "1lu8f3"
	}],
	["path", {
		d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
		key: "1r8lef"
	}]
]);
var MapPin = createLucideIcon("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
var Trophy = createLucideIcon("trophy", [
	["path", {
		d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
		key: "1n3hpd"
	}],
	["path", {
		d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
		key: "rfe1zi"
	}],
	["path", {
		d: "M18 9h1.5a1 1 0 0 0 0-5H18",
		key: "7xy6bh"
	}],
	["path", {
		d: "M4 22h16",
		key: "57wxv0"
	}],
	["path", {
		d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
		key: "1mhfuq"
	}],
	["path", {
		d: "M6 9H4.5a1 1 0 0 1 0-5H6",
		key: "tex48p"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function ResumePage() {
	const { t, language } = useLanguage();
	const { trackResumeDownload } = useAnalytics();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [experience, setExperience] = (0, import_react.useState)([]);
	const [education, setEducation] = (0, import_react.useState)([]);
	const [skills, setSkills] = (0, import_react.useState)([]);
	const [certifications, setCertifications] = (0, import_react.useState)([]);
	const [languages, setLanguages] = (0, import_react.useState)([]);
	const [publications, setPublications] = (0, import_react.useState)([]);
	const [resumeUrl, setResumeUrl] = (0, import_react.useState)(null);
	useSEO({
		title: `${t.resume.title} - Portfolio`,
		description: t.resume.description
	});
	(0, import_react.useEffect)(() => {
		const fetchAllData = async () => {
			try {
				setLoading(true);
				const [exp, edu, ski, cert, lang, pub, settings] = await Promise.all([
					getResumeExperience(),
					getResumeEducation(),
					getResumeSkills(),
					getResumeCertifications(),
					getResumeLanguages(),
					getResumePublications(),
					getSiteSettings()
				]);
				if (exp.data) setExperience(exp.data);
				if (edu.data) setEducation(edu.data);
				if (ski.data) setSkills(ski.data);
				if (cert.data) setCertifications(cert.data);
				if (lang.data) setLanguages(lang.data);
				if (pub.data) setPublications(pub.data);
				if (settings.resume_config?.url) setResumeUrl(settings.resume_config.url);
			} catch (err) {
				console.error("Failed to fetch resume data", err);
			} finally {
				setLoading(false);
			}
		};
		fetchAllData();
	}, []);
	const handleDownload = () => {
		trackResumeDownload();
		if (resumeUrl) window.open(resumeUrl, "_blank");
	};
	const getLocalizedText = (item, field, fallback = "") => {
		return item[`${field}_${language}`] || item[`${field}_en`] || fallback;
	};
	const formatDate = (dateString) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return new Intl.DateTimeFormat(language === "ko" ? "ko-KR" : language === "pt" ? "pt-BR" : "en-US", {
			year: "numeric",
			month: "short"
		}).format(date);
	};
	const groupedSkills = (0, import_react.useMemo)(() => {
		const grouped = {};
		skills.forEach((skill) => {
			const cat = skill.category || "Other";
			if (!grouped[cat]) grouped[cat] = [];
			grouped[cat].push(skill);
		});
		return grouped;
	}, [skills]);
	const LoadingSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: [
			1,
			2,
			3
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "animate-pulse",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-1/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/4" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-full" }) })]
		}, i))
	});
	const tabTriggerClass = "rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 border border-input bg-background hover:bg-purple-500/10 hover:text-purple-600 hover:border-purple-500/50 transition-all shadow-sm";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-8 max-w-4xl space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-fade-in-down",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-bold tracking-tight",
					children: t.resume.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted-foreground",
					children: t.resume.description
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "gap-2",
				onClick: handleDownload,
				disabled: !resumeUrl,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), t.resume.download]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "experience",
			className: "space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
				className: "flex flex-wrap h-auto w-full justify-start gap-2 bg-transparent p-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "experience",
						className: tabTriggerClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "mr-2 h-4 w-4" }), t.resume.experience]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "skills",
						className: tabTriggerClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "mr-2 h-4 w-4" }), t.resume.skills]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "education",
						className: tabTriggerClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "mr-2 h-4 w-4" }), t.resume.education]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "certifications",
						className: tabTriggerClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-2 h-4 w-4" }), t.resume.certifications]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "languages",
						className: tabTriggerClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "mr-2 h-4 w-4" }), t.resume.languages]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "publications",
						className: tabTriggerClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mr-2 h-4 w-4" }), t.resume.publications]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-[400px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "experience",
						className: "space-y-6 animate-fade-in",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingSkeleton, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative border-l-2 border-primary/20 ml-3 space-y-12",
							children: experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative pl-8 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col md:flex-row md:items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold group-hover:text-primary transition-colors",
											children: getLocalizedText(item, "role")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-lg font-medium text-muted-foreground",
											children: item.company
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm text-muted-foreground whitespace-nowrap flex flex-col items-start md:items-end",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1 font-medium text-primary",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
													formatDate(item.start_date),
													" -",
													" ",
													item.is_current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "secondary",
														className: "text-[10px] px-1",
														children: t.resume.present
													}) : formatDate(item.end_date)
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1 mt-1 opacity-75",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), getLocalizedText(item, "location")]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground/90 whitespace-pre-line text-sm md:text-base leading-relaxed",
										children: getLocalizedText(item, "description")
									})]
								})]
							}, item.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "skills",
						className: "animate-fade-in",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingSkeleton, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-8",
							children: Object.entries(groupedSkills).map(([category, catSkills]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "bg-muted/30 pb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
									className: "text-lg font-bold flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" }), category]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "pt-6 grid gap-4",
								children: catSkills.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground text-xs",
											children: [item.proficiency, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: item.proficiency,
										className: "h-2 bg-secondary"
									})]
								}, item.id))
							})] }, category))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "education",
						className: "space-y-6 animate-fade-in",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingSkeleton, {}) : education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							className: "p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col md:flex-row gap-4 justify-between items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 w-fit rounded-lg bg-primary/10 text-primary mb-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold",
											children: getLocalizedText(item, "degree")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg text-muted-foreground font-medium",
											children: item.institution
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-muted-foreground flex flex-col items-start md:items-end gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
											formatDate(item.start_date),
											" -",
											" ",
											item.is_current ? t.resume.present : formatDate(item.end_date)
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 opacity-75",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), getLocalizedText(item, "location")]
									})]
								})]
							})
						}) }, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "certifications",
						className: "animate-fade-in",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingSkeleton, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [certifications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "flex flex-col h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 flex flex-col h-full gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-bold leading-tight",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground",
												children: item.institution
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex justify-between items-center pt-2 border-t border-dashed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: formatDate(item.date)
										}), item.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: item.url,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "text-xs flex items-center gap-1 text-primary hover:text-purple-600 hover:underline font-medium transition-colors",
											children: [
												t.resume.verifier,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
											]
										})]
									})]
								})
							}, item.id)), certifications.length === 0 && !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2 text-center py-12 text-muted-foreground",
								children: "No certifications found."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "languages",
						className: "animate-fade-in",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingSkeleton, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-6",
							children: languages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "text-center group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "h-6 w-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold text-lg",
											children: getLocalizedText(item, "language")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground",
											children: getLocalizedText(item, "level")
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
											value: item.proficiency,
											className: "h-1.5"
										})
									]
								})
							}, item.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "publications",
						className: "animate-fade-in",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingSkeleton, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [publications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col md:flex-row gap-4 justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-bold flex items-center gap-2",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-sm font-medium text-primary/80",
												children: formatDate(item.date)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-relaxed text-muted-foreground",
												children: getLocalizedText(item, "summary")
											})
										]
									}), item.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "shrink-0 self-start md:self-center gap-2",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: item.url,
											target: "_blank",
											rel: "noopener noreferrer",
											children: [
												t.resume.view_publication,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
											]
										})
									})]
								})
							}) }, item.id)), publications.length === 0 && !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center py-12 text-muted-foreground",
								children: "No publications found."
							})]
						})
					})
				]
			})]
		})]
	});
}
export { ResumePage as default };

//# sourceMappingURL=ResumePage-Cj7nGU28.js.map