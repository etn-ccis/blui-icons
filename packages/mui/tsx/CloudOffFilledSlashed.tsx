import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCloudOffFilledSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="cloud_off_filled_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#cloud_off_filled_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41 3.86 3 5.27l2.77 2.77h-.42A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h11.73l2 2 1.41-1.41L4.41 3.86ZM24 15c0-2.64-2.05-4.78-4.65-4.96A7.49 7.49 0 0 0 12 4c-1.33 0-2.57.36-3.65.97L22.2 18.81c1.09-.92 1.8-2.27 1.8-3.81Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgCloudOffFilledSlashed'
);
export default SvgCloudOffFilledSlashed;
