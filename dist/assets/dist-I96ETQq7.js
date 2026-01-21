import { Ct as require_jsx_runtime, Ft as require_react, Rt as __toESM } from "./index-CV_nKZ9-.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
require_jsx_runtime();
var DirectionContext = import_react.createContext(void 0);
function useDirection(localDir) {
	const globalDir = import_react.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
export { useDirection as t };

//# sourceMappingURL=dist-I96ETQq7.js.map