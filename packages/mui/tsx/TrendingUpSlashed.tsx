import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTrendingUpSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="trending_up_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#trending_up_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0Z" />
            <path d="m14.5 4 2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTrendingUpSlashed'
);
export default SvgTrendingUpSlashed;
