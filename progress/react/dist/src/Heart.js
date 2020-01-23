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
var basePath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
var outlinedPath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
var getPath = function (outlined) { return (outlined ? outlinedPath : basePath); };
var Heart = /** @class */ (function (_super) {
    __extends(Heart, _super);
    function Heart(props) {
        var _this = _super.call(this, props) || this;
        _this.defaultProps = {
            percentage: 100,
            size: 24,
            outlined: false,
        };
        _this.startY = _this.startY = _this.props.outlined ? 18.35 : 21.35;
        _this.fillHeight = _this.props.outlined ? 13.35 : 18.35;
        return _this;
    }
    Heart.prototype.render = function () {
        var _a = this.props, outlined = _a.outlined, size = _a.size, percent = _a.percent, color = _a.color, props = __rest(_a, ["outlined", "size", "percent", "color"]);
        return (react_1.default.createElement("svg", __assign({ height: size + "px", width: size + "px", x: "0px", y: "0px", viewBox: "0 0 24 24" }, props),
            react_1.default.createElement("path", { fill: color || 'currentColor', fillOpacity: outlined || percent >= 100 ? '1' : '0.3', d: getPath(outlined) }),
            react_1.default.createElement("clipPath", { id: "pxb-heart-clip" },
                react_1.default.createElement("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })),
            percent > 0 && (react_1.default.createElement("rect", { fill: color || 'currentColor', clipPath: "url(#pxb-heart-clip)", x: "2", y: this.startY - (utilities_1.rangeValue(percent, 0, 100) * this.fillHeight) / 100, width: "20", height: "20" }))));
    };
    return Heart;
}(react_1.Component));
exports.Heart = Heart;
