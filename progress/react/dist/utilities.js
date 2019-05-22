"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoordinates = exports.rangeValue = void 0;

var rangeValue = function rangeValue(value, min, max) {
  return Math.max(min, Math.min(value, max));
};

exports.rangeValue = rangeValue;

var getCoordinates = function getCoordinates(percent) {
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  return {
    x: radius + radius * Math.cos(percent / 100 * 2 * Math.PI),
    y: radius + radius * Math.sin(percent / 100 * 2 * Math.PI)
  };
};

exports.getCoordinates = getCoordinates;