import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSensorDeviceSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="sensor_device_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#sensor_device_slashed_svg__a)">
            <path d="m14.83 1.83 1.41 1.41A5.939 5.939 0 0 1 12 5a5.94 5.94 0 0 1-4.24-1.76l1.42-1.42A4 4 0 0 0 12 3a4 4 0 0 0 2.83-1.17Z" />
            <path d="m17.65 4.65 1.42 1.42A10 10 0 0 1 12 9a10 10 0 0 1-7.07-2.93l1.42-1.42A7.94 7.94 0 0 0 12 7a7.94 7.94 0 0 0 5.65-2.35Z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 11h-4a2 2 0 0 1-4 0H6a2 2 0 0 0-2 2v9h16v-9a2 2 0 0 0-2-2ZM6 18v-3h12v3H6Z"
            />
            <path d="M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSensorDeviceSlashed'
);
export default SvgSensorDeviceSlashed;
