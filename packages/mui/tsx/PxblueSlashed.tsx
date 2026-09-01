import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPxblueSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pxblue_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pxblue_slashed_svg__a)">
            <circle cx={12} cy={12} r={4} />
            <path d="M21.5 12a9.22 9.22 0 0 0-3.14-6.36A8.71 8.71 0 0 1 20.5 12a8.28 8.28 0 0 1-2.84 5.66A8 8 0 1 1 9.39 4.45a3 3 0 1 0-.33-2 10 10 0 1 0 10 16.63A9.7 9.7 0 0 0 21.5 12ZM12 2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPxblueSlashed'
);
export default SvgPxblueSlashed;
