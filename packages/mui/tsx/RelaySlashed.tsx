import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgRelaySlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="relay_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#relay_slashed_svg__a)">
            <path
                d="M19.5 7h-7V4h-2v3h-7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7v3h2v-3h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-16 8V9h9.59l-6 6Zm16 0H9.91l6-6h3.59Z"
                fillRule="evenodd"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgRelaySlashed'
);
export default SvgRelaySlashed;
