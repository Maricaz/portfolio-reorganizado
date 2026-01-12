import { t as ChevronLeft } from "./chevron-left-BjnzjFKY.js";
import { t as ChevronRight } from "./chevron-right-B41ShAvn.js";
import { t as CodeXml } from "./code-xml-Bzrk4KPx.js";
import { t as ExternalLink } from "./external-link-CQ6T06Or.js";
import { t as Image } from "./image-BqKYf6lF.js";
import { A as useAnalytics, H as Youtube, Lt as __toESM, Pt as require_react, Q as Linkedin, St as require_jsx_runtime, T as useLanguage, V as cn, k as supabase, nt as Github, ot as createLucideIcon, r as Skeleton, v as Button } from "./index-DYVzA97R.js";
import { t as useSEO } from "./use-seo-1iu94v5n.js";
import { t as Progress } from "./progress-D7WmXNQQ.js";
import { n as CardContent, t as Card } from "./card-Cb78Qy4O.js";
var Instagram = createLucideIcon("instagram", [
	["rect", {
		width: "20",
		height: "20",
		x: "2",
		y: "2",
		rx: "5",
		ry: "5",
		key: "2e1cvw"
	}],
	["path", {
		d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
		key: "9exkf1"
	}],
	["line", {
		x1: "17.5",
		x2: "17.51",
		y1: "6.5",
		y2: "6.5",
		key: "r4j83e"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react());
const getSocialLinks = async () => {
	const { data, error } = await supabase.from("social_links").select("*").order("created_at", { ascending: true });
	if (error) {
		console.error("Error fetching social links:", error);
		return [];
	}
	return data;
};
const getSkills = async () => {
	const { data, error } = await supabase.from("skills").select("*").order("value", { ascending: false });
	if (error) {
		console.error("Error fetching skills:", error);
		return [];
	}
	return data;
};
function isObject$1(subject) {
	return Object.prototype.toString.call(subject) === "[object Object]";
}
function isRecord(subject) {
	return isObject$1(subject) || Array.isArray(subject);
}
function canUseDOM() {
	return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
	const optionsAKeys = Object.keys(optionsA);
	const optionsBKeys = Object.keys(optionsB);
	if (optionsAKeys.length !== optionsBKeys.length) return false;
	if (JSON.stringify(Object.keys(optionsA.breakpoints || {})) !== JSON.stringify(Object.keys(optionsB.breakpoints || {}))) return false;
	return optionsAKeys.every((key) => {
		const valueA = optionsA[key];
		const valueB = optionsB[key];
		if (typeof valueA === "function") return `${valueA}` === `${valueB}`;
		if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
		return areOptionsEqual(valueA, valueB);
	});
}
function sortAndMapPluginToOptions(plugins) {
	return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map((plugin) => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
	if (pluginsA.length !== pluginsB.length) return false;
	const optionsA = sortAndMapPluginToOptions(pluginsA);
	const optionsB = sortAndMapPluginToOptions(pluginsB);
	return optionsA.every((optionA, index) => {
		const optionB = optionsB[index];
		return areOptionsEqual(optionA, optionB);
	});
}
function isNumber(subject) {
	return typeof subject === "number";
}
function isString(subject) {
	return typeof subject === "string";
}
function isBoolean(subject) {
	return typeof subject === "boolean";
}
function isObject(subject) {
	return Object.prototype.toString.call(subject) === "[object Object]";
}
function mathAbs(n) {
	return Math.abs(n);
}
function mathSign(n) {
	return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
	return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
	if (valueB === 0 || valueA === 0) return 0;
	if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
	return mathAbs(deltaAbs(mathAbs(valueB), mathAbs(valueA)) / valueB);
}
function roundToTwoDecimals(num) {
	return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
	return objectKeys(array).map(Number);
}
function arrayLast(array) {
	return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
	return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
	return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
	return Array.from(Array(n), (_, i) => startAt + i);
}
function objectKeys(object) {
	return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
	return [objectA, objectB].reduce((mergedObjects, currentObject) => {
		objectKeys(currentObject).forEach((key) => {
			const valueA = mergedObjects[key];
			const valueB = currentObject[key];
			mergedObjects[key] = isObject(valueA) && isObject(valueB) ? objectsMergeDeep(valueA, valueB) : valueB;
		});
		return mergedObjects;
	}, {});
}
function isMouseEvent(evt, ownerWindow) {
	return typeof ownerWindow.MouseEvent !== "undefined" && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
	const predefined = {
		start,
		center,
		end
	};
	function start() {
		return 0;
	}
	function center(n) {
		return end(n) / 2;
	}
	function end(n) {
		return viewSize - n;
	}
	function measure(n, index) {
		if (isString(align)) return predefined[align](n);
		return align(viewSize, n, index);
	}
	return { measure };
}
function EventStore() {
	let listeners = [];
	function add(node, type, handler, options = { passive: true }) {
		let removeListener;
		if ("addEventListener" in node) {
			node.addEventListener(type, handler, options);
			removeListener = () => node.removeEventListener(type, handler, options);
		} else {
			const legacyMediaQueryList = node;
			legacyMediaQueryList.addListener(handler);
			removeListener = () => legacyMediaQueryList.removeListener(handler);
		}
		listeners.push(removeListener);
		return self;
	}
	function clear() {
		listeners = listeners.filter((remove) => remove());
	}
	const self = {
		add,
		clear
	};
	return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
	const documentVisibleHandler = EventStore();
	const fixedTimeStep = 1e3 / 60;
	let lastTimeStamp = null;
	let accumulatedTime = 0;
	let animationId = 0;
	function init() {
		documentVisibleHandler.add(ownerDocument, "visibilitychange", () => {
			if (ownerDocument.hidden) reset();
		});
	}
	function destroy() {
		stop();
		documentVisibleHandler.clear();
	}
	function animate(timeStamp) {
		if (!animationId) return;
		if (!lastTimeStamp) {
			lastTimeStamp = timeStamp;
			update();
			update();
		}
		const timeElapsed = timeStamp - lastTimeStamp;
		lastTimeStamp = timeStamp;
		accumulatedTime += timeElapsed;
		while (accumulatedTime >= fixedTimeStep) {
			update();
			accumulatedTime -= fixedTimeStep;
		}
		render(accumulatedTime / fixedTimeStep);
		if (animationId) animationId = ownerWindow.requestAnimationFrame(animate);
	}
	function start() {
		if (animationId) return;
		animationId = ownerWindow.requestAnimationFrame(animate);
	}
	function stop() {
		ownerWindow.cancelAnimationFrame(animationId);
		lastTimeStamp = null;
		accumulatedTime = 0;
		animationId = 0;
	}
	function reset() {
		lastTimeStamp = null;
		accumulatedTime = 0;
	}
	return {
		init,
		destroy,
		start,
		stop,
		update,
		render
	};
}
function Axis(axis, contentDirection) {
	const isRightToLeft = contentDirection === "rtl";
	const isVertical = axis === "y";
	const scroll = isVertical ? "y" : "x";
	const cross = isVertical ? "x" : "y";
	const sign = !isVertical && isRightToLeft ? -1 : 1;
	const startEdge = getStartEdge();
	const endEdge = getEndEdge();
	function measureSize(nodeRect) {
		const { height, width } = nodeRect;
		return isVertical ? height : width;
	}
	function getStartEdge() {
		if (isVertical) return "top";
		return isRightToLeft ? "right" : "left";
	}
	function getEndEdge() {
		if (isVertical) return "bottom";
		return isRightToLeft ? "left" : "right";
	}
	function direction(n) {
		return n * sign;
	}
	return {
		scroll,
		cross,
		startEdge,
		endEdge,
		measureSize,
		direction
	};
}
function Limit(min = 0, max = 0) {
	const length = mathAbs(min - max);
	function reachedMin(n) {
		return n < min;
	}
	function reachedMax(n) {
		return n > max;
	}
	function reachedAny(n) {
		return reachedMin(n) || reachedMax(n);
	}
	function constrain(n) {
		if (!reachedAny(n)) return n;
		return reachedMin(n) ? min : max;
	}
	function removeOffset(n) {
		if (!length) return n;
		return n - length * Math.ceil((n - max) / length);
	}
	return {
		length,
		max,
		min,
		constrain,
		reachedAny,
		reachedMax,
		reachedMin,
		removeOffset
	};
}
function Counter(max, start, loop) {
	const { constrain } = Limit(0, max);
	const loopEnd = max + 1;
	let counter = withinLimit(start);
	function withinLimit(n) {
		return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
	}
	function get() {
		return counter;
	}
	function set(n) {
		counter = withinLimit(n);
		return self;
	}
	function add(n) {
		return clone().set(get() + n);
	}
	function clone() {
		return Counter(max, get(), loop);
	}
	const self = {
		get,
		set,
		add,
		clone
	};
	return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
	const { cross: crossAxis, direction } = axis;
	const focusNodes = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	];
	const nonPassiveEvent = { passive: false };
	const initEvents = EventStore();
	const dragEvents = EventStore();
	const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
	const snapForceBoost = {
		mouse: 300,
		touch: 400
	};
	const freeForceBoost = {
		mouse: 500,
		touch: 600
	};
	const baseSpeed = dragFree ? 43 : 25;
	let isMoving = false;
	let startScroll = 0;
	let startCross = 0;
	let pointerIsDown = false;
	let preventScroll = false;
	let preventClick = false;
	let isMouse = false;
	function init(emblaApi) {
		if (!watchDrag) return;
		function downIfAllowed(evt) {
			if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
		}
		const node = rootNode;
		initEvents.add(node, "dragstart", (evt) => evt.preventDefault(), nonPassiveEvent).add(node, "touchmove", () => void 0, nonPassiveEvent).add(node, "touchend", () => void 0).add(node, "touchstart", downIfAllowed).add(node, "mousedown", downIfAllowed).add(node, "touchcancel", up).add(node, "contextmenu", up).add(node, "click", click, true);
	}
	function destroy() {
		initEvents.clear();
		dragEvents.clear();
	}
	function addDragEvents() {
		const node = isMouse ? ownerDocument : rootNode;
		dragEvents.add(node, "touchmove", move, nonPassiveEvent).add(node, "touchend", up).add(node, "mousemove", move, nonPassiveEvent).add(node, "mouseup", up);
	}
	function isFocusNode(node) {
		const nodeName = node.nodeName || "";
		return focusNodes.includes(nodeName);
	}
	function forceBoost() {
		return (dragFree ? freeForceBoost : snapForceBoost)[isMouse ? "mouse" : "touch"];
	}
	function allowedForce(force, targetChanged) {
		const next = index.add(mathSign(force) * -1);
		const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
		if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
		if (skipSnaps && targetChanged) return baseForce * .5;
		return scrollTarget.byIndex(next.get(), 0).distance;
	}
	function down(evt) {
		const isMouseEvt = isMouseEvent(evt, ownerWindow);
		isMouse = isMouseEvt;
		preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
		isMoving = deltaAbs(target.get(), location.get()) >= 2;
		if (isMouseEvt && evt.button !== 0) return;
		if (isFocusNode(evt.target)) return;
		pointerIsDown = true;
		dragTracker.pointerDown(evt);
		scrollBody.useFriction(0).useDuration(0);
		target.set(location);
		addDragEvents();
		startScroll = dragTracker.readPoint(evt);
		startCross = dragTracker.readPoint(evt, crossAxis);
		eventHandler.emit("pointerDown");
	}
	function move(evt) {
		if (!isMouseEvent(evt, ownerWindow) && evt.touches.length >= 2) return up(evt);
		const lastScroll = dragTracker.readPoint(evt);
		const lastCross = dragTracker.readPoint(evt, crossAxis);
		const diffScroll = deltaAbs(lastScroll, startScroll);
		const diffCross = deltaAbs(lastCross, startCross);
		if (!preventScroll && !isMouse) {
			if (!evt.cancelable) return up(evt);
			preventScroll = diffScroll > diffCross;
			if (!preventScroll) return up(evt);
		}
		const diff = dragTracker.pointerMove(evt);
		if (diffScroll > dragThreshold) preventClick = true;
		scrollBody.useFriction(.3).useDuration(.75);
		animation.start();
		target.add(direction(diff));
		evt.preventDefault();
	}
	function up(evt) {
		const targetChanged = scrollTarget.byDistance(0, false).index !== index.get();
		const rawForce = dragTracker.pointerUp(evt) * forceBoost();
		const force = allowedForce(direction(rawForce), targetChanged);
		const forceFactor = factorAbs(rawForce, force);
		const speed = baseSpeed - 10 * forceFactor;
		const friction = baseFriction + forceFactor / 50;
		preventScroll = false;
		pointerIsDown = false;
		dragEvents.clear();
		scrollBody.useDuration(speed).useFriction(friction);
		scrollTo.distance(force, !dragFree);
		isMouse = false;
		eventHandler.emit("pointerUp");
	}
	function click(evt) {
		if (preventClick) {
			evt.stopPropagation();
			evt.preventDefault();
			preventClick = false;
		}
	}
	function pointerDown() {
		return pointerIsDown;
	}
	return {
		init,
		destroy,
		pointerDown
	};
}
function DragTracker(axis, ownerWindow) {
	const logInterval = 170;
	let startEvent;
	let lastEvent;
	function readTime(evt) {
		return evt.timeStamp;
	}
	function readPoint(evt, evtAxis) {
		const coord = `client${(evtAxis || axis.scroll) === "x" ? "X" : "Y"}`;
		return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
	}
	function pointerDown(evt) {
		startEvent = evt;
		lastEvent = evt;
		return readPoint(evt);
	}
	function pointerMove(evt) {
		const diff = readPoint(evt) - readPoint(lastEvent);
		const expired = readTime(evt) - readTime(startEvent) > logInterval;
		lastEvent = evt;
		if (expired) startEvent = evt;
		return diff;
	}
	function pointerUp(evt) {
		if (!startEvent || !lastEvent) return 0;
		const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
		const diffTime = readTime(evt) - readTime(startEvent);
		const expired = readTime(evt) - readTime(lastEvent) > logInterval;
		const force = diffDrag / diffTime;
		return diffTime && !expired && mathAbs(force) > .1 ? force : 0;
	}
	return {
		pointerDown,
		pointerMove,
		pointerUp,
		readPoint
	};
}
function NodeRects() {
	function measure(node) {
		const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
		return {
			top: offsetTop,
			right: offsetLeft + offsetWidth,
			bottom: offsetTop + offsetHeight,
			left: offsetLeft,
			width: offsetWidth,
			height: offsetHeight
		};
	}
	return { measure };
}
function PercentOfView(viewSize) {
	function measure(n) {
		return viewSize * (n / 100);
	}
	return { measure };
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
	const observeNodes = [container].concat(slides);
	let resizeObserver;
	let containerSize;
	let slideSizes = [];
	let destroyed = false;
	function readSize(node) {
		return axis.measureSize(nodeRects.measure(node));
	}
	function init(emblaApi) {
		if (!watchResize) return;
		containerSize = readSize(container);
		slideSizes = slides.map(readSize);
		function defaultCallback(entries) {
			for (const entry of entries) {
				if (destroyed) return;
				const isContainer = entry.target === container;
				const slideIndex = slides.indexOf(entry.target);
				const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
				if (mathAbs(readSize(isContainer ? container : slides[slideIndex]) - lastSize) >= .5) {
					emblaApi.reInit();
					eventHandler.emit("resize");
					break;
				}
			}
		}
		resizeObserver = new ResizeObserver((entries) => {
			if (isBoolean(watchResize) || watchResize(emblaApi, entries)) defaultCallback(entries);
		});
		ownerWindow.requestAnimationFrame(() => {
			observeNodes.forEach((node) => resizeObserver.observe(node));
		});
	}
	function destroy() {
		destroyed = true;
		if (resizeObserver) resizeObserver.disconnect();
	}
	return {
		init,
		destroy
	};
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
	let scrollVelocity = 0;
	let scrollDirection = 0;
	let scrollDuration = baseDuration;
	let scrollFriction = baseFriction;
	let rawLocation = location.get();
	let rawLocationPrevious = 0;
	function seek() {
		const displacement = target.get() - location.get();
		const isInstant = !scrollDuration;
		let scrollDistance = 0;
		if (isInstant) {
			scrollVelocity = 0;
			previousLocation.set(target);
			location.set(target);
			scrollDistance = displacement;
		} else {
			previousLocation.set(location);
			scrollVelocity += displacement / scrollDuration;
			scrollVelocity *= scrollFriction;
			rawLocation += scrollVelocity;
			location.add(scrollVelocity);
			scrollDistance = rawLocation - rawLocationPrevious;
		}
		scrollDirection = mathSign(scrollDistance);
		rawLocationPrevious = rawLocation;
		return self;
	}
	function settled() {
		return mathAbs(target.get() - offsetLocation.get()) < .001;
	}
	function duration() {
		return scrollDuration;
	}
	function direction() {
		return scrollDirection;
	}
	function velocity() {
		return scrollVelocity;
	}
	function useBaseDuration() {
		return useDuration(baseDuration);
	}
	function useBaseFriction() {
		return useFriction(baseFriction);
	}
	function useDuration(n) {
		scrollDuration = n;
		return self;
	}
	function useFriction(n) {
		scrollFriction = n;
		return self;
	}
	const self = {
		direction,
		duration,
		velocity,
		seek,
		settled,
		useBaseFriction,
		useBaseDuration,
		useFriction,
		useDuration
	};
	return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
	const pullBackThreshold = percentOfView.measure(10);
	const edgeOffsetTolerance = percentOfView.measure(50);
	const frictionLimit = Limit(.1, .99);
	let disabled = false;
	function shouldConstrain() {
		if (disabled) return false;
		if (!limit.reachedAny(target.get())) return false;
		if (!limit.reachedAny(location.get())) return false;
		return true;
	}
	function constrain(pointerDown) {
		if (!shouldConstrain()) return;
		const diffToEdge = mathAbs(limit[limit.reachedMin(location.get()) ? "min" : "max"] - location.get());
		const diffToTarget = target.get() - location.get();
		const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
		target.subtract(diffToTarget * friction);
		if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
			target.set(limit.constrain(target.get()));
			scrollBody.useDuration(25).useBaseFriction();
		}
	}
	function toggleActive(active) {
		disabled = !active;
	}
	return {
		shouldConstrain,
		constrain,
		toggleActive
	};
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
	const scrollBounds = Limit(-contentSize + viewSize, 0);
	const snapsBounded = measureBounded();
	const scrollContainLimit = findScrollContainLimit();
	const snapsContained = measureContained();
	function usePixelTolerance(bound, snap) {
		return deltaAbs(bound, snap) <= 1;
	}
	function findScrollContainLimit() {
		const startSnap = snapsBounded[0];
		const endSnap = arrayLast(snapsBounded);
		return Limit(snapsBounded.lastIndexOf(startSnap), snapsBounded.indexOf(endSnap) + 1);
	}
	function measureBounded() {
		return snapsAligned.map((snapAligned, index) => {
			const { min, max } = scrollBounds;
			const snap = scrollBounds.constrain(snapAligned);
			const isFirst = !index;
			const isLast = arrayIsLastIndex(snapsAligned, index);
			if (isFirst) return max;
			if (isLast) return min;
			if (usePixelTolerance(min, snap)) return min;
			if (usePixelTolerance(max, snap)) return max;
			return snap;
		}).map((scrollBound) => parseFloat(scrollBound.toFixed(3)));
	}
	function measureContained() {
		if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
		if (containScroll === "keepSnaps") return snapsBounded;
		const { min, max } = scrollContainLimit;
		return snapsBounded.slice(min, max);
	}
	return {
		snapsContained,
		scrollContainLimit
	};
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
	const max = scrollSnaps[0];
	return { limit: Limit(loop ? max - contentSize : arrayLast(scrollSnaps), max) };
}
function ScrollLooper(contentSize, limit, location, vectors) {
	const jointSafety = .1;
	const { reachedMin, reachedMax } = Limit(limit.min + jointSafety, limit.max + jointSafety);
	function shouldLoop(direction) {
		if (direction === 1) return reachedMax(location.get());
		if (direction === -1) return reachedMin(location.get());
		return false;
	}
	function loop(direction) {
		if (!shouldLoop(direction)) return;
		const loopDistance = contentSize * (direction * -1);
		vectors.forEach((v) => v.add(loopDistance));
	}
	return { loop };
}
function ScrollProgress(limit) {
	const { max, length } = limit;
	function get(n) {
		const currentLocation = n - max;
		return length ? currentLocation / -length : 0;
	}
	return { get };
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
	const { startEdge, endEdge } = axis;
	const { groupSlides } = slidesToScroll;
	const alignments = measureSizes().map(alignment.measure);
	const snaps = measureUnaligned();
	const snapsAligned = measureAligned();
	function measureSizes() {
		return groupSlides(slideRects).map((rects) => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
	}
	function measureUnaligned() {
		return slideRects.map((rect) => containerRect[startEdge] - rect[startEdge]).map((snap) => -mathAbs(snap));
	}
	function measureAligned() {
		return groupSlides(snaps).map((g) => g[0]).map((snap, index) => snap + alignments[index]);
	}
	return {
		snaps,
		snapsAligned
	};
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
	const { groupSlides } = slidesToScroll;
	const { min, max } = scrollContainLimit;
	const slideRegistry = createSlideRegistry();
	function createSlideRegistry() {
		const groupedSlideIndexes = groupSlides(slideIndexes);
		const doNotContain = !containSnaps || containScroll === "keepSnaps";
		if (scrollSnaps.length === 1) return [slideIndexes];
		if (doNotContain) return groupedSlideIndexes;
		return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
			const isFirst = !index;
			const isLast = arrayIsLastIndex(groups, index);
			if (isFirst) return arrayFromNumber(arrayLast(groups[0]) + 1);
			if (isLast) return arrayFromNumber(arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1, arrayLast(groups)[0]);
			return group;
		});
	}
	return { slideRegistry };
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
	const { reachedAny, removeOffset, constrain } = limit;
	function minDistance(distances) {
		return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
	}
	function findTargetSnap(target) {
		const distance = loop ? removeOffset(target) : constrain(target);
		const { index } = scrollSnaps.map((snap, index$1) => ({
			diff: shortcut(snap - distance, 0),
			index: index$1
		})).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff))[0];
		return {
			index,
			distance
		};
	}
	function shortcut(target, direction) {
		const targets = [
			target,
			target + contentSize,
			target - contentSize
		];
		if (!loop) return target;
		if (!direction) return minDistance(targets);
		const matchingTargets = targets.filter((t) => mathSign(t) === direction);
		if (matchingTargets.length) return minDistance(matchingTargets);
		return arrayLast(targets) - contentSize;
	}
	function byIndex(index, direction) {
		return {
			index,
			distance: shortcut(scrollSnaps[index] - targetVector.get(), direction)
		};
	}
	function byDistance(distance, snap) {
		const target = targetVector.get() + distance;
		const { index, distance: targetSnapDistance } = findTargetSnap(target);
		const reachedBound = !loop && reachedAny(target);
		if (!snap || reachedBound) return {
			index,
			distance
		};
		return {
			index,
			distance: distance + shortcut(scrollSnaps[index] - targetSnapDistance, 0)
		};
	}
	return {
		byDistance,
		byIndex,
		shortcut
	};
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
	function scrollTo(target) {
		const distanceDiff = target.distance;
		const indexDiff = target.index !== indexCurrent.get();
		targetVector.add(distanceDiff);
		if (distanceDiff) if (scrollBody.duration()) animation.start();
		else {
			animation.update();
			animation.render(1);
			animation.update();
		}
		if (indexDiff) {
			indexPrevious.set(indexCurrent.get());
			indexCurrent.set(target.index);
			eventHandler.emit("select");
		}
	}
	function distance(n, snap) {
		scrollTo(scrollTarget.byDistance(n, snap));
	}
	function index(n, direction) {
		const targetIndex = indexCurrent.clone().set(n);
		scrollTo(scrollTarget.byIndex(targetIndex.get(), direction));
	}
	return {
		distance,
		index
	};
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
	const focusListenerOptions = {
		passive: true,
		capture: true
	};
	let lastTabPressTime = 0;
	function init(emblaApi) {
		if (!watchFocus) return;
		function defaultCallback(index) {
			if ((/* @__PURE__ */ new Date()).getTime() - lastTabPressTime > 10) return;
			eventHandler.emit("slideFocusStart");
			root.scrollLeft = 0;
			const group = slideRegistry.findIndex((group$1) => group$1.includes(index));
			if (!isNumber(group)) return;
			scrollBody.useDuration(0);
			scrollTo.index(group, 0);
			eventHandler.emit("slideFocus");
		}
		eventStore.add(document, "keydown", registerTabPress, false);
		slides.forEach((slide, slideIndex) => {
			eventStore.add(slide, "focus", (evt) => {
				if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) defaultCallback(slideIndex);
			}, focusListenerOptions);
		});
	}
	function registerTabPress(event) {
		if (event.code === "Tab") lastTabPressTime = (/* @__PURE__ */ new Date()).getTime();
	}
	return { init };
}
function Vector1D(initialValue) {
	let value = initialValue;
	function get() {
		return value;
	}
	function set(n) {
		value = normalizeInput(n);
	}
	function add(n) {
		value += normalizeInput(n);
	}
	function subtract(n) {
		value -= normalizeInput(n);
	}
	function normalizeInput(n) {
		return isNumber(n) ? n : n.get();
	}
	return {
		get,
		set,
		add,
		subtract
	};
}
function Translate(axis, container) {
	const translate = axis.scroll === "x" ? x : y;
	const containerStyle = container.style;
	let previousTarget = null;
	let disabled = false;
	function x(n) {
		return `translate3d(${n}px,0px,0px)`;
	}
	function y(n) {
		return `translate3d(0px,${n}px,0px)`;
	}
	function to(target) {
		if (disabled) return;
		const newTarget = roundToTwoDecimals(axis.direction(target));
		if (newTarget === previousTarget) return;
		containerStyle.transform = translate(newTarget);
		previousTarget = newTarget;
	}
	function toggleActive(active) {
		disabled = !active;
	}
	function clear() {
		if (disabled) return;
		containerStyle.transform = "";
		if (!container.getAttribute("style")) container.removeAttribute("style");
	}
	return {
		clear,
		to,
		toggleActive
	};
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
	const roundingSafety = .5;
	const ascItems = arrayKeys(slideSizesWithGaps);
	const descItems = arrayKeys(slideSizesWithGaps).reverse();
	const loopPoints = startPoints().concat(endPoints());
	function removeSlideSizes(indexes, from) {
		return indexes.reduce((a, i) => {
			return a - slideSizesWithGaps[i];
		}, from);
	}
	function slidesInGap(indexes, gap) {
		return indexes.reduce((a, i) => {
			return removeSlideSizes(a, gap) > 0 ? a.concat([i]) : a;
		}, []);
	}
	function findSlideBounds(offset) {
		return snaps.map((snap, index) => ({
			start: snap - slideSizes[index] + roundingSafety + offset,
			end: snap + viewSize - roundingSafety + offset
		}));
	}
	function findLoopPoints(indexes, offset, isEndEdge) {
		const slideBounds = findSlideBounds(offset);
		return indexes.map((index) => {
			const initial = isEndEdge ? 0 : -contentSize;
			const altered = isEndEdge ? contentSize : 0;
			const boundEdge = isEndEdge ? "end" : "start";
			const loopPoint = slideBounds[index][boundEdge];
			return {
				index,
				loopPoint,
				slideLocation: Vector1D(-1),
				translate: Translate(axis, slides[index]),
				target: () => location.get() > loopPoint ? initial : altered
			};
		});
	}
	function startPoints() {
		const gap = scrollSnaps[0];
		return findLoopPoints(slidesInGap(descItems, gap), contentSize, false);
	}
	function endPoints() {
		return findLoopPoints(slidesInGap(ascItems, viewSize - scrollSnaps[0] - 1), -contentSize, true);
	}
	function canLoop() {
		return loopPoints.every(({ index }) => {
			return removeSlideSizes(ascItems.filter((i) => i !== index), viewSize) <= .1;
		});
	}
	function loop() {
		loopPoints.forEach((loopPoint) => {
			const { target, translate, slideLocation } = loopPoint;
			const shiftLocation = target();
			if (shiftLocation === slideLocation.get()) return;
			translate.to(shiftLocation);
			slideLocation.set(shiftLocation);
		});
	}
	function clear() {
		loopPoints.forEach((loopPoint) => loopPoint.translate.clear());
	}
	return {
		canLoop,
		clear,
		loop,
		loopPoints
	};
}
function SlidesHandler(container, eventHandler, watchSlides) {
	let mutationObserver;
	let destroyed = false;
	function init(emblaApi) {
		if (!watchSlides) return;
		function defaultCallback(mutations) {
			for (const mutation of mutations) if (mutation.type === "childList") {
				emblaApi.reInit();
				eventHandler.emit("slidesChanged");
				break;
			}
		}
		mutationObserver = new MutationObserver((mutations) => {
			if (destroyed) return;
			if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) defaultCallback(mutations);
		});
		mutationObserver.observe(container, { childList: true });
	}
	function destroy() {
		if (mutationObserver) mutationObserver.disconnect();
		destroyed = true;
	}
	return {
		init,
		destroy
	};
}
function SlidesInView(container, slides, eventHandler, threshold) {
	const intersectionEntryMap = {};
	let inViewCache = null;
	let notInViewCache = null;
	let intersectionObserver;
	let destroyed = false;
	function init() {
		intersectionObserver = new IntersectionObserver((entries) => {
			if (destroyed) return;
			entries.forEach((entry) => {
				const index = slides.indexOf(entry.target);
				intersectionEntryMap[index] = entry;
			});
			inViewCache = null;
			notInViewCache = null;
			eventHandler.emit("slidesInView");
		}, {
			root: container.parentElement,
			threshold
		});
		slides.forEach((slide) => intersectionObserver.observe(slide));
	}
	function destroy() {
		if (intersectionObserver) intersectionObserver.disconnect();
		destroyed = true;
	}
	function createInViewList(inView) {
		return objectKeys(intersectionEntryMap).reduce((list, slideIndex) => {
			const index = parseInt(slideIndex);
			const { isIntersecting } = intersectionEntryMap[index];
			if (inView && isIntersecting || !inView && !isIntersecting) list.push(index);
			return list;
		}, []);
	}
	function get(inView = true) {
		if (inView && inViewCache) return inViewCache;
		if (!inView && notInViewCache) return notInViewCache;
		const slideIndexes = createInViewList(inView);
		if (inView) inViewCache = slideIndexes;
		if (!inView) notInViewCache = slideIndexes;
		return slideIndexes;
	}
	return {
		init,
		destroy,
		get
	};
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
	const { measureSize, startEdge, endEdge } = axis;
	const withEdgeGap = slideRects[0] && readEdgeGap;
	const startGap = measureStartGap();
	const endGap = measureEndGap();
	const slideSizes = slideRects.map(measureSize);
	const slideSizesWithGaps = measureWithGaps();
	function measureStartGap() {
		if (!withEdgeGap) return 0;
		const slideRect = slideRects[0];
		return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
	}
	function measureEndGap() {
		if (!withEdgeGap) return 0;
		const style = ownerWindow.getComputedStyle(arrayLast(slides));
		return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
	}
	function measureWithGaps() {
		return slideRects.map((rect, index, rects) => {
			const isFirst = !index;
			const isLast = arrayIsLastIndex(rects, index);
			if (isFirst) return slideSizes[index] + startGap;
			if (isLast) return slideSizes[index] + endGap;
			return rects[index + 1][startEdge] - rect[startEdge];
		}).map(mathAbs);
	}
	return {
		slideSizes,
		slideSizesWithGaps,
		startGap,
		endGap
	};
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
	const { startEdge, endEdge, direction } = axis;
	const groupByNumber = isNumber(slidesToScroll);
	function byNumber(array, groupSize) {
		return arrayKeys(array).filter((i) => i % groupSize === 0).map((i) => array.slice(i, i + groupSize));
	}
	function bySize(array) {
		if (!array.length) return [];
		return arrayKeys(array).reduce((groups, rectB, index) => {
			const rectA = arrayLast(groups) || 0;
			const isFirst = rectA === 0;
			const isLast = rectB === arrayLastIndex(array);
			const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
			const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
			const gapA = !loop && isFirst ? direction(startGap) : 0;
			const chunkSize = mathAbs(edgeB - (!loop && isLast ? direction(endGap) : 0) - (edgeA + gapA));
			if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
			if (isLast) groups.push(array.length);
			return groups;
		}, []).map((currentSize, index, groups) => {
			const previousSize = Math.max(groups[index - 1] || 0);
			return array.slice(previousSize, currentSize);
		});
	}
	function groupSlides(array) {
		return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
	}
	return { groupSlides };
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
	const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
	const pixelTolerance = 2;
	const nodeRects = NodeRects();
	const containerRect = nodeRects.measure(container);
	const slideRects = slides.map(nodeRects.measure);
	const axis = Axis(scrollAxis, direction);
	const viewSize = axis.measureSize(containerRect);
	const percentOfView = PercentOfView(viewSize);
	const alignment = Alignment(align, viewSize);
	const containSnaps = !loop && !!containScroll;
	const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, loop || !!containScroll, ownerWindow);
	const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
	const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
	const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
	const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
	const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
	const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
	const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
	const indexPrevious = index.clone();
	const slideIndexes = arrayKeys(slides);
	const update = ({ dragHandler, scrollBody: scrollBody$1, scrollBounds, options: { loop: loop$1 } }) => {
		if (!loop$1) scrollBounds.constrain(dragHandler.pointerDown());
		scrollBody$1.seek();
	};
	const render = ({ scrollBody: scrollBody$1, translate, location: location$1, offsetLocation: offsetLocation$1, previousLocation: previousLocation$1, scrollLooper, slideLooper, dragHandler, animation: animation$1, eventHandler: eventHandler$1, scrollBounds, options: { loop: loop$1 } }, alpha) => {
		const shouldSettle = scrollBody$1.settled();
		const withinBounds = !scrollBounds.shouldConstrain();
		const hasSettled = loop$1 ? shouldSettle : shouldSettle && withinBounds;
		const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
		if (hasSettledAndIdle) animation$1.stop();
		const interpolatedLocation = location$1.get() * alpha + previousLocation$1.get() * (1 - alpha);
		offsetLocation$1.set(interpolatedLocation);
		if (loop$1) {
			scrollLooper.loop(scrollBody$1.direction());
			slideLooper.loop();
		}
		translate.to(offsetLocation$1.get());
		if (hasSettledAndIdle) eventHandler$1.emit("settle");
		if (!hasSettled) eventHandler$1.emit("scroll");
	};
	const animation = Animations(ownerDocument, ownerWindow, () => update(engine), (alpha) => render(engine, alpha));
	const friction = .68;
	const startLocation = scrollSnaps[index.get()];
	const location = Vector1D(startLocation);
	const previousLocation = Vector1D(startLocation);
	const offsetLocation = Vector1D(startLocation);
	const target = Vector1D(startLocation);
	const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
	const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
	const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
	const scrollProgress = ScrollProgress(limit);
	const eventStore = EventStore();
	const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
	const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
	const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
	const engine = {
		ownerDocument,
		ownerWindow,
		eventHandler,
		containerRect,
		slideRects,
		animation,
		axis,
		dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
		eventStore,
		percentOfView,
		index,
		indexPrevious,
		limit,
		location,
		offsetLocation,
		previousLocation,
		options,
		resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
		scrollBody,
		scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
		scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
			location,
			offsetLocation,
			previousLocation,
			target
		]),
		scrollProgress,
		scrollSnapList: scrollSnaps.map(scrollProgress.get),
		scrollSnaps,
		scrollTarget,
		scrollTo,
		slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
		slideFocus,
		slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
		slidesInView,
		slideIndexes,
		slideRegistry,
		slidesToScroll,
		target,
		translate: Translate(axis, container)
	};
	return engine;
}
function EventHandler() {
	let listeners = {};
	let api;
	function init(emblaApi) {
		api = emblaApi;
	}
	function getListeners(evt) {
		return listeners[evt] || [];
	}
	function emit(evt) {
		getListeners(evt).forEach((e) => e(api, evt));
		return self;
	}
	function on(evt, cb) {
		listeners[evt] = getListeners(evt).concat([cb]);
		return self;
	}
	function off(evt, cb) {
		listeners[evt] = getListeners(evt).filter((e) => e !== cb);
		return self;
	}
	function clear() {
		listeners = {};
	}
	const self = {
		init,
		emit,
		off,
		on,
		clear
	};
	return self;
}
var defaultOptions$1 = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: false,
	dragThreshold: 10,
	loop: false,
	skipSnaps: false,
	duration: 25,
	startIndex: 0,
	active: true,
	watchDrag: true,
	watchResize: true,
	watchSlides: true,
	watchFocus: true
};
function OptionsHandler(ownerWindow) {
	function mergeOptions(optionsA, optionsB) {
		return objectsMergeDeep(optionsA, optionsB || {});
	}
	function optionsAtMedia(options) {
		const optionsAtMedia$1 = options.breakpoints || {};
		return mergeOptions(options, objectKeys(optionsAtMedia$1).filter((media) => ownerWindow.matchMedia(media).matches).map((media) => optionsAtMedia$1[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {}));
	}
	function optionsMediaQueries(optionsList) {
		return optionsList.map((options) => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
	}
	return {
		mergeOptions,
		optionsAtMedia,
		optionsMediaQueries
	};
}
function PluginsHandler(optionsHandler) {
	let activePlugins = [];
	function init(emblaApi, plugins) {
		activePlugins = plugins.filter(({ options }) => optionsHandler.optionsAtMedia(options).active !== false);
		activePlugins.forEach((plugin) => plugin.init(emblaApi, optionsHandler));
		return plugins.reduce((map, plugin) => Object.assign(map, { [plugin.name]: plugin }), {});
	}
	function destroy() {
		activePlugins = activePlugins.filter((plugin) => plugin.destroy());
	}
	return {
		init,
		destroy
	};
}
function EmblaCarousel(root, userOptions, userPlugins) {
	const ownerDocument = root.ownerDocument;
	const ownerWindow = ownerDocument.defaultView;
	const optionsHandler = OptionsHandler(ownerWindow);
	const pluginsHandler = PluginsHandler(optionsHandler);
	const mediaHandlers = EventStore();
	const eventHandler = EventHandler();
	const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
	const { on, off, emit } = eventHandler;
	const reInit = reActivate;
	let destroyed = false;
	let engine;
	let optionsBase = mergeOptions(defaultOptions$1, EmblaCarousel.globalOptions);
	let options = mergeOptions(optionsBase);
	let pluginList = [];
	let pluginApis;
	let container;
	let slides;
	function storeElements() {
		const { container: userContainer, slides: userSlides } = options;
		container = (isString(userContainer) ? root.querySelector(userContainer) : userContainer) || root.children[0];
		const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
		slides = [].slice.call(customSlides || container.children);
	}
	function createEngine(options$1) {
		const engine$1 = Engine(root, container, slides, ownerDocument, ownerWindow, options$1, eventHandler);
		if (options$1.loop && !engine$1.slideLooper.canLoop()) return createEngine(Object.assign({}, options$1, { loop: false }));
		return engine$1;
	}
	function activate(withOptions, withPlugins) {
		if (destroyed) return;
		optionsBase = mergeOptions(optionsBase, withOptions);
		options = optionsAtMedia(optionsBase);
		pluginList = withPlugins || pluginList;
		storeElements();
		engine = createEngine(options);
		optionsMediaQueries([optionsBase, ...pluginList.map(({ options: options$1 }) => options$1)]).forEach((query) => mediaHandlers.add(query, "change", reActivate));
		if (!options.active) return;
		engine.translate.to(engine.location.get());
		engine.animation.init();
		engine.slidesInView.init();
		engine.slideFocus.init(self);
		engine.eventHandler.init(self);
		engine.resizeHandler.init(self);
		engine.slidesHandler.init(self);
		if (engine.options.loop) engine.slideLooper.loop();
		if (container.offsetParent && slides.length) engine.dragHandler.init(self);
		pluginApis = pluginsHandler.init(self, pluginList);
	}
	function reActivate(withOptions, withPlugins) {
		const startIndex = selectedScrollSnap();
		deActivate();
		activate(mergeOptions({ startIndex }, withOptions), withPlugins);
		eventHandler.emit("reInit");
	}
	function deActivate() {
		engine.dragHandler.destroy();
		engine.eventStore.clear();
		engine.translate.clear();
		engine.slideLooper.clear();
		engine.resizeHandler.destroy();
		engine.slidesHandler.destroy();
		engine.slidesInView.destroy();
		engine.animation.destroy();
		pluginsHandler.destroy();
		mediaHandlers.clear();
	}
	function destroy() {
		if (destroyed) return;
		destroyed = true;
		mediaHandlers.clear();
		deActivate();
		eventHandler.emit("destroy");
		eventHandler.clear();
	}
	function scrollTo(index, jump, direction) {
		if (!options.active || destroyed) return;
		engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
		engine.scrollTo.index(index, direction || 0);
	}
	function scrollNext(jump) {
		scrollTo(engine.index.add(1).get(), jump, -1);
	}
	function scrollPrev(jump) {
		scrollTo(engine.index.add(-1).get(), jump, 1);
	}
	function canScrollNext() {
		return engine.index.add(1).get() !== selectedScrollSnap();
	}
	function canScrollPrev() {
		return engine.index.add(-1).get() !== selectedScrollSnap();
	}
	function scrollSnapList() {
		return engine.scrollSnapList;
	}
	function scrollProgress() {
		return engine.scrollProgress.get(engine.offsetLocation.get());
	}
	function selectedScrollSnap() {
		return engine.index.get();
	}
	function previousScrollSnap() {
		return engine.indexPrevious.get();
	}
	function slidesInView() {
		return engine.slidesInView.get();
	}
	function slidesNotInView() {
		return engine.slidesInView.get(false);
	}
	function plugins() {
		return pluginApis;
	}
	function internalEngine() {
		return engine;
	}
	function rootNode() {
		return root;
	}
	function containerNode() {
		return container;
	}
	function slideNodes() {
		return slides;
	}
	const self = {
		canScrollNext,
		canScrollPrev,
		containerNode,
		internalEngine,
		destroy,
		off,
		on,
		emit,
		plugins,
		previousScrollSnap,
		reInit,
		rootNode,
		scrollNext,
		scrollPrev,
		scrollProgress,
		scrollSnapList,
		scrollTo,
		selectedScrollSnap,
		slideNodes,
		slidesInView,
		slidesNotInView
	};
	activate(userOptions, userPlugins);
	setTimeout(() => eventHandler.emit("init"), 0);
	return self;
}
EmblaCarousel.globalOptions = void 0;
function useEmblaCarousel(options = {}, plugins = []) {
	const storedOptions = (0, import_react.useRef)(options);
	const storedPlugins = (0, import_react.useRef)(plugins);
	const [emblaApi, setEmblaApi] = (0, import_react.useState)();
	const [viewport, setViewport] = (0, import_react.useState)();
	const reInit = (0, import_react.useCallback)(() => {
		if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		if (areOptionsEqual(storedOptions.current, options)) return;
		storedOptions.current = options;
		reInit();
	}, [options, reInit]);
	(0, import_react.useEffect)(() => {
		if (arePluginsEqual(storedPlugins.current, plugins)) return;
		storedPlugins.current = plugins;
		reInit();
	}, [plugins, reInit]);
	(0, import_react.useEffect)(() => {
		if (canUseDOM() && viewport) {
			EmblaCarousel.globalOptions = useEmblaCarousel.globalOptions;
			const newEmblaApi = EmblaCarousel(viewport, storedOptions.current, storedPlugins.current);
			setEmblaApi(newEmblaApi);
			return () => newEmblaApi.destroy();
		} else setEmblaApi(void 0);
	}, [viewport, setEmblaApi]);
	return [setViewport, emblaApi];
}
useEmblaCarousel.globalOptions = void 0;
var defaultOptions = {
	active: true,
	breakpoints: {},
	delay: 4e3,
	jump: false,
	playOnInit: true,
	stopOnFocusIn: true,
	stopOnInteraction: true,
	stopOnMouseEnter: false,
	stopOnLastSnap: false,
	rootNode: null
};
function normalizeDelay(emblaApi, delay) {
	const scrollSnaps = emblaApi.scrollSnapList();
	if (typeof delay === "number") return scrollSnaps.map(() => delay);
	return delay(scrollSnaps, emblaApi);
}
function getAutoplayRootNode(emblaApi, rootNode) {
	const emblaRootNode = emblaApi.rootNode();
	return rootNode && rootNode(emblaRootNode) || emblaRootNode;
}
function Autoplay(userOptions = {}) {
	let options;
	let emblaApi;
	let destroyed;
	let delay;
	let timerStartTime = null;
	let timerId = 0;
	let autoplayActive = false;
	let mouseIsOver = false;
	let playOnDocumentVisible = false;
	let jump = false;
	function init(emblaApiInstance, optionsHandler) {
		emblaApi = emblaApiInstance;
		const { mergeOptions, optionsAtMedia } = optionsHandler;
		options = optionsAtMedia(mergeOptions(mergeOptions(defaultOptions, Autoplay.globalOptions), userOptions));
		if (emblaApi.scrollSnapList().length <= 1) return;
		jump = options.jump;
		destroyed = false;
		delay = normalizeDelay(emblaApi, options.delay);
		const { eventStore, ownerDocument } = emblaApi.internalEngine();
		const isDraggable = !!emblaApi.internalEngine().options.watchDrag;
		const root = getAutoplayRootNode(emblaApi, options.rootNode);
		eventStore.add(ownerDocument, "visibilitychange", visibilityChange);
		if (isDraggable) emblaApi.on("pointerDown", pointerDown);
		if (isDraggable && !options.stopOnInteraction) emblaApi.on("pointerUp", pointerUp);
		if (options.stopOnMouseEnter) eventStore.add(root, "mouseenter", mouseEnter);
		if (options.stopOnMouseEnter && !options.stopOnInteraction) eventStore.add(root, "mouseleave", mouseLeave);
		if (options.stopOnFocusIn) emblaApi.on("slideFocusStart", stopAutoplay);
		if (options.stopOnFocusIn && !options.stopOnInteraction) eventStore.add(emblaApi.containerNode(), "focusout", startAutoplay);
		if (options.playOnInit) startAutoplay();
	}
	function destroy() {
		emblaApi.off("pointerDown", pointerDown).off("pointerUp", pointerUp).off("slideFocusStart", stopAutoplay);
		stopAutoplay();
		destroyed = true;
		autoplayActive = false;
	}
	function setTimer() {
		const { ownerWindow } = emblaApi.internalEngine();
		ownerWindow.clearTimeout(timerId);
		timerId = ownerWindow.setTimeout(next, delay[emblaApi.selectedScrollSnap()]);
		timerStartTime = (/* @__PURE__ */ new Date()).getTime();
		emblaApi.emit("autoplay:timerset");
	}
	function clearTimer() {
		const { ownerWindow } = emblaApi.internalEngine();
		ownerWindow.clearTimeout(timerId);
		timerId = 0;
		timerStartTime = null;
		emblaApi.emit("autoplay:timerstopped");
	}
	function startAutoplay() {
		if (destroyed) return;
		if (documentIsHidden()) {
			playOnDocumentVisible = true;
			return;
		}
		if (!autoplayActive) emblaApi.emit("autoplay:play");
		setTimer();
		autoplayActive = true;
	}
	function stopAutoplay() {
		if (destroyed) return;
		if (autoplayActive) emblaApi.emit("autoplay:stop");
		clearTimer();
		autoplayActive = false;
	}
	function visibilityChange() {
		if (documentIsHidden()) {
			playOnDocumentVisible = autoplayActive;
			return stopAutoplay();
		}
		if (playOnDocumentVisible) startAutoplay();
	}
	function documentIsHidden() {
		const { ownerDocument } = emblaApi.internalEngine();
		return ownerDocument.visibilityState === "hidden";
	}
	function pointerDown() {
		if (!mouseIsOver) stopAutoplay();
	}
	function pointerUp() {
		if (!mouseIsOver) startAutoplay();
	}
	function mouseEnter() {
		mouseIsOver = true;
		stopAutoplay();
	}
	function mouseLeave() {
		mouseIsOver = false;
		startAutoplay();
	}
	function play(jumpOverride) {
		if (typeof jumpOverride !== "undefined") jump = jumpOverride;
		startAutoplay();
	}
	function stop() {
		if (autoplayActive) stopAutoplay();
	}
	function reset() {
		if (autoplayActive) startAutoplay();
	}
	function isPlaying() {
		return autoplayActive;
	}
	function next() {
		const { index } = emblaApi.internalEngine();
		const nextIndex = index.clone().add(1).get();
		const lastIndex = emblaApi.scrollSnapList().length - 1;
		const kill = options.stopOnLastSnap && nextIndex === lastIndex;
		if (emblaApi.canScrollNext()) emblaApi.scrollNext(jump);
		else emblaApi.scrollTo(0, jump);
		emblaApi.emit("autoplay:select");
		if (kill) return stopAutoplay();
		startAutoplay();
	}
	function timeUntilNext() {
		if (!timerStartTime) return null;
		return delay[emblaApi.selectedScrollSnap()] - ((/* @__PURE__ */ new Date()).getTime() - timerStartTime);
	}
	return {
		name: "autoplay",
		options: userOptions,
		init,
		destroy,
		play,
		stop,
		reset,
		isPlaying,
		timeUntilNext
	};
}
Autoplay.globalOptions = void 0;
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function AboutGallery() {
	const { t } = useLanguage();
	const { trackEvent } = useAnalytics();
	const [images, setImages] = (0, import_react.useState)([]);
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({
		delay: 4e3,
		stopOnInteraction: true,
		stopOnMouseEnter: true
	})]);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches && emblaApi) emblaApi.plugins().autoplay?.stop();
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		setImages(Object.entries({}).map(([path, mod]) => {
			const filename = path.split("/").pop() || "";
			const caption = filename.split(".").slice(0, -1).join(".").replace(/[-_]/g, " ");
			return {
				src: mod.default,
				alt: caption,
				id: filename
			};
		}).sort((a, b) => a.alt.localeCompare(b.alt)));
	}, []);
	const onSelect = (0, import_react.useCallback)(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		if (!emblaApi) return;
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
		};
	}, [emblaApi, onSelect]);
	const scrollPrev = (0, import_react.useCallback)(() => {
		if (emblaApi) {
			emblaApi.scrollPrev();
			trackEvent("carousel_nav", { direction: "prev" });
		}
	}, [emblaApi, trackEvent]);
	const scrollNext = (0, import_react.useCallback)(() => {
		if (emblaApi) {
			emblaApi.scrollNext();
			trackEvent("carousel_nav", { direction: "next" });
		}
	}, [emblaApi, trackEvent]);
	const scrollTo = (0, import_react.useCallback)((index) => {
		if (emblaApi) {
			emblaApi.scrollTo(index);
			trackEvent("carousel_nav", {
				direction: "dot",
				index
			});
		}
	}, [emblaApi, trackEvent]);
	const handleKeyDown = (0, import_react.useCallback)((event) => {
		if (event.key === "ArrowLeft") scrollPrev();
		if (event.key === "ArrowRight") scrollNext();
	}, [scrollPrev, scrollNext]);
	if (images.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "neon-card glass-soft w-full max-w-2xl mx-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "flex flex-col items-center justify-center p-12 text-center text-muted-foreground space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-16 h-16 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.about.carousel_hint })]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full max-w-5xl mx-auto glass-soft rounded-2xl p-4 sm:p-6 overflow-hidden neon-border",
		role: "region",
		"aria-roledescription": "carousel",
		onKeyDown: handleKeyDown,
		tabIndex: 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl",
				ref: emblaRef,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex touch-pan-y",
					children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex-[0_0_100%] min-w-0 pl-4 first:pl-0 h-[40vh] sm:h-[50vh] md:h-[60vh] max-h-[560px] flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("w-full h-full relative transition-opacity duration-500 ease-out", Math.abs(selectedIndex - index) <= 1 ? "opacity-100" : "opacity-0"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image.src,
								alt: image.alt,
								className: "w-full h-full object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center text-sm backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300",
								children: image.alt
							})]
						})
					}, image.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full shadow-lg backdrop-blur-sm transition-all",
				onClick: scrollPrev,
				"aria-label": t.about.carousel_prev,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full shadow-lg backdrop-blur-sm transition-all",
				onClick: scrollNext,
				"aria-label": t.about.carousel_next,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10",
				children: images.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: cn("w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm", index === selectedIndex ? "bg-primary scale-110" : "bg-primary/30 hover:bg-primary/50"),
					onClick: () => scrollTo(index),
					"aria-label": `Go to slide ${index + 1}`
				}, index))
			})
		]
	});
}
function AboutPage() {
	const { t } = useLanguage();
	const [socials, setSocials] = (0, import_react.useState)([]);
	const [skills, setSkills] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useSEO({
		title: `${t.about.title} - Portfolio`,
		description: t.about.paragraphs[0]
	});
	(0, import_react.useEffect)(() => {
		const fetchData = async () => {
			setLoading(true);
			const [socialsRes, skillsRes] = await Promise.all([getSocialLinks(), getSkills()]);
			if (socialsRes) setSocials(socialsRes);
			if (skillsRes) setSkills(skillsRes);
			setLoading(false);
		};
		fetchData();
	}, []);
	const getIcon = (platform) => {
		const p = platform.toLowerCase();
		if (p.includes("github")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5" });
		if (p.includes("linkedin")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" });
		if (p.includes("youtube")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-5 w-5" });
		if (p.includes("instagram")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-5 w-5" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4 py-12 md:py-16 max-w-5xl space-y-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 animate-fade-in-down",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-bold tracking-tight",
						children: t.about.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose dark:prose-invert space-y-4 max-w-none text-justify",
						children: t.about.paragraphs.map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground leading-relaxed indent-pt",
							children: paragraph
						}, index))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-4 pt-4",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" }) : socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							asChild: true,
							className: "gap-2 shadow-sm hover:bg-primary hover:text-primary-foreground transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: social.url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [getIcon(social.platform), social.platform]
							})
						}, social.id))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-fade-in-up space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutGallery, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground text-center italic",
					children: t.about.carousel_hint
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8 animate-fade-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-2 bg-primary/10 rounded-lg text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: t.about.skills_title
				})]
			}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full" }, i))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8",
				children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: skill.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground font-mono",
							children: [skill.value, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: skill.value,
						className: "h-2.5 bg-secondary/50"
					})]
				}, skill.id))
			})]
		})]
	});
}
export { AboutPage as default };

//# sourceMappingURL=AboutPage-Gjb2YC64.js.map