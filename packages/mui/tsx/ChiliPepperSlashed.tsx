import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgChiliPepperSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="chili_pepper_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#chili_pepper_slashed_svg__a)">
            <path d="m13.75 9 1.2-.76c.63.34 1.05 1 1.05 1.76v11.75S8 20 8 11v-1c0-.73.39-1.37.97-1.72l1.46.72L12 8l1.75 1M10 2c1.53 0 2.8 1.15 3 2.64 1 .29 1.81 1.03 2.22 1.99l-1.47.87-1.75-1-1.57 1-1.67-.83c.39-.95 1.19-1.67 2.18-2.01A1.01 1.01 0 0 0 10 4V2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgChiliPepperSlashed'
);
export default SvgChiliPepperSlashed;
