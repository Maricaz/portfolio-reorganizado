import { t as Eye } from "./eye-zsGcS7DJ.js";
import { A as useAnalytics, At as useNavigate, C as LanguageSwitchControlled, Ct as useComposedRefs, It as __toESM, K as Music, L as useSize, Nt as require_react, T as useLanguage, V as cn, _t as createCollection, at as createLucideIcon, bt as createContextScope, ht as Primitive$1, jt as useParams, lt as useControllableState, r as Skeleton, v as Button, wt as composeEventHandlers, xt as require_jsx_runtime } from "./index-BW8M9qXG.js";
import { t as useSEO } from "./use-seo-Cyc6kDbM.js";
import { t as Primitive } from "./dist-BfBrYNmC.js";
import { n as CardContent, t as Card } from "./card-DtbxVFnJ.js";
import { o as getAlbumConcept, s as getMusicTracks } from "./music-BcbwadPK.js";
import { t as clamp } from "./dist-C06yRUzp.js";
import { t as useDirection } from "./dist-DNw9hnmU.js";
import { t as usePrevious } from "./dist-BvIA5-n-.js";
import { t as ScrollArea } from "./scroll-area-Cr4iPnYI.js";
import { n as AlertDescription, t as Alert } from "./alert-Dw-t4e6Y.js";
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
var Pause = createLucideIcon("pause", [["rect", {
	x: "14",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "kaeet6"
}], ["rect", {
	x: "5",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "1wsw3u"
}]]);
var Play = createLucideIcon("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]);
var RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
var RotateCw = createLucideIcon("rotate-cw", [["path", {
	d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
	key: "1p45f6"
}], ["path", {
	d: "M21 3v5h-5",
	key: "1q7to0"
}]]);
var Volume1 = createLucideIcon("volume-1", [["path", {
	d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
	key: "uqj9uw"
}], ["path", {
	d: "M16 9a5 5 0 0 1 0 6",
	key: "1q6k2b"
}]]);
var Volume2 = createLucideIcon("volume-2", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["path", {
		d: "M16 9a5 5 0 0 1 0 6",
		key: "1q6k2b"
	}],
	["path", {
		d: "M19.364 18.364a9 9 0 0 0 0-12.728",
		key: "ijwkga"
	}]
]);
var VolumeX = createLucideIcon("volume-x", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "9",
		y2: "15",
		key: "1ewh16"
	}],
	["line", {
		x1: "16",
		x2: "22",
		y1: "9",
		y2: "15",
		key: "5ykzw1"
	}]
]);
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
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var BACK_KEYS = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [createCollectionScope]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = import_react.forwardRef((props, forwardedRef) => {
	const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [min], value, onValueChange = () => {}, onValueCommit = () => {}, inverted = false, form, ...sliderProps } = props;
	const thumbRefs = import_react.useRef(/* @__PURE__ */ new Set());
	const valueIndexToChangeRef = import_react.useRef(0);
	const SliderOrientation = orientation === "horizontal" ? SliderHorizontal : SliderVertical;
	const [values = [], setValues] = useControllableState({
		prop: value,
		defaultProp: defaultValue,
		onChange: (value2) => {
			[...thumbRefs.current][valueIndexToChangeRef.current]?.focus();
			onValueChange(value2);
		}
	});
	const valuesBeforeSlideStartRef = import_react.useRef(values);
	function handleSlideStart(value2) {
		updateValues(value2, getClosestValueIndex(values, value2));
	}
	function handleSlideMove(value2) {
		updateValues(value2, valueIndexToChangeRef.current);
	}
	function handleSlideEnd() {
		const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
		if (values[valueIndexToChangeRef.current] !== prevValue) onValueCommit(values);
	}
	function updateValues(value2, atIndex, { commit } = { commit: false }) {
		const decimalCount = getDecimalCount(step);
		const nextValue = clamp(roundValue(Math.round((value2 - min) / step) * step + min, decimalCount), [min, max]);
		setValues((prevValues = []) => {
			const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
			if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
				valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
				const hasChanged = String(nextValues) !== String(prevValues);
				if (hasChanged && commit) onValueCommit(nextValues);
				return hasChanged ? nextValues : prevValues;
			} else return prevValues;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderProvider, {
		scope: props.__scopeSlider,
		name,
		disabled,
		min,
		max,
		valueIndexToChangeRef,
		thumbs: thumbRefs.current,
		values,
		orientation,
		form,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
			scope: props.__scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
				scope: props.__scopeSlider,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientation, {
					"aria-disabled": disabled,
					"data-disabled": disabled ? "" : void 0,
					...sliderProps,
					ref: forwardedRef,
					onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
						if (!disabled) valuesBeforeSlideStartRef.current = values;
					}),
					min,
					max,
					inverted,
					onSlideStart: disabled ? void 0 : handleSlideStart,
					onSlideMove: disabled ? void 0 : handleSlideMove,
					onSlideEnd: disabled ? void 0 : handleSlideEnd,
					onHomeKeyDown: () => !disabled && updateValues(min, 0, { commit: true }),
					onEndKeyDown: () => !disabled && updateValues(max, values.length - 1, { commit: true }),
					onStepKeyDown: ({ event, direction: stepDirection }) => {
						if (!disabled) {
							const multiplier = PAGE_KEYS.includes(event.key) || event.shiftKey && ARROW_KEYS.includes(event.key) ? 10 : 1;
							const atIndex = valueIndexToChangeRef.current;
							const value2 = values[atIndex];
							updateValues(value2 + step * multiplier * stepDirection, atIndex, { commit: true });
						}
					}
				})
			})
		})
	});
});
Slider$1.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
});
var SliderHorizontal = import_react.forwardRef((props, forwardedRef) => {
	const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const [slider, setSlider] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
	const rectRef = import_react.useRef(void 0);
	const direction = useDirection(dir);
	const isDirectionLTR = direction === "ltr";
	const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || slider.getBoundingClientRect();
		const value = linearScale([0, rect.width], isSlidingFromLeft ? [min, max] : [max, min]);
		rectRef.current = rect;
		return value(pointerPosition - rect.left);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromLeft ? "left" : "right",
		endEdge: isSlidingFromLeft ? "right" : "left",
		direction: isSlidingFromLeft ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			dir: direction,
			"data-orientation": "horizontal",
			...sliderProps,
			ref: composedRefs,
			style: {
				...sliderProps.style,
				["--radix-slider-thumb-transform"]: "translateX(-50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromLeft ? "from-left" : "from-right"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
});
var SliderVertical = import_react.forwardRef((props, forwardedRef) => {
	const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const sliderRef = import_react.useRef(null);
	const ref = useComposedRefs(forwardedRef, sliderRef);
	const rectRef = import_react.useRef(void 0);
	const isSlidingFromBottom = !inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
		const value = linearScale([0, rect.height], isSlidingFromBottom ? [max, min] : [min, max]);
		rectRef.current = rect;
		return value(pointerPosition - rect.top);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromBottom ? "bottom" : "top",
		endEdge: isSlidingFromBottom ? "top" : "bottom",
		size: "height",
		direction: isSlidingFromBottom ? 1 : -1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			"data-orientation": "vertical",
			...sliderProps,
			ref,
			style: {
				...sliderProps.style,
				["--radix-slider-thumb-transform"]: "translateY(50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromBottom ? "from-bottom" : "from-top"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
});
var SliderImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
	const context = useSliderContext(SLIDER_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive$1.span, {
		...sliderProps,
		ref: forwardedRef,
		onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
			if (event.key === "Home") {
				onHomeKeyDown(event);
				event.preventDefault();
			} else if (event.key === "End") {
				onEndKeyDown(event);
				event.preventDefault();
			} else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
				onStepKeyDown(event);
				event.preventDefault();
			}
		}),
		onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
			const target = event.target;
			target.setPointerCapture(event.pointerId);
			event.preventDefault();
			if (context.thumbs.has(target)) target.focus();
			else onSlideStart(event);
		}),
		onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
			if (event.target.hasPointerCapture(event.pointerId)) onSlideMove(event);
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
			const target = event.target;
			if (target.hasPointerCapture(event.pointerId)) {
				target.releasePointerCapture(event.pointerId);
				onSlideEnd(event);
			}
		})
	});
});
var TRACK_NAME = "SliderTrack";
var SliderTrack = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSlider, ...trackProps } = props;
	const context = useSliderContext(TRACK_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive$1.span, {
		"data-disabled": context.disabled ? "" : void 0,
		"data-orientation": context.orientation,
		...trackProps,
		ref: forwardedRef
	});
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSlider, ...rangeProps } = props;
	const context = useSliderContext(RANGE_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
	const composedRefs = useComposedRefs(forwardedRef, import_react.useRef(null));
	const valuesCount = context.values.length;
	const percentages = context.values.map((value) => convertValueToPercentage(value, context.min, context.max));
	const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
	const offsetEnd = 100 - Math.max(...percentages);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive$1.span, {
		"data-orientation": context.orientation,
		"data-disabled": context.disabled ? "" : void 0,
		...rangeProps,
		ref: composedRefs,
		style: {
			...props.style,
			[orientation.startEdge]: offsetStart + "%",
			[orientation.endEdge]: offsetEnd + "%"
		}
	});
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = import_react.forwardRef((props, forwardedRef) => {
	const getItems = useCollection(props.__scopeSlider);
	const [thumb, setThumb] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
	const index = import_react.useMemo(() => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1, [getItems, thumb]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbImpl, {
		...props,
		ref: composedRefs,
		index
	});
});
var SliderThumbImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSlider, index, name, ...thumbProps } = props;
	const context = useSliderContext(THUMB_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
	const [thumb, setThumb] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
	const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
	const size = useSize(thumb);
	const value = context.values[index];
	const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
	const label = getLabel(index, context.values.length);
	const orientationSize = size?.[orientation.size];
	const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
	import_react.useEffect(() => {
		if (thumb) {
			context.thumbs.add(thumb);
			return () => {
				context.thumbs.delete(thumb);
			};
		}
	}, [thumb, context.thumbs]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
			scope: props.__scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive$1.span, {
				role: "slider",
				"aria-label": props["aria-label"] || label,
				"aria-valuemin": context.min,
				"aria-valuenow": value,
				"aria-valuemax": context.max,
				"aria-orientation": context.orientation,
				"data-orientation": context.orientation,
				"data-disabled": context.disabled ? "" : void 0,
				tabIndex: context.disabled ? void 0 : 0,
				...thumbProps,
				ref: composedRefs,
				style: value === void 0 ? { display: "none" } : props.style,
				onFocus: composeEventHandlers(props.onFocus, () => {
					context.valueIndexToChangeRef.current = index;
				})
			})
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderBubbleInput, {
			name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
			form: context.form,
			value
		}, index)]
	});
});
SliderThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var SliderBubbleInput = import_react.forwardRef(({ __scopeSlider, value, ...props }, forwardedRef) => {
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(ref, forwardedRef);
	const prevValue = usePrevious(value);
	import_react.useEffect(() => {
		const input = ref.current;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
		if (prevValue !== value && setValue) {
			const event = new Event("input", { bubbles: true });
			setValue.call(input, value);
			input.dispatchEvent(event);
		}
	}, [prevValue, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive$1.input, {
		style: { display: "none" },
		...props,
		ref: composedRefs,
		defaultValue: value
	});
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
	const nextValues = [...prevValues];
	nextValues[atIndex] = nextValue;
	return nextValues.sort((a, b) => a - b);
}
function convertValueToPercentage(value, min, max) {
	return clamp(100 / (max - min) * (value - min), [0, 100]);
}
function getLabel(index, totalValues) {
	if (totalValues > 2) return `Value ${index + 1} of ${totalValues}`;
	else if (totalValues === 2) return ["Minimum", "Maximum"][index];
	else return;
}
function getClosestValueIndex(values, nextValue) {
	if (values.length === 1) return 0;
	const distances = values.map((value) => Math.abs(value - nextValue));
	const closestDistance = Math.min(...distances);
	return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
	const halfWidth = width / 2;
	return (halfWidth - linearScale([0, 50], [0, halfWidth])(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
	return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
	if (minStepsBetweenValues > 0) {
		const stepsBetweenValues = getStepsBetweenValues(values);
		return Math.min(...stepsBetweenValues) >= minStepsBetweenValues;
	}
	return true;
}
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
function getDecimalCount(value) {
	return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
	const rounder = Math.pow(10, decimalCount);
	return Math.round(value * rounder) / rounder;
}
var Root$1 = Slider$1;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {
		className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Root$1.displayName;
function CustomAudioPlayer({ src, isActive, onPlay, trackTitle }) {
	const audioRef = (0, import_react.useRef)(null);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const [currentTime, setCurrentTime] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(0);
	const [volume, setVolume] = (0, import_react.useState)(1);
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isActive && audioRef.current) {
			audioRef.current.play().catch((e) => console.log("Autoplay blocked", e));
			setIsPlaying(true);
		} else if (!isActive && audioRef.current) {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	}, [isActive]);
	const togglePlay = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			onPlay();
			audioRef.current.play();
			setIsPlaying(true);
		}
	};
	const handleTimeUpdate = () => {
		if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
	};
	const handleLoadedMetadata = () => {
		if (audioRef.current) setDuration(audioRef.current.duration);
	};
	const handleEnded = () => {
		setIsPlaying(false);
		setCurrentTime(0);
	};
	const handleSeek = (value) => {
		if (audioRef.current) {
			audioRef.current.currentTime = value[0];
			setCurrentTime(value[0]);
		}
	};
	const handleVolumeChange = (value) => {
		const newVolume = value[0];
		setVolume(newVolume);
		if (audioRef.current) audioRef.current.volume = newVolume;
		setIsMuted(newVolume === 0);
	};
	const toggleMute = () => {
		if (!audioRef.current) return;
		const newMuted = !isMuted;
		setIsMuted(newMuted);
		audioRef.current.muted = newMuted;
	};
	const skip = (seconds) => {
		if (audioRef.current) audioRef.current.currentTime += seconds;
	};
	const formatTime = (time) => {
		if (isNaN(time)) return "0:00";
		return `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, "0")}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-secondary/20 rounded-lg p-4 space-y-4 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: audioRef,
				src,
				onTimeUpdate: handleTimeUpdate,
				onLoadedMetadata: handleLoadedMetadata,
				onEnded: handleEnded
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-xs text-muted-foreground font-mono",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatTime(currentTime) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatTime(duration) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					value: [currentTime],
					max: duration || 100,
					step: .1,
					onValueChange: handleSeek,
					className: "w-full cursor-pointer"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => skip(-10),
							title: "Rewind 10s",
							className: "h-8 w-8 hover:bg-background/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "default",
							size: "icon",
							onClick: togglePlay,
							className: cn("h-10 w-10 rounded-full shadow-md transition-all", isPlaying ? "bg-primary text-primary-foreground" : "bg-primary/90 hover:bg-primary"),
							children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-5 w-5 fill-current" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-5 w-5 fill-current ml-0.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => skip(10),
							title: "Forward 10s",
							className: "h-8 w-8 hover:bg-background/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 w-32 hidden sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: toggleMute,
						className: "h-8 w-8 hover:bg-transparent",
						children: isMuted || volume === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : volume < .5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume1, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						value: [isMuted ? 0 : volume],
						max: 1,
						step: .01,
						onValueChange: handleVolumeChange,
						className: "w-20"
					})]
				})]
			})
		]
	});
}
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
							className: "p-4 flex items-center justify-center",
							children: track.src_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAudioPlayer, {
								src: track.src_url,
								isActive,
								onPlay: () => {
									onPlay(track);
									trackAudioPlay(track.title);
								},
								trackTitle: track.title
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
		let isMounted = true;
		const fetchData = async () => {
			setLoading(true);
			try {
				const [tracksData, albumData] = await Promise.all([getMusicTracks().catch((err) => {
					console.error("Failed to fetch music tracks:", err);
					return [];
				}), getAlbumConcept().catch((err) => {
					console.error("Failed to fetch album concept:", err);
					return null;
				})]);
				if (isMounted) {
					if (Array.isArray(tracksData)) setTracks(tracksData);
					if (albumData) setAlbumConcept(albumData);
				}
			} catch (error) {
				console.error("Unexpected error in MusicPage data fetch:", error);
			} finally {
				if (isMounted) setLoading(false);
			}
		};
		fetchData();
		return () => {
			isMounted = false;
		};
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

//# sourceMappingURL=MusicPage-CHAPLJjH.js.map