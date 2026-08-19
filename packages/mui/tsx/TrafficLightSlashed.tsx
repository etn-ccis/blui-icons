import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTrafficLightSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="traffic_light_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#traffic_light_slashed_svg__a)">
            <path d="M12 9a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m0 5a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m0 5a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m8-9h-3V8.86c1.72-.45 3-2 3-3.86h-3V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTrafficLightSlashed'
);
export default SvgTrafficLightSlashed;
