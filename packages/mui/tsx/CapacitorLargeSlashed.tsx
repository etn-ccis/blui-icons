import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCapacitorLargeSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="capacitor_large_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#capacitor_large_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17 4h-1V2h-3v2h-2V2H8v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgCapacitorLargeSlashed'
);
export default SvgCapacitorLargeSlashed;
