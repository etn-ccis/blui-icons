import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTempSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="temp_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#temp_slashed_svg__a)">
            <path d="M17 17a5 5 0 1 1-8-4V5a3 3 0 0 1 6 0v8a5 5 0 0 1 2 4m-6-9v6.17a3 3 0 1 0 2 0V8h-2" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTempSlashed'
);
export default SvgTempSlashed;
