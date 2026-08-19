import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMotorSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="motor_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#motor_slashed_svg__a)">
            <path
                d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.89 14.5h-2.13v-4.41c0-.23 0-.82.08-1.75h-.05l-1.73 6.16h-2.2l-1.75-6.17h-.06a18.74 18.74 0 0 1 .13 2.45v3.72H7.12V7.93h3.09L12 14l1.79-6.07h3.1Z"
                fillRule="evenodd"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgMotorSlashed'
);
export default SvgMotorSlashed;
