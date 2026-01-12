import { Ot as require_react, _t as require_jsx_runtime, jt as __toESM } from "./index-DHXKWtf3.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
require_jsx_runtime();
var DirectionContext = import_react.createContext(void 0);
function useDirection(localDir) {
	const globalDir = import_react.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
export { useDirection as t };

//# sourceMappingURL=dist-DWadId-W.js.map