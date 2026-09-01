import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgForkliftSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="forklift_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#forklift_slashed_svg__a)">
            <path d="M6 4v7H4a2 2 0 0 0-2 2v4a3 3 0 0 0 6 0h2a3 3 0 0 0 6 0v-4l-4-9H6m11 1v14h5v-1.5h-3.5V5H17m-9.5.5h3.7l3.3 7.5h-7V5.5M5 15.5A1.5 1.5 0 1 1 3.5 17 1.5 1.5 0 0 1 5 15.5m8 0a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgForkliftSlashed'
);
export default SvgForkliftSlashed;
