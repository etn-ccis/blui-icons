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
                <>
                    <path
                        opacity={0.3}
                        d="M2 2H22V6H19V8H22V11H19V13H22V16H19V18H22V22H2V18H5V16H2V13H5V11H2V8H5V6H2V2Z"
                        fill={color}
                    />
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={2} y={2} width={20} height={20}>
                        <path
                            d="M2 2H22V6H19V8H22V11H19V13H22V16H19V18H22V22H2V18H5V16H2V13H5V11H2V8H5V6H2V2Z"
                            fill={color}
                        />
                    </mask>
                    <g mask="url(#mask0)">
                        <rect x={2} y={startY} width={20} height={fillHeight} fill={color} />
                    </g>
                </>
            )}
            {outlined && (
                <>
                    <defs>
                        <clipPath id="outlined-progress-clip">
                            <path d="M4 8V4H20V8H17V9H20V12H17V13H20V16H17V17H20V20H4V17H7V16H4V13H7V12H4V9H7V8H4Z" />
                        </clipPath>
                        <clipPath id={`outlined-border-clip-${rangedPercent}`}>
                            <rect x="2" y="2" width="20" height={startY - 2} />
                        </clipPath>
                    </defs>
                    <path
                        fill-rule="evenodd"
                        d="M22 2H2V22H22V2ZM4 4V8H7V9H4V12H7V13H4V16H7V17H4V20H20V17H17V16H20V13H17V12H20V9H17V8H20V4H4Z"
                        clip-path={`url(#outlined-border-clip-${rangedPercent})`}
                        clip-rule="evenodd"
                        fill={color}
                    />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H2V22H22V2ZM20 4H4V20H20V4Z" fill={color} />
                    <rect
                        x="4"
                        y={startY}
                        width="16"
                        height={fillHeight}
                        clip-path="url(#outlined-progress-clip)"
                        fill={color}
                    />
                </>
            )}
        </svg>
    );
};
