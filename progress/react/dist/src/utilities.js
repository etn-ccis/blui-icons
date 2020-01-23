"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// if a value VALUE is outside the range, rangeValue(VALUE, min, max)
// will return the closest point to VALUE in the range [min, max]
exports.rangeValue = function (value, min, max) {
    return Math.max(min, Math.min(value, max));
};
// will return a point coord on the circle with given radius
// the coord goes clockwise as the percentage increases
exports.getCoordinates = function (percent, radius) {
    if (radius === void 0) { radius = 12; }
    return ({
        x: radius + radius * Math.cos((percent / 100) * 2 * Math.PI),
        y: radius + radius * Math.sin((percent / 100) * 2 * Math.PI),
    });
};
