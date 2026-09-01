import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSensorSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="sensor_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#sensor_slashed_svg__a)">
            <path d="M10 12a5.94 5.94 0 0 1-1.76 4.24l-1.42-1.42A4 4 0 0 0 8 12a4 4 0 0 0-1.17-2.83l1.41-1.41A5.94 5.94 0 0 1 10 12Zm1.07-7.07L9.65 6.35a8 8 0 0 1 0 11.3l1.42 1.42a10 10 0 0 0 0-14.14ZM16 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM4 12l1.74 1.74a6 6 0 0 0 0-3.48L4 12Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSensorSlashed'
);
export default SvgSensorSlashed;
