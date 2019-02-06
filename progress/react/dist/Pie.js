"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pie = void 0;

var _react = _interopRequireDefault(require("react"));

var _utilities = require("./utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Pie = function Pie(_ref) {
  var _ref$percent = _ref.percent,
      percent = _ref$percent === void 0 ? 100 : _ref$percent,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      color = _ref.color,
      _ref$ring = _ref.ring,
      ring = _ref$ring === void 0 ? 10 : _ref$ring,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["percent", "size", "color", "ring", "style"]);

  var stroke = Math.max(1, Math.min(10, Math.round(ring)));
  return _react.default.createElement("svg", _extends({
    height: "".concat(size, "px"),
    width: "".concat(size, "px"),
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    style: Object.assign({
      transform: 'rotate(-.25turn)'
    }, style)
  }, props), _react.default.createElement("clipPath", {
    id: "pxb-donut-clip-" + stroke
  }, _react.default.createElement("path", {
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,".concat(20 - stroke, " A ").concat((20 - 2 * stroke) / 2, ",").concat((20 - 2 * stroke) / 2, ",0,1,1,").concat(22 - stroke, ",12,").concat((20 - 2 * stroke) / 2, ",").concat((20 - 2 * stroke) / 2, ",0,0,1,12,").concat(22 - stroke, "Z")
  })), _react.default.createElement("circle", {
    clipPath: "url(#pxb-donut-clip-" + stroke + ")",
    cx: "12",
    cy: "12",
    r: "10",
    fill: color || "currentColor",
    fillOpacity: percent >= 100 ? "1" : "0.3"
  }), percent > 0 && percent < 100 && _react.default.createElement("path", {
    fill: color || "currentColor",
    clipPath: "url(#pxb-donut-clip-" + stroke + ")",
    d: "M 12,12 H 24 A 12,12,0,".concat(percent >= 50 ? 1 : 0, ",1,").concat((0, _utilities.getCoordinates)(percent)['x'], ",").concat((0, _utilities.getCoordinates)(percent)['y'], "Z")
  }));
};

exports.Pie = Pie;