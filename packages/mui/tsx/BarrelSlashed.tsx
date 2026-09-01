import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBarrelSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="barrel_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#barrel_slashed_svg__a)">
            <path d="M18 19h1v2H5v-2h1v-6H5v-2h1V5H5V3h14v2h-1v6h1v2h-1v6m-9-6a3 3 0 0 0 3 3 3 3 0 0 0 3-3c0-2-3-5.37-3-5.37S9 11 9 13Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBarrelSlashed'
);
export default SvgBarrelSlashed;
