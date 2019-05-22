"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pie = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utilities = require("./utilities");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pie =
/*#__PURE__*/
function (_Component) {
  _inherits(Pie, _Component);

  function Pie() {
    _classCallCheck(this, Pie);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pie).apply(this, arguments));
  }

  _createClass(Pie, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          outlined = _this$props.outlined,
          ring = _this$props.ring,
          size = _this$props.size,
          percent = _this$props.percent,
          color = _this$props.color,
          style = _this$props.style,
          props = _objectWithoutProperties(_this$props, ["outlined", "ring", "size", "percent", "color", "style"]);

      var stroke = Math.max(1, Math.min(10, Math.round(ring)));
      var iconStroke = 2;
      stroke = outlined ? Math.max(stroke, 2 * iconStroke + 1) : stroke; // Ring properties

      var centerX = 12;
      var centerY = 12; // Outer ring

      var outerRadiusLarge = 10;
      var innerRadiusLarge = 10 - iconStroke; // Inner ring

      var outerRadiusSmall = 10 - stroke + iconStroke;
      var innerRadiusSmall = 10 - stroke;

      if (innerRadiusSmall === 0) {
        outerRadiusSmall = 0;
      }

      var outlineBase = "\n    M ".concat(centerX, " ").concat(centerY - outerRadiusLarge, "\n    A ").concat(outerRadiusLarge, " ").concat(outerRadiusLarge, " 0 1 0 ").concat(centerX, " ").concat(centerY + outerRadiusLarge, "\n    A ").concat(outerRadiusLarge, " ").concat(outerRadiusLarge, " 0 1 0 ").concat(centerX, " ").concat(centerY - outerRadiusLarge, "\n    Z\n    M ").concat(centerX, " ").concat(centerY - innerRadiusLarge, "\n    A ").concat(innerRadiusLarge, " ").concat(innerRadiusLarge, " 0 1 1 ").concat(centerX, " ").concat(centerY + innerRadiusLarge, "\n    A ").concat(innerRadiusLarge, " ").concat(innerRadiusLarge, " 0 1 1 ").concat(centerX, " ").concat(centerY - innerRadiusLarge, "\n    Z\n    M ").concat(centerX, " ").concat(centerY - outerRadiusSmall, "\n    A ").concat(outerRadiusSmall, " ").concat(outerRadiusSmall, " 0 1 0 ").concat(centerX, " ").concat(centerY + outerRadiusSmall, "\n    A ").concat(outerRadiusSmall, " ").concat(outerRadiusSmall, " 0 1 0 ").concat(centerX, " ").concat(centerY - outerRadiusSmall, "\n    Z\n    M ").concat(centerX, " ").concat(centerY - innerRadiusSmall, "\n    A ").concat(innerRadiusSmall, " ").concat(innerRadiusSmall, " 0 1 1 ").concat(centerX, " ").concat(centerY + innerRadiusSmall, "\n    A ").concat(innerRadiusSmall, " ").concat(innerRadiusSmall, " 0 1 1 ").concat(centerX, " ").concat(centerY - innerRadiusSmall, "\n    Z\n  ");
      var twoToneBase = "\n    M ".concat(centerX, " ").concat(centerY - outerRadiusLarge, "\n    A ").concat(outerRadiusLarge, " ").concat(outerRadiusLarge, " 0 1 0 ").concat(centerX, " ").concat(centerY + outerRadiusLarge, "\n    A ").concat(outerRadiusLarge, " ").concat(outerRadiusLarge, " 0 1 0 ").concat(centerX, " ").concat(centerY - outerRadiusLarge, "\n    Z\n  ");
      var clipPath = "\n    M12,2\n    A10,10,0,1,0,22,12,\n    10,10,0,0,0,12,2\n    Z\n    m0,".concat(20 - stroke, " \n    A ").concat(10 - stroke, ",").concat(10 - stroke, ",0,1,1,").concat(22 - stroke, ",12,\n    ").concat(10 - stroke, ",").concat(10 - stroke, ",0,0,1,12,").concat(22 - stroke, "\n    Z\n  ");
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
        d: clipPath
      })), _react.default.createElement("path", {
        clipPath: "url(#pxb-donut-clip-" + stroke + ")",
        fill: color || "currentColor",
        fillOpacity: outlined || percent >= 100 ? "1" : "0.3",
        d: outlined ? outlineBase : twoToneBase
      }), percent > 0 && percent < 100 && _react.default.createElement("path", {
        fill: color || "currentColor",
        clipPath: "url(#pxb-donut-clip-" + stroke + ")",
        d: "M 12,12 H 24 A 12,12,0,".concat(percent >= 50 ? 1 : 0, ",1,").concat((0, _utilities.getCoordinates)(percent)['x'], ",").concat((0, _utilities.getCoordinates)(percent)['y'], "Z")
      }), percent === 100 && outlined && _react.default.createElement("circle", {
        clipPath: "url(#pxb-donut-clip-" + stroke + ")",
        cx: "12",
        cy: "12",
        r: "10",
        fill: color || "currentColor"
      }));
    }
  }]);

  return Pie;
}(_react.Component);

exports.Pie = Pie;
;
Pie.propTypes = {
  percent: _propTypes.default.number,
  size: _propTypes.default.number,
  ring: _propTypes.default.number,
  outlined: _propTypes.default.bool,
  color: _propTypes.default.string
};
Pie.defaultProps = {
  percentage: 100,
  size: 24,
  ring: 10,
  outlined: false
};