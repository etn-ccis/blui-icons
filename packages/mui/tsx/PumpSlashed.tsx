import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPumpSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pump_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pump_slashed_svg__a)">
            <path fill="none" opacity={0.01} d="M0 0h24v24H0z" />
            <path d="M18 12a6 6 0 0 0-5.74-6l3-3-1.43-1.39-6.11 6.11a6 6 0 0 0 4 10.23l-3 3 1.42 1.41 6.11-6.11A6 6 0 0 0 18 12Zm-6 4a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPumpSlashed'
);
export default SvgPumpSlashed;
