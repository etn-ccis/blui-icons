import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGradeDSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="grade_d_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#grade_d_slashed_svg__a)">
            <path d="M11.32 8.69H10.2v6.51h.9q3.08 0 3.07-3.29t-2.85-3.22Z" />
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3 13.64A5.73 5.73 0 0 1 10.91 17H8.08V7h3.13A5.23 5.23 0 0 1 15 8.25a4.71 4.71 0 0 1 1.36 3.6A4.93 4.93 0 0 1 15 15.64Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgGradeDSlashed'
);
export default SvgGradeDSlashed;
