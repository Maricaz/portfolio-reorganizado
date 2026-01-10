import { $ as useNavigate, B as Presence, G as createContextScope, H as useCallbackRef, J as composeEventHandlers, K as require_jsx_runtime, L as createLucideIcon, O as Music, R as cva, U as Primitive, V as useLayoutEffect2, b as useAnalytics, d as Button, et as useParams, h as useLanguage, m as LanguageSwitchControlled, n as Skeleton, nt as require_react, q as useComposedRefs, rt as __toESM, w as cn } from "./index-7n91VYFD.js";
import { t as useSEO } from "./use-seo-Cx_oG4MW.js";
import { t as Primitive$1 } from "./dist-CySVvXdc.js";
import { n as CardContent, t as Card } from "./card-DC3OlqS4.js";
import { i as getMusicTracks, r as getAlbumConcept } from "./music-aS5uCYvM.js";
import { t as useDirection } from "./dist-ME0IO4Mt.js";
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive$1.div, {
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
function clamp(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
	const [scrollArea, setScrollArea] = import_react.useState(null);
	const [viewport, setViewport] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const [scrollbarX, setScrollbarX] = import_react.useState(null);
	const [scrollbarY, setScrollbarY] = import_react.useState(null);
	const [cornerWidth, setCornerWidth] = import_react.useState(0);
	const [cornerHeight, setCornerHeight] = import_react.useState(0);
	const [scrollbarXEnabled, setScrollbarXEnabled] = import_react.useState(false);
	const [scrollbarYEnabled, setScrollbarYEnabled] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
	const direction = useDirection(dir);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaProvider, {
		scope: __scopeScrollArea,
		type,
		dir: direction,
		scrollHideDelay,
		scrollArea,
		viewport,
		onViewportChange: setViewport,
		content,
		onContentChange: setContent,
		scrollbarX,
		onScrollbarXChange: setScrollbarX,
		scrollbarXEnabled,
		onScrollbarXEnabledChange: setScrollbarXEnabled,
		scrollbarY,
		onScrollbarYChange: setScrollbarY,
		scrollbarYEnabled,
		onScrollbarYEnabledChange: setScrollbarYEnabled,
		onCornerWidthChange: setCornerWidth,
		onCornerHeightChange: setCornerHeight,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			...scrollAreaProps,
			ref: composedRefs,
			style: {
				position: "relative",
				["--radix-scroll-area-corner-width"]: cornerWidth + "px",
				["--radix-scroll-area-corner-height"]: cornerHeight + "px",
				...props.style
			}
		})
	});
});
ScrollArea$1.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
	const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
	const composedRefs = useComposedRefs(forwardedRef, import_react.useRef(null), context.onViewportChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		dangerouslySetInnerHTML: { __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}` },
		nonce
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...viewportProps,
		ref: composedRefs,
		style: {
			overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
			...props.style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: context.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children
		})
	})] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
	const isHorizontal = props.orientation === "horizontal";
	import_react.useEffect(() => {
		isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
		return () => {
			isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
		};
	}, [
		isHorizontal,
		onScrollbarXEnabledChange,
		onScrollbarYEnabledChange
	]);
	return context.type === "hover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarHover, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "scroll" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarScroll, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "auto" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "always" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
		...scrollbarProps,
		ref: forwardedRef
	}) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [visible, setVisible] = import_react.useState(false);
	import_react.useEffect(() => {
		const scrollArea = context.scrollArea;
		let hideTimer = 0;
		if (scrollArea) {
			const handlePointerEnter = () => {
				window.clearTimeout(hideTimer);
				setVisible(true);
			};
			const handlePointerLeave = () => {
				hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
			};
			scrollArea.addEventListener("pointerenter", handlePointerEnter);
			scrollArea.addEventListener("pointerleave", handlePointerLeave);
			return () => {
				window.clearTimeout(hideTimer);
				scrollArea.removeEventListener("pointerenter", handlePointerEnter);
				scrollArea.removeEventListener("pointerleave", handlePointerLeave);
			};
		}
	}, [context.scrollArea, context.scrollHideDelay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || visible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
			"data-state": visible ? "visible" : "hidden",
			...scrollbarProps,
			ref: forwardedRef
		})
	});
});
var ScrollAreaScrollbarScroll = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const isHorizontal = props.orientation === "horizontal";
	const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
	const [state, send] = useStateMachine("hidden", {
		hidden: { SCROLL: "scrolling" },
		scrolling: {
			SCROLL_END: "idle",
			POINTER_ENTER: "interacting"
		},
		interacting: {
			SCROLL: "interacting",
			POINTER_LEAVE: "idle"
		},
		idle: {
			HIDE: "hidden",
			SCROLL: "scrolling",
			POINTER_ENTER: "interacting"
		}
	});
	import_react.useEffect(() => {
		if (state === "idle") {
			const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
			return () => window.clearTimeout(hideTimer);
		}
	}, [
		state,
		context.scrollHideDelay,
		send
	]);
	import_react.useEffect(() => {
		const viewport = context.viewport;
		const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
		if (viewport) {
			let prevScrollPos = viewport[scrollDirection];
			const handleScroll = () => {
				const scrollPos = viewport[scrollDirection];
				if (prevScrollPos !== scrollPos) {
					send("SCROLL");
					debounceScrollEnd();
				}
				prevScrollPos = scrollPos;
			};
			viewport.addEventListener("scroll", handleScroll);
			return () => viewport.removeEventListener("scroll", handleScroll);
		}
	}, [
		context.viewport,
		isHorizontal,
		send,
		debounceScrollEnd
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || state !== "hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": state === "hidden" ? "hidden" : "visible",
			...scrollbarProps,
			ref: forwardedRef,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
		})
	});
});
var ScrollAreaScrollbarAuto = import_react.forwardRef((props, forwardedRef) => {
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const { forceMount, ...scrollbarProps } = props;
	const [visible, setVisible] = import_react.useState(false);
	const isHorizontal = props.orientation === "horizontal";
	const handleResize = useDebounceCallback(() => {
		if (context.viewport) {
			const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
			const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
			setVisible(isHorizontal ? isOverflowX : isOverflowY);
		}
	}, 10);
	useResizeObserver(context.viewport, handleResize);
	useResizeObserver(context.content, handleResize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || visible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": visible ? "visible" : "hidden",
			...scrollbarProps,
			ref: forwardedRef
		})
	});
});
var ScrollAreaScrollbarVisible = import_react.forwardRef((props, forwardedRef) => {
	const { orientation = "vertical", ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const thumbRef = import_react.useRef(null);
	const pointerOffsetRef = import_react.useRef(0);
	const [sizes, setSizes] = import_react.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	});
	const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
	const commonProps = {
		...scrollbarProps,
		sizes,
		onSizesChange: setSizes,
		hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
		onThumbChange: (thumb) => thumbRef.current = thumb,
		onThumbPointerUp: () => pointerOffsetRef.current = 0,
		onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
	};
	function getScrollPosition(pointerPos, dir) {
		return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
	}
	if (orientation === "horizontal") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarX, {
		...commonProps,
		ref: forwardedRef,
		onThumbPositionChange: () => {
			if (context.viewport && thumbRef.current) {
				const scrollPos = context.viewport.scrollLeft;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
				thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
			}
		},
		onWheelScroll: (scrollPos) => {
			if (context.viewport) context.viewport.scrollLeft = scrollPos;
		},
		onDragScroll: (pointerPos) => {
			if (context.viewport) context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
		}
	});
	if (orientation === "vertical") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarY, {
		...commonProps,
		ref: forwardedRef,
		onThumbPositionChange: () => {
			if (context.viewport && thumbRef.current) {
				const scrollPos = context.viewport.scrollTop;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes);
				thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
			}
		},
		onWheelScroll: (scrollPos) => {
			if (context.viewport) context.viewport.scrollTop = scrollPos;
		},
		onDragScroll: (pointerPos) => {
			if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
		}
	});
	return null;
});
var ScrollAreaScrollbarX = import_react.forwardRef((props, forwardedRef) => {
	const { sizes, onSizesChange, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [computedStyle, setComputedStyle] = import_react.useState();
	const ref = import_react.useRef(null);
	const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
	import_react.useEffect(() => {
		if (ref.current) setComputedStyle(getComputedStyle(ref.current));
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...scrollbarProps,
		ref: composeRefs,
		sizes,
		style: {
			bottom: 0,
			left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
			...props.style
		},
		onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
		onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
		onWheelScroll: (event, maxScrollPos) => {
			if (context.viewport) {
				const scrollPos = context.viewport.scrollLeft + event.deltaX;
				props.onWheelScroll(scrollPos);
				if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
			}
		},
		onResize: () => {
			if (ref.current && context.viewport && computedStyle) onSizesChange({
				content: context.viewport.scrollWidth,
				viewport: context.viewport.offsetWidth,
				scrollbar: {
					size: ref.current.clientWidth,
					paddingStart: toInt(computedStyle.paddingLeft),
					paddingEnd: toInt(computedStyle.paddingRight)
				}
			});
		}
	});
});
var ScrollAreaScrollbarY = import_react.forwardRef((props, forwardedRef) => {
	const { sizes, onSizesChange, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [computedStyle, setComputedStyle] = import_react.useState();
	const ref = import_react.useRef(null);
	const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
	import_react.useEffect(() => {
		if (ref.current) setComputedStyle(getComputedStyle(ref.current));
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...scrollbarProps,
		ref: composeRefs,
		sizes,
		style: {
			top: 0,
			right: context.dir === "ltr" ? 0 : void 0,
			left: context.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
			...props.style
		},
		onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
		onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
		onWheelScroll: (event, maxScrollPos) => {
			if (context.viewport) {
				const scrollPos = context.viewport.scrollTop + event.deltaY;
				props.onWheelScroll(scrollPos);
				if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
			}
		},
		onResize: () => {
			if (ref.current && context.viewport && computedStyle) onSizesChange({
				content: context.viewport.scrollHeight,
				viewport: context.viewport.offsetHeight,
				scrollbar: {
					size: ref.current.clientHeight,
					paddingStart: toInt(computedStyle.paddingTop),
					paddingEnd: toInt(computedStyle.paddingBottom)
				}
			});
		}
	});
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
	const [scrollbar, setScrollbar] = import_react.useState(null);
	const composeRefs = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
	const rectRef = import_react.useRef(null);
	const prevWebkitUserSelectRef = import_react.useRef("");
	const viewport = context.viewport;
	const maxScrollPos = sizes.content - sizes.viewport;
	const handleWheelScroll = useCallbackRef(onWheelScroll);
	const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
	const handleResize = useDebounceCallback(onResize, 10);
	function handleDragScroll(event) {
		if (rectRef.current) onDragScroll({
			x: event.clientX - rectRef.current.left,
			y: event.clientY - rectRef.current.top
		});
	}
	import_react.useEffect(() => {
		const handleWheel = (event) => {
			const element = event.target;
			if (scrollbar?.contains(element)) handleWheelScroll(event, maxScrollPos);
		};
		document.addEventListener("wheel", handleWheel, { passive: false });
		return () => document.removeEventListener("wheel", handleWheel, { passive: false });
	}, [
		viewport,
		scrollbar,
		maxScrollPos,
		handleWheelScroll
	]);
	import_react.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
	useResizeObserver(scrollbar, handleResize);
	useResizeObserver(context.content, handleResize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollbarProvider, {
		scope: __scopeScrollArea,
		scrollbar,
		hasThumb,
		onThumbChange: useCallbackRef(onThumbChange),
		onThumbPointerUp: useCallbackRef(onThumbPointerUp),
		onThumbPositionChange: handleThumbPositionChange,
		onThumbPointerDown: useCallbackRef(onThumbPointerDown),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...scrollbarProps,
			ref: composeRefs,
			style: {
				position: "absolute",
				...scrollbarProps.style
			},
			onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
				if (event.button === 0) {
					event.target.setPointerCapture(event.pointerId);
					rectRef.current = scrollbar.getBoundingClientRect();
					prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
					document.body.style.webkitUserSelect = "none";
					if (context.viewport) context.viewport.style.scrollBehavior = "auto";
					handleDragScroll(event);
				}
			}),
			onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
			onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
				const element = event.target;
				if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
				document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
				if (context.viewport) context.viewport.style.scrollBehavior = "";
				rectRef.current = null;
			})
		})
	});
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...thumbProps } = props;
	const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || scrollbarContext.hasThumb,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumbImpl, {
			ref: forwardedRef,
			...thumbProps
		})
	});
});
var ScrollAreaThumbImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, style, ...thumbProps } = props;
	const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
	const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
	const { onThumbPositionChange } = scrollbarContext;
	const composedRef = useComposedRefs(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
	const removeUnlinkedScrollListenerRef = import_react.useRef(void 0);
	const debounceScrollEnd = useDebounceCallback(() => {
		if (removeUnlinkedScrollListenerRef.current) {
			removeUnlinkedScrollListenerRef.current();
			removeUnlinkedScrollListenerRef.current = void 0;
		}
	}, 100);
	import_react.useEffect(() => {
		const viewport = scrollAreaContext.viewport;
		if (viewport) {
			const handleScroll = () => {
				debounceScrollEnd();
				if (!removeUnlinkedScrollListenerRef.current) {
					removeUnlinkedScrollListenerRef.current = addUnlinkedScrollListener(viewport, onThumbPositionChange);
					onThumbPositionChange();
				}
			};
			onThumbPositionChange();
			viewport.addEventListener("scroll", handleScroll);
			return () => viewport.removeEventListener("scroll", handleScroll);
		}
	}, [
		scrollAreaContext.viewport,
		debounceScrollEnd,
		onThumbPositionChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
		...thumbProps,
		ref: composedRef,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...style
		},
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
			const thumbRect = event.target.getBoundingClientRect();
			const x = event.clientX - thumbRect.left;
			const y = event.clientY - thumbRect.top;
			scrollbarContext.onThumbPointerDown({
				x,
				y
			});
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
	});
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = import_react.forwardRef((props, forwardedRef) => {
	const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
	const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
	return context.type !== "scroll" && hasBothScrollbarsVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaCornerImpl, {
		...props,
		ref: forwardedRef
	}) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, ...cornerProps } = props;
	const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
	const [width, setWidth] = import_react.useState(0);
	const [height, setHeight] = import_react.useState(0);
	const hasSize = Boolean(width && height);
	useResizeObserver(context.scrollbarX, () => {
		const height2 = context.scrollbarX?.offsetHeight || 0;
		context.onCornerHeightChange(height2);
		setHeight(height2);
	});
	useResizeObserver(context.scrollbarY, () => {
		const width2 = context.scrollbarY?.offsetWidth || 0;
		context.onCornerWidthChange(width2);
		setWidth(width2);
	});
	return hasSize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...cornerProps,
		ref: forwardedRef,
		style: {
			width,
			height,
			position: "absolute",
			right: context.dir === "ltr" ? 0 : void 0,
			left: context.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...props.style
		}
	}) : null;
});
function toInt(value) {
	return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
	const ratio = viewportSize / contentSize;
	return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
	const ratio = getThumbRatio(sizes.viewport, sizes.content);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
	return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const thumbCenter = thumbSizePx / 2;
	const offset = pointerOffset || thumbCenter;
	const thumbOffsetFromEnd = thumbSizePx - offset;
	const minPointerPos = sizes.scrollbar.paddingStart + offset;
	const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
	const maxScrollPos = sizes.content - sizes.viewport;
	const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
	return linearScale([minPointerPos, maxPointerPos], scrollRange)(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const scrollbar = sizes.scrollbar.size - scrollbarPadding;
	const maxScrollPos = sizes.content - sizes.viewport;
	const maxThumbPos = scrollbar - thumbSizePx;
	const scrollWithoutMomentum = clamp(scrollPos, dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0]);
	return linearScale([0, maxScrollPos], [0, maxThumbPos])(scrollWithoutMomentum);
}
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
	return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {}) => {
	let prevPosition = {
		left: node.scrollLeft,
		top: node.scrollTop
	};
	let rAF = 0;
	(function loop() {
		const position = {
			left: node.scrollLeft,
			top: node.scrollTop
		};
		const isHorizontalScroll = prevPosition.left !== position.left;
		const isVerticalScroll = prevPosition.top !== position.top;
		if (isHorizontalScroll || isVerticalScroll) handler();
		prevPosition = position;
		rAF = window.requestAnimationFrame(loop);
	})();
	return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
	const handleCallback = useCallbackRef(callback);
	const debounceTimerRef = import_react.useRef(0);
	import_react.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
	return import_react.useCallback(() => {
		window.clearTimeout(debounceTimerRef.current);
		debounceTimerRef.current = window.setTimeout(handleCallback, delay);
	}, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
	const handleResize = useCallbackRef(onResize);
	useLayoutEffect2(() => {
		let rAF = 0;
		if (element) {
			const resizeObserver = new ResizeObserver(() => {
				cancelAnimationFrame(rAF);
				rAF = window.requestAnimationFrame(handleResize);
			});
			resizeObserver.observe(element);
			return () => {
				window.cancelAnimationFrame(rAF);
				resizeObserver.unobserve(element);
			};
		}
	}, [element, handleResize]);
}
var Root = ScrollArea$1;
var Viewport = ScrollAreaViewport;
var Corner = ScrollAreaCorner;
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
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

//# sourceMappingURL=MusicPage-CpGv8iJQ.js.map