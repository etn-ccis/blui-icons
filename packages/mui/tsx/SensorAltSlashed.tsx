import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSensorAltSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="sensor_alt_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#sensor_alt_slashed_svg__a)">
            <path d="M6 7.05 4.53 8.47a5 5 0 0 1 0 7.06L6 17a6.999 6.999 0 0 0 0-9.9v-.05ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM1.41 10.59l1.42-1.42a4 4 0 0 1 .867 4.361 4 4 0 0 1-.867 1.299l-1.42-1.42a2 2 0 0 0 0-2.82ZM18 12a5 5 0 0 1 1.47-3.53l-1.42-1.42a7 7 0 0 0 0 9.9l1.42-1.42A5 5 0 0 1 18 12ZM22.59 10.59A2 2 0 0 0 22 12a2 2 0 0 0 .59 1.41l-1.42 1.42a4 4 0 0 1 0-5.66l1.42 1.42Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSensorAltSlashed'
);
export default SvgSensorAltSlashed;
