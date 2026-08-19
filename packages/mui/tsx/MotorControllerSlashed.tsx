import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMotorControllerSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="motor_controller_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#motor_controller_slashed_svg__a)">
            <path
                d="M17 5.06A7 7 0 0 0 9.07 11H7v-1a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h2.07A7 7 0 1 0 17 5.06ZM19.25 15h-1.41v-2.94c0-.16 0-.55.05-1.17L16.71 15h-1.47l-1.17-4.11c0 .7.08 1.24.08 1.63V15h-1.4V9.29h2.05l1.2 4.05 1.2-4.05h2.05Z"
                fillRule="evenodd"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgMotorControllerSlashed'
);
export default SvgMotorControllerSlashed;
