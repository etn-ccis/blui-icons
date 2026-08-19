import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgVoltageAcSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="voltage_ac_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#voltage_ac_slashed_svg__a)">
            <path d="M16 7.4c-.9 0-1.7-.2-2.5-.5L9.6 5c-1.4-.7-3.7-.3-4.7.8L3.8 7 2.4 5.6l1.1-1.2c1.6-1.8 4.8-2.4 7-1.3l4 1.9c1.4.7 3.7.3 4.7-.8l1-1.2 1.5 1.3-1.1 1.2c-1.1 1.2-2.8 1.9-4.6 1.9ZM14.6 10.9H17L13.2 22h-2.6L6.9 10.9h2.4L12 20l2.6-9.1Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgVoltageAcSlashed'
);
export default SvgVoltageAcSlashed;
