import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgRadioHandheldSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="radio_handheld_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#radio_handheld_slashed_svg__a)">
            <path d="M9 2c-.55 0-1 .45-1 1v17c0 1.11.89 2 2 2h5c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-5V3c0-.55-.45-1-1-1m1 7h5v4h-5V9z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgRadioHandheldSlashed'
);
export default SvgRadioHandheldSlashed;
