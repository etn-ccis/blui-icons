import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPhaseAngleSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="phase_angle_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#phase_angle_slashed_svg__a)">
            <path d="M11.9 16.5a4.92 4.92 0 0 0-2.7-4.4l5.5-8L13.1 3 2 19h20v-2H11.9Zm-2 .5H5.8L8 13.7a3.06 3.06 0 0 1 1.9 2.8Zm3.2-6a3 3 0 0 0 3 3h.4v1.5h2V14h.5a3 3 0 0 0 0-6h-.5V6.5h-2V8h-.4a3 3 0 0 0-3 3Zm5.4-1h.5a1 1 0 0 1 0 2h-.5Zm-2.4 0h.4v2h-.4a1 1 0 0 1 0-2Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPhaseAngleSlashed'
);
export default SvgPhaseAngleSlashed;
