import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTrendingDownSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="trending_down_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#trending_down_slashed_svg__a)">
            <path fill="none" d="M0 24h24V0H0Z" />
            <path d="m14.5 20 2.04-2.04L4 5.41 5.41 4l12.55 12.54L20 14.5V20Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTrendingDownSlashed'
);
export default SvgTrendingDownSlashed;
