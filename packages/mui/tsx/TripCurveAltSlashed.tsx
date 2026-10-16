import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTripCurveAltSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="trip_curve_alt_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#trip_curve_alt_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 5.532V3H5v3.468l6 5V16.5h4V21h4v-2h-2v-4.5h-4v-3.968l-6-5Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M2.22 2.21.8 3.63l19.6 19.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTripCurveAltSlashed'
);
export default SvgTripCurveAltSlashed;
