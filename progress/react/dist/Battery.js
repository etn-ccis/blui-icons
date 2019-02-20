"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Battery = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Battery = function Battery(_ref) {
  var _ref$percent = _ref.percent,
      percent = _ref$percent === void 0 ? 100 : _ref$percent,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["percent", "size", "color"]);

  return _react.default.createElement("svg", _extends({
    height: "".concat(size, "px"),
    width: "".concat(size, "px"),
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: color || "currentColor",
    fillOpacity: "0.3",
    d: "M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z"
  }), _react.default.createElement("clipPath", {
    id: "pxb-battery-clip"
  }, _react.default.createElement("path", {
    overflow: "visible",
    d: "M20,8.33C20,7.6,19.4,7,18.67,7H3.34C2.6,7,2,7.6,2,8.33v7.33C2,16.4,2.6,17,3.33,17h15.34C19.4,17,20,16.4,20,15.67V8.33z"
  })), percent > 0 && _react.default.createElement("rect", {
    x: "2",
    y: "7",
    fill: color || "currentColor",
    clipPath: "url(#pxb-battery-clip)",
    width: "".concat(Math.min(percent * 18 / 100, 18)),
    height: "10"
  }));
};

exports.Battery = Battery;