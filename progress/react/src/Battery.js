import React from 'react';

const basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
const chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
const baseID = 'pxb-battery-clip';
const chargeID = 'pxb-battery-clip-charge';

const getPath = (charging) => {
  console.log('path',charging);
  return charging ? chargePath : basePath ;
}
const getID = (charging) => {
  console.log('id', charging);
  return charging ? chargeID : baseID ;
}

export const Battery = ({ percent=100, size=24, charging=false, color, ...props }) => (
  <svg height={`${size}px`} width={`${size}px`} x="0px" y="0px" viewBox="0 0 24 24" {...props}>
    <path fill={color || "currentColor"} fillOpacity="0.3" d={getPath(charging)}/>
    <clipPath id={getID(charging)} >
      <path overflow="visible" d={getPath(charging)}/>
		</clipPath>
    {percent > 0 && 
      <rect x="2" y="7" fill={color || "currentColor"} clipPath={`url(#${getID(charging)})`} width={`${Math.min(percent*18/100, 18)}`} height="10"/>
    }
  </svg>
); 

