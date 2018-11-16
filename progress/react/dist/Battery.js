function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export const Battery = ({
  percent = 100,
  size = 24,
  color,
  ...props
}) => React.createElement("svg", _extends({
  height: `${size}px`,
  width: `${size}px`,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 24 24",
  style: {
    enableBackground: 'new 0 0 24 24',
    xmlSpace: "preserve"
  }
}, props), React.createElement("path", {
  fill: color || "currentColor",
  fillOpacity: "0.3",
  d: "M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z"
}), React.createElement("clipPath", {
  id: "pxb-battery-clip"
}, React.createElement("path", {
  overflow: "visible",
  d: "M20,8.33C20,7.6,19.4,7,18.67,7H3.34C2.6,7,2,7.6,2,8.33v7.33C2,16.4,2.6,17,3.33,17h15.34C19.4,17,20,16.4,20,15.67V8.33z"
})), percent > 0 && React.createElement("rect", {
  x: "2",
  y: "7",
  fill: color || "currentColor",
  clipPath: "url(#pxb-battery-clip)",
  width: `${Math.min(percent * 18 / 100, 18)}`,
  height: "10"
}));