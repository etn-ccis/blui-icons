import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDimmerSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="dimmer_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#dimmer_slashed_svg__a)">
            <path
                d="M15 14H9v-2h2V5h2v7h2Zm-4 5h2v-4h-2Zm8-16v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Zm-2 0H7v18h10Z"
                fillRule="evenodd"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDimmerSlashed'
);
export default SvgDimmerSlashed;
