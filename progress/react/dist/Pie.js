function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const getCoordinates = percent => {
  const radius = 12;
  const degrees = percent * 3.6;
  return {
    x: radius + radius * Math.cos(Math.PI / 180 * degrees),
    y: radius + radius * Math.sin(Math.PI / 180 * degrees)
  };
};

export const Pie = ({
  percent = 100,
  size = 24,
  color,
  ring = 10,
  style,
  ...props
}) => {
  const stroke = Math.max(1, Math.min(10, Math.round(ring)));
  return React.createElement("svg", _extends({
    height: `${size}px`,
    width: `${size}px`,
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    style: Object.assign({
      enableBackground: 'new 0 0 24 24',
      xmlSpace: "preserve",
      transform: 'rotate(-.25turn)'
    }, style)
  }, props), React.createElement("clipPath", {
    id: "pxb-donut-clip-" + stroke
  }, React.createElement("path", {
    d: `M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,${20 - stroke} A ${(20 - 2 * stroke) / 2},${(20 - 2 * stroke) / 2},0,1,1,${22 - stroke},12,${(20 - 2 * stroke) / 2},${(20 - 2 * stroke) / 2},0,0,1,12,${22 - stroke}Z`
  })), React.createElement("circle", {
    clipPath: "url(#pxb-donut-clip-" + stroke + ")",
    cx: "12",
    cy: "12",
    r: "10",
    fill: color || "currentColor",
    fillOpacity: percent >= 100 ? "1" : "0.3"
  }), percent > 0 && percent < 100 && React.createElement("path", {
    fill: color || "currentColor",
    clipPath: "url(#pxb-donut-clip-" + stroke + ")",
    d: `M 12,12 H 24 A 12,12,0,${percent >= 50 ? 1 : 0},1,${getCoordinates(percent)['x']},${getCoordinates(percent)['y']}Z`
  }));
};