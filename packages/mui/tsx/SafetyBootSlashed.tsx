import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSafetyBootSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="safety_boot_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#safety_boot_slashed_svg__a)">
            <path d="M21.5 10V6h-1l-1 1H15l-1-1h-1l-1 4-5 3H4a2 2 0 0 0-2 2v3h8l3-1h2v1h6.5v-2a6.07 6.07 0 0 0 .5-2.5 17.74 17.74 0 0 0-.5-3.5Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSafetyBootSlashed'
);
export default SvgSafetyBootSlashed;
