"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heart = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Heart = function Heart(_ref) {
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
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  }), _react.default.createElement("clipPath", {
    id: "pxb-heart-clip"
  }, _react.default.createElement("path", {
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  })), percent > 0 && _react.default.createElement("rect", {
    fill: color || "currentColor",
    clipPath: "url(#pxb-heart-clip)",
    x: "2",
    y: 21.35 - percent * 18.35 / 100,
    width: "20",
    height: "20"
  }));
};

exports.Heart = Heart;