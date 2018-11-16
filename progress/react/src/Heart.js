import React from 'react';

export const Heart = ({ percent=100, size=24, color, ...props }) => (
  <svg height={`${size}px`} width={`${size}px`} x="0px" y="0px" viewBox="0 0 24 24" {...props}>
    <path fill={color || "currentColor"} fillOpacity="0.3" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    <clipPath id="pxb-heart-clip">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </clipPath>
    {percent > 0 && 
      <rect fill={color || "currentColor"} clipPath="url(#pxb-heart-clip)" x="2" y={21.35-percent*18.35/100} width="20" height="20" />
    }
</svg>
);