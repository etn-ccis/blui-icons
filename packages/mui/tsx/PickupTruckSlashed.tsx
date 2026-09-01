import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPickupTruckSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pickup_truck_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pickup_truck_slashed_svg__a)">
            <path d="M16 6h-5.5v4H1v5h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-3a2 2 0 0 0-2-2h-2l-3-4m-4 1.5h3.5l2 2.5H12V7.5m-6 6A1.5 1.5 0 1 1 4.5 15 1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPickupTruckSlashed'
);
export default SvgPickupTruckSlashed;
