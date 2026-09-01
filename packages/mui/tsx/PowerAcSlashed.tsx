import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPowerAcSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="power_ac_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#power_ac_slashed_svg__a)">
            <path d="M16.7 22.1H14l-2-8.4-2 8.4H7.3L4.5 11h2.3l1.9 8.9 2.1-8.9H13l2.1 9 1.9-8.9h2.3l-2.6 11ZM16 7.4c-.9 0-1.7-.2-2.5-.5L9.6 5c-1.4-.7-3.7-.3-4.7.8L3.8 7 2.4 5.6l1.1-1.2c1.6-1.8 4.8-2.4 7-1.3l4 1.9c1.4.7 3.7.3 4.7-.8l1-1.2 1.5 1.3-1.1 1.2c-1.1 1.2-2.8 1.9-4.6 1.9Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPowerAcSlashed'
);
export default SvgPowerAcSlashed;
