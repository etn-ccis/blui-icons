import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgAngularSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="angular_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#angular_slashed_svg__a)">
            <path d="m12 2.5 8.84 3.15-1.34 11.7L12 21.5l-7.5-4.15-1.34-11.7L12 2.5Zm0 2.1L6.47 17h2.06l1.11-2.78h4.7L15.45 17h2.05L12 4.6Zm1.62 7.9h-3.23L12 8.63l1.62 3.87Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgAngularSlashed'
);
export default SvgAngularSlashed;
