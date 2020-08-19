import React from 'react';
import { rangeValue } from './utilities';
import { UpsProgressProps } from './types';
import { ProgressIcon } from './ProgressIcon';

export const Ups: React.FC<UpsProgressProps> = (props) => {
    const { outlined = false, size = 24, percent = 100, color = 'inherit', labelSize, labelColor, showPercentLabel, labelPosition,  ...svgProps } = props;

    const rangedPercent = rangeValue(percent, 0, 100);
    const startY = outlined ? ((100 - rangedPercent) / 100) * 16 + 4 : ((100 - rangedPercent) / 100) * 20 + 2;
    const fillHeight = outlined ? (rangedPercent / 100) * 16 : (rangedPercent / 100) * 20;

    return (
        <ProgressIcon color={color} percent={percent} labelColor={labelColor} labelSize={labelSize} size={size} showPercentLabel={showPercentLabel} labelPosition={labelPosition} >

        <svg height={`${size}px`} width={`${size}px`} x={0} y={0} viewBox="0 0 24 24" {...svgProps}>
            {!outlined && (
                <>
                    <path
                        opacity={0.3}
                        d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V6H19V8H22V11H19V13H22V16H19V18H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V18H5V16H2V13H5V11H2V8H5V6H2V4Z"
                        fill={color}
                    />
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={2} y={2} width={20} height={20}>
                        <path
                            d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V6H19V8H22V11H19V13H22V16H19V18H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V18H5V16H2V13H5V11H2V8H5V6H2V4Z"
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
                        d="M22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4ZM4 4V8H7V9H4V12H7V13H4V16H7V17H4V20H20V17H17V16H20V13H17V12H20V9H17V8H20V4H4Z"
                        clip-path={`url(#outlined-border-clip-${rangedPercent})`}
                        clip-rule="evenodd"
                        fill={color}
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM20 4H4V20H20V4Z"
                        fill={color}
                    />
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
        </ProgressIcon>
    );
};
