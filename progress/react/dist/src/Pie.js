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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var utilities_1 = require("./utilities");
var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultProps = {
            percentage: 100,
            size: 24,
            ring: 10,
            outlined: false,
        };
        return _this;
    }
    Pie.prototype.render = function () {
        var _a = this.props, outlined = _a.outlined, ring = _a.ring, size = _a.size, percent = _a.percent, color = _a.color, style = _a.style, props = __rest(_a, ["outlined", "ring", "size", "percent", "color", "style"]);
        var stroke = Math.max(1, Math.min(10, Math.round(ring)));
        var iconStroke = 2;
        stroke = outlined ? Math.max(stroke, 2 * iconStroke + 1) : stroke;
        // Ring properties
        var centerX = 12;
        var centerY = 12;
        // Outer ring
        var outerRadiusLarge = 10;
        var innerRadiusLarge = 10 - iconStroke;
        // Inner ring
        var outerRadiusSmall = 10 - stroke + iconStroke;
        var innerRadiusSmall = 10 - stroke;
        if (innerRadiusSmall === 0) {
            outerRadiusSmall = 0;
        }
        var outlineBase = "\n    M " + centerX + " " + (centerY - outerRadiusLarge) + "\n    A " + outerRadiusLarge + " " + outerRadiusLarge + " 0 1 0 " + centerX + " " + (centerY + outerRadiusLarge) + "\n    A " + outerRadiusLarge + " " + outerRadiusLarge + " 0 1 0 " + centerX + " " + (centerY - outerRadiusLarge) + "\n    Z\n    M " + centerX + " " + (centerY - innerRadiusLarge) + "\n    A " + innerRadiusLarge + " " + innerRadiusLarge + " 0 1 1 " + centerX + " " + (centerY + innerRadiusLarge) + "\n    A " + innerRadiusLarge + " " + innerRadiusLarge + " 0 1 1 " + centerX + " " + (centerY - innerRadiusLarge) + "\n    Z\n    M " + centerX + " " + (centerY - outerRadiusSmall) + "\n    A " + outerRadiusSmall + " " + outerRadiusSmall + " 0 1 0 " + centerX + " " + (centerY + outerRadiusSmall) + "\n    A " + outerRadiusSmall + " " + outerRadiusSmall + " 0 1 0 " + centerX + " " + (centerY - outerRadiusSmall) + "\n    Z\n    M " + centerX + " " + (centerY - innerRadiusSmall) + "\n    A " + innerRadiusSmall + " " + innerRadiusSmall + " 0 1 1 " + centerX + " " + (centerY + innerRadiusSmall) + "\n    A " + innerRadiusSmall + " " + innerRadiusSmall + " 0 1 1 " + centerX + " " + (centerY - innerRadiusSmall) + "\n    Z\n  ";
        var twoToneBase = "\n    M " + centerX + " " + (centerY - outerRadiusLarge) + "\n    A " + outerRadiusLarge + " " + outerRadiusLarge + " 0 1 0 " + centerX + " " + (centerY + outerRadiusLarge) + "\n    A " + outerRadiusLarge + " " + outerRadiusLarge + " 0 1 0 " + centerX + " " + (centerY - outerRadiusLarge) + "\n    Z\n  ";
        var clipPath = "\n    M12,2\n    A10,10,0,1,0,22,12,\n    10,10,0,0,0,12,2\n    Z\n    m0," + (20 - stroke) + " \n    A " + (10 - stroke) + "," + (10 - stroke) + ",0,1,1," + (22 - stroke) + ",12,\n    " + (10 - stroke) + "," + (10 - stroke) + ",0,0,1,12," + (22 - stroke) + "\n    Z\n  ";
        return (react_1.default.createElement("svg", __assign({ height: size + "px", width: size + "px", x: "0px", y: "0px", viewBox: "0 0 24 24", style: Object.assign({ transform: 'rotate(-.25turn)' }, style) }, props),
            react_1.default.createElement("clipPath", { id: "pxb-donut-clip-" + stroke },
                react_1.default.createElement("path", { d: clipPath })),
            react_1.default.createElement("path", { clipPath: "url(#pxb-donut-clip-" + stroke + ")", fill: color || 'currentColor', fillOpacity: outlined || percent >= 100 ? '1' : '0.3', d: outlined ? outlineBase : twoToneBase }),
            utilities_1.rangeValue(percent, 0, 100) > 0 && utilities_1.rangeValue(percent, 0, 100) < 100 && (react_1.default.createElement("path", { fill: color || 'currentColor', clipPath: "url(#pxb-donut-clip-" + stroke + ")", d: "M 12,12 H 24 A 12,12,0," + (utilities_1.rangeValue(percent, 0, 100) >= 50 ? 1 : 0) + ",1," + utilities_1.getCoordinates(utilities_1.rangeValue(percent, 0, 100))['x'] + "," + utilities_1.getCoordinates(utilities_1.rangeValue(percent, 0, 100))['y'] + "Z" })),
            utilities_1.rangeValue(percent, 0, 100) === 100 && outlined && (react_1.default.createElement("circle", { clipPath: "url(#pxb-donut-clip-" + stroke + ")", cx: "12", cy: "12", r: "10", fill: color || 'currentColor' }))));
    };
    return Pie;
}(react_1.Component));
exports.Pie = Pie;
