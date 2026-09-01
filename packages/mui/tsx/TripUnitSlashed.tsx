import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTripUnitSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="trip_unit_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#trip_unit_slashed_svg__a)">
            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-5 2h5v4h-5V4Zm-3 16H6v-6h2v4h2v2Zm8 0h-4v-4h-3v-3.6l-5-5V4h2v2.6l5 5V14h3v4h2v2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTripUnitSlashed'
);
export default SvgTripUnitSlashed;
