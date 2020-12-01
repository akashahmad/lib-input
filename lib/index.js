"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var outside_click_1 = __importDefault(require("@alphasquad/outside-click"));
var Input = function (_a) {
    var placeholder = _a.placeholder, type = _a.type, onChange = _a.onChange, required = _a.required, minLength = _a.minLength, maxLength = _a.maxLength, value = _a.value, setShow = _a.setShow;
    var setShowMain = function () {
        setShow(false);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(outside_click_1.default, { onClose: setShowMain }, value ? react_1.default.createElement("input", { className: "myInput", type: type, placeholder: placeholder, onChange: function (event) { return onChange(event.target.value); }, required: required || false, minLength: minLength || 2, maxLength: maxLength || 200, value: value }) : react_1.default.createElement("input", { className: "myInput", type: type, placeholder: placeholder, onChange: function (event) { return onChange(event.target.value); }, required: required || false, minLength: minLength || 2, maxLength: maxLength || 200 })),
        react_1.default.createElement("style", null, "\n            .myInput{\n                height: 30px;\n                width: 100%;\n                padding: 3px;\n                font-size: 16px;\n\n            }\n        ")));
};
exports.default = Input;
//# sourceMappingURL=index.js.map