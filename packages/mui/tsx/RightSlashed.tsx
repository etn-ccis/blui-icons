import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgRightSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="right_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#right_slashed_svg__a)">
            <path d="M11 9h3v2h-3V9Z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9 7h5a2 2 0 0 1 2 2v2a2 2 0 0 1-1.615 1.963L16 17h-2l-1.5-4H11v4H9V7Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgRightSlashed'
);
export default SvgRightSlashed;
