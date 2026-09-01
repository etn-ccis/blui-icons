import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBasketballHoopSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="basketball_hoop_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#basketball_hoop_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.57L8 23l2-2 2 2 2-2 2 2 1.43-5H21a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 14h-3v-2h-1V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H6v2H3V4h18v12M9 14V9h6v5Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBasketballHoopSlashed'
);
export default SvgBasketballHoopSlashed;
