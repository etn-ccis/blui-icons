import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDiodeSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="diode_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#diode_slashed_svg__a)">
            <path d="M22 11h-6V8h-2v3h-1L6 7v4H2v2h4v4l7-4h1v3h2v-3h6v-2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDiodeSlashed'
);
export default SvgDiodeSlashed;
