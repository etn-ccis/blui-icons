import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPaywallSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="paywall_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#paywall_slashed_svg__a)">
            <path d="M14 6a7.17 7.17 0 0 0-1 .08 4.49 4.49 0 0 0-9 .42V7a2 2 0 0 0-2 2v9a1.94 1.94 0 0 0 2 2h4.73A8 8 0 1 0 14 6Zm-8 .5a2.51 2.51 0 0 1 5-.24V7H6ZM14 20a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm-1.5-8v1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H15v1h-2v-1h-2.5v-2h5v-1h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1H13V9h2v1h2.5v2Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPaywallSlashed'
);
export default SvgPaywallSlashed;
