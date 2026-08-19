import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMotorAltSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="motor_alt_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#motor_alt_slashed_svg__a)">
            <path d="M18 9.5V8h-1V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h1v-1.5h4v-2ZM14 14H5v-1h9Zm0-2H5v-1h9Zm0-2H5V9h9Zm0-2H5V7h9ZM3 17h13v2H3Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgMotorAltSlashed'
);
export default SvgMotorAltSlashed;
