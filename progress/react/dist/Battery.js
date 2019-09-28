"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Battery = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utilities = require("./utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
var chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
var outlinedPath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
var baseID = 'pxb-battery-clip';
var chargeID = 'pxb-battery-clip-charge';

var getBasepath = function getBasepath(outlined) {
  return outlined ? outlinedPath : basePath;
};

var getClipPath = function getClipPath(charging) {
  return charging ? chargePath : basePath;
};

var getID = function getID(charging) {
  return charging ? chargeID : baseID;
};

var Battery =
/*#__PURE__*/
function (_Component) {
  _inherits(Battery, _Component);

  function Battery() {
    _classCallCheck(this, Battery);

    return _possibleConstructorReturn(this, _getPrototypeOf(Battery).apply(this, arguments));
  }

  _createClass(Battery, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          outlined = _this$props.outlined,
          charging = _this$props.charging,
          size = _this$props.size,
          percent = _this$props.percent,
          color = _this$props.color,
          props = _objectWithoutProperties(_this$props, ["outlined", "charging", "size", "percent", "color"]);

      this.maskIDleft = 'maskLeft-' + this.props.percent;
      this.maskIDright = 'maskRight-' + this.props.percent;
      this.startX = outlined ? 3.9 : 2;
      this.fillWidth = outlined ? 14.2 : 18;
      return _react["default"].createElement("svg", _extends({
        height: "".concat(size, "px"),
        width: "".concat(size, "px"),
        x: "0px",
        y: "0px",
        viewBox: "0 0 24 24"
      }, props), _react["default"].createElement("defs", null, outlined && _react["default"].createElement("mask", {
        id: this.maskIDleft
      }, _react["default"].createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "white"
      }), _react["default"].createElement("polygon", {
        fill: "black",
        points: "11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 "
      })), outlined && _react["default"].createElement("mask", {
        id: this.maskIDright
      }, _react["default"].createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "white"
      }), _react["default"].createElement("rect", {
        x: this.startX,
        y: "7",
        fill: "black",
        width: "".concat(Math.min((0, _utilities.rangeValue)(percent, 0, 100) * this.fillWidth / 100, this.fillWidth)),
        height: "10"
      })), _react["default"].createElement("clipPath", {
        id: getID(charging)
      }, _react["default"].createElement("path", {
        overflow: "visible",
        d: getClipPath(charging)
      }))), _react["default"].createElement("path", {
        fill: color || "currentColor",
        fillOpacity: outlined || percent >= 100 ? "1" : 0.3,
        clipPath: "url(#".concat(getID(charging), ")"),
        d: getBasepath(outlined)
      }), _react["default"].createElement("g", {
        fill: color || "currentColor"
      }, _react["default"].createElement("rect", {
        x: this.startX,
        y: "7",
        clipPath: "url(#".concat(getID(charging), ")"),
        width: "".concat(Math.min((0, _utilities.rangeValue)(percent, 0, 100) * this.fillWidth / 100, this.fillWidth)),
        height: "10",
        mask: outlined && charging ? "url(#" + this.maskIDleft + ")" : null
      }), outlined && charging && _react["default"].createElement("polygon", {
        points: "11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13",
        mask: "url(#" + this.maskIDright + ")"
      })));
    }
  }]);

  return Battery;
}(_react.Component);

exports.Battery = Battery;
Battery.propTypes = {
  percent: _propTypes["default"].number,
  size: _propTypes["default"].number,
  charging: _propTypes["default"].bool,
  outlined: _propTypes["default"].bool,
  color: _propTypes["default"].string
};
Battery.defaultProps = {
  percentage: 100,
  size: 24,
  charging: false,
  outlined: false
};