import { Lt as __toESM, Pt as require_react } from "./index-D09P2277.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
export { usePrevious as t };

//# sourceMappingURL=dist-BgwbG_tK.js.map