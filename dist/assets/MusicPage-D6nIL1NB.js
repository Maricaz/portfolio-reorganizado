import { Ct as __toESM, P as cn, Q as cva, St as require_react, Z as createLucideIcon, _ as LanguageSwitchControlled, bt as useParams, dt as require_jsx_runtime, m as Button, t as Skeleton, w as useAnalytics, y as useLanguage, yt as useNavigate, z as Music } from "./index-BSQDXmof.js";
import { t as useSEO } from "./use-seo-DQqLjzl1.js";
import { t as Primitive } from "./dist-COCTIlrz.js";
import { n as CardContent, t as Card } from "./card-BhLl2tO9.js";
import { i as getMusicTracks, r as getAlbumConcept } from "./music-B0f49Mhc.js";
import { t as ScrollArea } from "./scroll-area-Cl6zjhMC.js";
var Disc = createLucideIcon("disc", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "2",
	key: "1c9p78"
}]]);
var EyeOff = createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
var Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
var Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
var Play = createLucideIcon("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
const PlatformSelector = ({ currentPlatform, onSelect, availablePlatforms }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2 items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: currentPlatform === "native" ? "default" : "outline",
				size: "sm",
				onClick: () => onSelect("native"),
				className: cn("gap-2", currentPlatform === "native" && "bg-primary text-primary-foreground"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3" }), "Native"]
			}),
			availablePlatforms.spotify && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: currentPlatform === "spotify" ? "default" : "outline",
				size: "sm",
				onClick: () => onSelect("spotify"),
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.usecurling.com/i?q=spotify&shape=fill&color=green",
					alt: "Spotify",
					className: "h-4 w-4"
				}), "Spotify"]
			}),
			availablePlatforms.deezer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: currentPlatform === "deezer" ? "default" : "outline",
				size: "sm",
				onClick: () => onSelect("deezer"),
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.usecurling.com/i?q=deezer&shape=fill&color=multicolor",
					alt: "Deezer",
					className: "h-4 w-4"
				}), "Deezer"]
			}),
			availablePlatforms.apple && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: currentPlatform === "apple" ? "default" : "outline",
				size: "sm",
				onClick: () => onSelect("apple"),
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.usecurling.com/i?q=apple&shape=fill&color=black",
					alt: "Apple Music",
					className: "h-4 w-4 dark:invert"
				}), "Apple Music"]
			}),
			availablePlatforms.youtube && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: currentPlatform === "youtube" ? "default" : "outline",
				size: "sm",
				onClick: () => onSelect("youtube"),
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.usecurling.com/i?q=youtube&shape=fill&color=red",
					alt: "YouTube",
					className: "h-4 w-4"
				}), "YouTube"]
			})
		]
	});
};
var NAME = "AspectRatio";
var AspectRatio$1 = import_react.forwardRef((props, forwardedRef) => {
	const { ratio = 1 / 1, style, ...aspectRatioProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			position: "relative",
			width: "100%",
			paddingBottom: `${100 / ratio}%`
		},
		"data-radix-aspect-ratio-wrapper": "",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...aspectRatioProps,
			ref: forwardedRef,
			style: {
				...style,
				position: "absolute",
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		})
	});
});
AspectRatio$1.displayName = NAME;
var AspectRatio = AspectRatio$1;
const TrackCard = ({ track, isActive, onPlay }) => {
	const [platform, setPlatform] = (0, import_react.useState)("native");
	const { trackAudioPlay } = useAnalytics();
	const handlePlatformChange = (p) => {
		setPlatform(p);
		if (p !== "native" || isActive) {
			onPlay(track);
			trackAudioPlay(track.title);
		}
	};
	(0, import_react.useEffect)(() => {
		if (!isActive) setPlatform("native");
	}, [isActive]);
	const platforms = track.platforms || {};
	const hasSpotify = !!platforms.spotify;
	const hasDeezer = !!platforms.deezer;
	const hasApple = !!platforms.apple;
	const hasYoutube = !!platforms.youtube;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: cn("overflow-hidden transition-all duration-300 border-l-4", isActive ? "border-l-primary shadow-lg ring-1 ring-primary/20" : "border-l-transparent hover:border-l-muted-foreground/50"),
		id: `track-${track.id}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-start flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => onPlay(track),
						className: "cursor-pointer group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: cn("text-xl font-bold transition-colors", isActive ? "text-primary" : "group-hover:text-primary"),
							children: track.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: track.artist
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformSelector, {
						currentPlatform: platform,
						onSelect: handlePlatformChange,
						availablePlatforms: {
							spotify: hasSpotify,
							deezer: hasDeezer,
							apple: hasApple,
							youtube: hasYoutube
						}
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 rounded-lg overflow-hidden bg-muted/30",
					children: [
						platform === "native" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4 flex items-center justify-center bg-secondary/20",
							children: track.src_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
								controls: true,
								controlsList: "nodownload",
								className: "w-full h-10 outline-none",
								src: track.src_url,
								onPlay: () => {
									if (!isActive) onPlay(track);
									trackAudioPlay(track.title);
								},
								children: "Your browser does not support the audio element."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground py-2",
								children: "Preview not available"
							})
						}),
						platform === "spotify" && platforms.spotify && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `Spotify - ${track.title}`,
							src: `https://open.spotify.com/embed/track/${platforms.spotify}`,
							width: "100%",
							height: "152",
							frameBorder: "0",
							allow: "encrypted-media",
							className: "rounded-md"
						}),
						platform === "deezer" && platforms.deezer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `Deezer - ${track.title}`,
							src: `https://widget.deezer.com/widget/auto/track/${platforms.deezer}`,
							width: "100%",
							height: "130",
							frameBorder: "0",
							allow: "encrypted-media; clipboard-write",
							className: "rounded-md"
						}),
						platform === "apple" && platforms.apple && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `Apple Music - ${track.title}`,
							src: `https://embed.music.apple.com/us/album/${platforms.apple}`,
							width: "100%",
							height: "150",
							frameBorder: "0",
							allow: "encrypted-media",
							className: "rounded-md"
						}),
						platform === "youtube" && platforms.youtube && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AspectRatio, {
							ratio: 16 / 9,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: `YouTube - ${track.title}`,
								src: `https://www.youtube.com/embed/${platforms.youtube}`,
								width: "100%",
								height: "100%",
								frameBorder: "0",
								allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
								allowFullScreen: true,
								className: "rounded-md"
							})
						})
					]
				})]
			})
		})
	});
};
const SidePanel = ({ track, albumConcept, globalLanguage }) => {
	const [isVisible, setIsVisible] = (0, import_react.useState)(true);
	const [lyricsLang, setLyricsLang] = (0, import_react.useState)(globalLanguage);
	(0, import_react.useEffect)(() => {
		setLyricsLang(globalLanguage);
	}, [globalLanguage]);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("lyrics_language");
		if (saved) setLyricsLang(saved);
	}, []);
	const handleLangChange = (lang) => {
		setLyricsLang(lang);
		localStorage.setItem("lyrics_language", lang);
	};
	const getLyrics = () => {
		if (!track || !track.lyrics) return "Lyrics not available";
		return track.lyrics[lyricsLang] || track.lyrics["en"] || track.lyrics["pt"] || "Lyrics not available";
	};
	const getAlbumTitle = () => {
		if (!albumConcept || !albumConcept.title) return "";
		return albumConcept.title[globalLanguage] || albumConcept.title["en"] || "";
	};
	const getAlbumDescription = () => {
		if (!albumConcept || !albumConcept.description) return "";
		return albumConcept.description[globalLanguage] || albumConcept.description["en"] || "";
	};
	if (!isVisible) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full border rounded-xl flex items-center justify-center bg-muted/10 p-4 min-h-[100px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: () => setIsVisible(true),
			className: "gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), "Show Details"]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full flex flex-col border rounded-xl bg-card shadow-sm overflow-hidden min-h-[400px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 border-b flex items-center justify-between bg-muted/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2 font-semibold",
				children: track ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lyrics" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Album Concept" })] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-8 w-8",
				onClick: () => setIsVisible(false),
				title: "Hide panel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
			className: "flex-1 max-h-[calc(100vh-200px)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6",
				children: track ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold",
							children: track.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitchControlled, {
							value: lyricsLang,
							onChange: handleLangChange
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "whitespace-pre-line text-muted-foreground leading-relaxed text-center font-medium animate-fade-in",
						children: getLyrics()
					})]
				}) : albumConcept ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-center",
							children: getAlbumTitle()
						}),
						albumConcept.cover_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg overflow-hidden shadow-md max-w-[200px] mx-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AspectRatio, {
								ratio: 1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: albumConcept.cover_url,
									alt: getAlbumTitle(),
									className: "object-cover w-full h-full"
								})
							})
						}),
						albumConcept.video_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg overflow-hidden shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AspectRatio, {
								ratio: 16 / 9,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									src: albumConcept.video_url,
									className: "w-full h-full",
									allow: "autoplay; encrypted-media",
									title: "Album Concept Video"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-muted-foreground indent-pt text-justify",
							children: getAlbumDescription()
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center py-10 text-muted-foreground",
					children: "Select a track to see lyrics or wait for album details to load."
				})
			})
		})]
	});
};
var alertVariants = cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var Alert = import_react.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	role: "alert",
	className: cn(alertVariants({ variant }), className),
	...props
}));
Alert.displayName = "Alert";
var AlertTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
	ref,
	className: cn("mb-1 font-medium leading-none tracking-tight", className),
	...props
}));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm [&_p]:leading-relaxed", className),
	...props
}));
AlertDescription.displayName = "AlertDescription";
function MusicPage() {
	const { t, language } = useLanguage();
	const { trackId } = useParams();
	const navigate = useNavigate();
	const [tracks, setTracks] = (0, import_react.useState)([]);
	const [albumConcept, setAlbumConcept] = (0, import_react.useState)(null);
	const [selectedTrack, setSelectedTrack] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: selectedTrack ? `${selectedTrack.title} - ${t.music.title}` : t.music.title,
		description: selectedTrack ? `Listen to ${selectedTrack.title} by ${selectedTrack.artist}` : t.music.description,
		type: "music.song"
	});
	(0, import_react.useEffect)(() => {
		const fetchData = async () => {
			setLoading(true);
			const [tracksRes, albumRes] = await Promise.all([getMusicTracks(), getAlbumConcept()]);
			if (tracksRes.data) setTracks(tracksRes.data);
			if (albumRes.data) setAlbumConcept(albumRes.data);
			setLoading(false);
		};
		fetchData();
	}, []);
	(0, import_react.useEffect)(() => {
		if (tracks.length > 0 && trackId) {
			const found = tracks.find((t$1) => t$1.track_id === trackId || t$1.id === trackId);
			if (found) {
				setSelectedTrack(found);
				setTimeout(() => {
					const el = document.getElementById(`track-${found.id}`);
					if (el) el.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
				}, 100);
			}
		}
	}, [tracks, trackId]);
	const handleTrackPlay = (track) => {
		if (selectedTrack?.id !== track.id) {
			setSelectedTrack(track);
			navigate(`/music/${track.track_id || track.id}`, { replace: true });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-8 min-h-screen space-y-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 mb-4 animate-fade-in-down",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-bold tracking-tight",
							children: t.music.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-lg",
							children: t.music.description
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
						className: "bg-muted/50 border-primary/20 animate-fade-in",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
							className: "text-sm text-muted-foreground",
							children: t.music.local_file_note
						})]
					}),
					loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4 mt-8",
						children: [
							1,
							2,
							3
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-40 w-full rounded-lg" }, i))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 pb-20",
						children: [tracks.map((track, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-fade-in-up",
							style: { animationDelay: `${index * 100}ms` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackCard, {
								track,
								isActive: selectedTrack?.id === track.id,
								onPlay: handleTrackPlay
							})
						}, track.id)), tracks.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center py-10 text-muted-foreground",
							children: "No tracks available at the moment."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:sticky lg:top-24 animate-fade-in-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidePanel, {
						track: selectedTrack,
						albumConcept,
						globalLanguage: language
					})
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 border-t pt-8 animate-fade-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-xl font-semibold mb-4",
				children: [t.music.listen_on, " Deezer"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl overflow-hidden shadow-lg border border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Deezer Playlist",
					src: "https://widget.deezer.com/widget/auto/playlist/1479458365",
					width: "100%",
					height: "300",
					frameBorder: "0",
					allowTransparency: true,
					allow: "encrypted-media; clipboard-write"
				})
			})]
		})]
	});
}
export { MusicPage as default };

//# sourceMappingURL=MusicPage-D6nIL1NB.js.map