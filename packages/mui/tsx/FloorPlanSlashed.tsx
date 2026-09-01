import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgFloorPlanSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="floor_plan_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#floor_plan_slashed_svg__a)">
            <path d="M10 5v5H9V5H5v8h4v-1h1v5H9v-3H5v5h7v-2h1v2h6v-2h2v4H3V3h18v12h-2v-5h-6v5h-1V9h7V5h-9Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgFloorPlanSlashed'
);
export default SvgFloorPlanSlashed;
