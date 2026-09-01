import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDeviceOpenSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="device_open_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#device_open_slashed_svg__a)">
            <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-7 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDeviceOpenSlashed'
);
export default SvgDeviceOpenSlashed;
