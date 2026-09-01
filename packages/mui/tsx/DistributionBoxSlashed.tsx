import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDistributionBoxSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="distribution_box_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#distribution_box_slashed_svg__a)">
            <path d="M8 18h2v3H8v-3ZM12 18h2v3h-2v-3Z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3h-2v5h2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Zm8 2-3 4h2v3l3-4h-2V7Z"
            />
            <path d="M19 9h2v3h-2V9ZM4 6h2v3H4V6ZM4 12h2v3H4v-3Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDistributionBoxSlashed'
);
export default SvgDistributionBoxSlashed;
