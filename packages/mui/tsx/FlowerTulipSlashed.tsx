import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgFlowerTulipSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="flower_tulip_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#flower_tulip_slashed_svg__a)">
            <path d="M3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9m9 9a9 9 0 0 0 9-9 9 9 0 0 0-9 9m6-19v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V3c.74 0 1.47.12 2.16.39.55.23 1.04.57 1.45 1L12 2l2.39 2.39c.41-.43.9-.77 1.45-1A5.9 5.9 0 0 1 18 3Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgFlowerTulipSlashed'
);
export default SvgFlowerTulipSlashed;
