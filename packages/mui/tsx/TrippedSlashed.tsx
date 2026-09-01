import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTrippedSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="tripped_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#tripped_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M23 14v2h-6v-2Zm-9-5.07-1.41-1.42-.7-.7-7.08 7.07-.1.12H1v2h6v-.07l7-7Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTrippedSlashed'
);
export default SvgTrippedSlashed;
