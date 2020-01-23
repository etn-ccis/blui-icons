"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var utilities_1 = require("./utilities");
var basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
var chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
var outlinedPath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
var baseID = 'pxb-battery-clip';
var chargeID = 'pxb-battery-clip-charge';
var getBasepath = function (outlined) { return (outlined ? outlinedPath : basePath); };
var getClipPath = function (charging) { return (charging ? chargePath : basePath); };
var getID = function (charging) { return (charging ? chargeID : baseID); };
var Battery = /** @class */ (function (_super) {
    __extends(Battery, _super);
    function Battery(props) {
        var _this = _super.call(this, props) || this;
        var _props = __assign(__assign({}, _this.props), utilities_1.defaultProps);
        _this.maskIDleft = "maskLeft-" + _props.percent;
        _this.maskIDright = "maskRight-" + _props.percent;
        _this.startX = _props.outlined ? 3.9 : 2;
        _this.fillWidth = _props.outlined ? 14.2 : 18;
        return _this;
    }
    Battery.prototype.render = function () {
        var _a = __assign(__assign({}, utilities_1.defaultProps), this.props), outlined = _a.outlined, charging = _a.charging, size = _a.size, percent = _a.percent, color = _a.color, props = __rest(_a, ["outlined", "charging", "size", "percent", "color"]);
        return (react_1.default.createElement("svg", __assign({ height: size + "px", width: size + "px", x: "0px", y: "0px", viewBox: "0 0 24 24" }, props),
            react_1.default.createElement("defs", null,
                outlined && (react_1.default.createElement("mask", { id: this.maskIDleft },
                    react_1.default.createElement("rect", { width: "100%", height: "100%", fill: "white" }),
                    react_1.default.createElement("polygon", { fill: "black", points: "11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 " }))),
                outlined && (react_1.default.createElement("mask", { id: this.maskIDright },
                    react_1.default.createElement("rect", { width: "100%", height: "100%", fill: "white" }),
                    react_1.default.createElement("rect", { x: this.startX, y: "7", fill: "black", width: "" + Math.min((utilities_1.rangeValue(percent, 0, 100) * this.fillWidth) / 100, this.fillWidth), height: "10" }))),
                react_1.default.createElement("clipPath", { id: getID(charging || utilities_1.defaultProps.charging) },
                    react_1.default.createElement("path", { overflow: "visible", d: getClipPath(charging) }))),
            react_1.default.createElement("path", { fill: color || 'currentColor', fillOpacity: outlined || percent >= 100 ? '1' : 0.3, clipPath: "url(#" + getID(charging) + ")", d: getBasepath(outlined) }),
            react_1.default.createElement("g", { fill: color || 'currentColor' },
                react_1.default.createElement("rect", { x: this.startX, y: "7", clipPath: "url(#" + getID(charging) + ")", width: "" + Math.min((utilities_1.rangeValue(percent, 0, 100) * this.fillWidth) / 100, this.fillWidth), height: "10", mask: outlined && charging ? "url(#" + this.maskIDleft + ")" : undefined }),
                outlined && charging && (react_1.default.createElement("polygon", { points: "11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13", mask: "url(#" + this.maskIDright + ")" })))));
    };
    return Battery;
}(react_1.Component));
exports.Battery = Battery;
