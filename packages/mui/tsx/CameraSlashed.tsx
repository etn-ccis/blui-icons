import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCameraSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="camera_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#camera_slashed_svg__a)">
            <path d="M18.15 4.94A2.09 2.09 0 0 0 17 5.2l-8.65 5a2 2 0 0 0-.73 2.74l1.5 2.59a2 2 0 0 0 2.73.74l1.8-1a2.49 2.49 0 0 0 1.16 1V18a2 2 0 0 0 2 2H22v-2h-5.19v-1.73A2.49 2.49 0 0 0 18 12.73l2.53-1.46a2 2 0 0 0 .74-2.74l-1.5-2.59a2 2 0 0 0-1.59-1M6.22 13.17l-4.22.7.75 1.3 2 3.46.75 1.3 2.72-3.3Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgCameraSlashed'
);
export default SvgCameraSlashed;
