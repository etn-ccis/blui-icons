"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoordinates = void 0;

var getCoordinates = function getCoordinates(percent) {
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  return {
    x: radius + radius * Math.cos(percent / 100 * 2 * Math.PI),
    y: radius + radius * Math.sin(percent / 100 * 2 * Math.PI)
  };
};

exports.getCoordinates = getCoordinates;