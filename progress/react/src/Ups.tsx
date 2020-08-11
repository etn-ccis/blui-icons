import React from 'react';
import { rangeValue } from './utilities';
import { UpsProgressProps } from './types';

export const Ups: React.FC<UpsProgressProps> = (props) => {
    const { outlined = false, size = 24, percent = 100, color = 'inherit', ...svgProps } = props;

    const rangedPercent = rangeValue(percent, 0, 100);
    const startY = outlined ? ((100 - rangedPercent) / 100) * 16 + 4 : ((100 - rangedPercent) / 100) * 20 + 2;
    const fillHeight = outlined ? (rangedPercent / 100) * 16 : (rangedPercent / 100) * 20;

    return (
        <svg height={`${size}px`} width={`${size}px`} x={0} y={0} viewBox="0 0 24 24" {...svgProps}>
            {!outlined && (
                <path
                    opacity={0.3}
                    d="M2 2H22V7H19V8H22V12H19V13H22V17H19V18H22V22H2V18H5V17H2V13H5V12H2V8H5V7H2V2Z"
                    fill={color}
                />
            )}
            {outlined && (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 2H2V22H22V2ZM4 4V7H6V8H4V12H6V13H4V17H6V18H4V20H20V18H18V17H20V13H18V12H20V8H18V7H20V4H4Z"
                    fill={color}
                />
            )}
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={2} y={2} width={20} height={20}>
                <path d="M2 2H22V7H19V8H22V12H19V13H22V17H19V18H22V22H2V18H5V17H2V13H5V12H2V8H5V7H2V2Z" fill={color} />
            </mask>
            <g mask="url(#mask0)">
                <rect x={2} y={startY} width={20} height={fillHeight} fill={color} />
            </g>
        </svg>
    );
};
