import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTripCurveSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="trip_curve_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#trip_curve_slashed_svg__a)">
            <path
                d="M17.73 19a2.13 2.13 0 0 0-.73-.73V14.5h-4v-1.77A2 2 0 0 0 12 9a1.81 1.81 0 0 0-.52.07L7.93 5.52A1.81 1.81 0 0 0 8 5a2 2 0 0 0-1-1.73V2H5v1.27A2 2 0 0 0 6 7a1.81 1.81 0 0 0 .52-.07l3.55 3.55A1.81 1.81 0 0 0 10 11a2 2 0 0 0 1 1.73v3.77h4v1.77A2 2 0 1 0 17.73 21H19v-2ZM6 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm6 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"
                fillRule="evenodd"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTripCurveSlashed'
);
export default SvgTripCurveSlashed;
