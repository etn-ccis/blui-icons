import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgRunningLowSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="running_low_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#running_low_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 1v3a8 8 0 0 0-8 8 8.92 8.92 0 0 0 1.2 4.3l1.5-1.5A5.28 5.28 0 0 1 6 12a6 6 0 0 1 6-6v3l4-4ZM18.8 7.7l-1.5 1.5A6.51 6.51 0 0 1 18 12a6 6 0 0 1-6 6v-3l-4 4 4 4v-3a8 8 0 0 0 8-8 8.92 8.92 0 0 0-1.2-4.3Z" />
            <path d="M15 13h-3V9h-2v6h5v-2z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgRunningLowSlashed'
);
export default SvgRunningLowSlashed;
