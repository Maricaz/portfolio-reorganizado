import { Mt as __toESM, _t as require_jsx_runtime, kt as require_react } from "./index-B6XaT7BC.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
require_jsx_runtime();
var DirectionContext = import_react.createContext(void 0);
function useDirection(localDir) {
	const globalDir = import_react.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
export { useDirection as t };

//# sourceMappingURL=dist-nKXDCX8n.js.map