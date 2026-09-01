import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPxredSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pxred_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pxred_slashed_svg__a)">
            <path d="M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11Zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z" />
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13 14h-2v-1H6v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3h-5Zm4-6h-2V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v3h5v-1h2v1h5V9a1 1 0 0 0-1-1Zm-3 0h-4V7h4Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPxredSlashed'
);
export default SvgPxredSlashed;
