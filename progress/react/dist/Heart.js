function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export const Heart = ({
  percent = 100,
  size = 24,
  color,
  style,
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
  style: Object.assign({
    enableBackground: 'new 0 0 24 24',
    xmlSpace: "preserve"
  }, style)
}, props), React.createElement("path", {
  fill: color || "currentColor",
  fillOpacity: "0.3",
  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
}), React.createElement("clipPath", {
  id: "pxb-heart-clip"
}, React.createElement("path", {
  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
})), percent > 0 && React.createElement("rect", {
  fill: color || "currentColor",
  clipPath: "url(#pxb-heart-clip)",
  x: "2",
  y: 21.35 - percent * 18.35 / 100,
  width: "20",
  height: "20"
}));