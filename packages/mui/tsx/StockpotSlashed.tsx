import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgStockpotSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="stockpot_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#stockpot_slashed_svg__a)">
            <path d="M6 20a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 3 17V8h18v9c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 20H6ZM3 7V5h6V4c0-.283.096-.52.287-.712A.968.968 0 0 1 10 3h4c.283 0 .52.096.713.288.191.191.287.429.287.712v1h6v2H3Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgStockpotSlashed'
);
export default SvgStockpotSlashed;
