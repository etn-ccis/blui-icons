import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDeviceWithKeypadSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="device_with_keypad_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#device_with_keypad_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM9 19H7v-2h2v2Zm0-4H7v-2h2v2Zm8 4h-6v-2h6v2Zm-6-4v-2h2v2h-2Zm6 0h-2v-2h2v2Zm0-4H7V5h10v6Z"
                fillRule="evenodd"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDeviceWithKeypadSlashed'
);
export default SvgDeviceWithKeypadSlashed;
