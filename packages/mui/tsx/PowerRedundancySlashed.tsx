import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPowerRedundancySlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="power_redundancy_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#power_redundancy_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 17V9a2 2 0 0 0-2-2h-1V5h1a4 4 0 0 1 4 4v8h2l-3 3-3-3h2ZM8 7v8a2 2 0 0 0 2 2h1v2h-1a4 4 0 0 1-4-4V7H4l3-3 3 3H8Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPowerRedundancySlashed'
);
export default SvgPowerRedundancySlashed;
