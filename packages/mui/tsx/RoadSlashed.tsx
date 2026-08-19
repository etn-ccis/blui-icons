import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgRoadSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="road_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#road_slashed_svg__a)">
            <path d="M11 16h2v4h-2m0-10h2v4h-2m0-10h2v4h-2M4 22h16V2H4v20Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgRoadSlashed'
);
export default SvgRoadSlashed;
