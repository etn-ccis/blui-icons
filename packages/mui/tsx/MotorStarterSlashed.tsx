import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMotorStarterSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="motor_starter_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#motor_starter_slashed_svg__a)">
            <path d="M8.75 10h-1.5v4h1.5v-4ZM18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2ZM8 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3Zm8 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgMotorStarterSlashed'
);
export default SvgMotorStarterSlashed;
