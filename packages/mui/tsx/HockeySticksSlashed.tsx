import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgHockeySticksSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="hockey_sticks_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#hockey_sticks_slashed_svg__a)">
            <path d="M7.6 3 5.1 4.6l4 6.3 1.8-2.8L7.6 3m8.8 0L7.5 17H2v4h6.5L19 4.6 16.4 3M15 14.6l-1.8 2.8 2.3 3.6H22v-4h-5.5Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgHockeySticksSlashed'
);
export default SvgHockeySticksSlashed;
