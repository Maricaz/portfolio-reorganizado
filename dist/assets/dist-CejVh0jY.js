import { Ft as __toESM, Mt as require_react, bt as require_jsx_runtime } from "./index-Dk8tgAFB.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
require_jsx_runtime();
var DirectionContext = import_react.createContext(void 0);
function useDirection(localDir) {
	const globalDir = import_react.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
export { useDirection as t };

//# sourceMappingURL=dist-CejVh0jY.js.map