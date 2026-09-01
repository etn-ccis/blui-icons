import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCurrentSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="current_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#current_slashed_svg__a)">
            <path d="M16.67 17A4.58 4.58 0 0 1 13 15.05l-3.64-4.89A2.57 2.57 0 0 0 7.23 9a2.79 2.79 0 0 0-2.16 1.51l-1.21 2-1.72-1 1.21-2A4.73 4.73 0 0 1 7.12 7 4.51 4.51 0 0 1 11 9l3.68 4.89A2.56 2.56 0 0 0 16.77 15a2.78 2.78 0 0 0 2.16-1.51l1.21-2 1.72 1-1.21 2A4.73 4.73 0 0 1 16.88 17Z" />
            <path d="M0 0h24v24H0Z" fill="none" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgCurrentSlashed'
);
export default SvgCurrentSlashed;
