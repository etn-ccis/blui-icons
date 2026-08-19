import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBypassSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="bypass_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#bypass_slashed_svg__a)">
            <path d="m20 16 3-3-3-3v2h-1.252a8.003 8.003 0 0 0-15.496 0H1v2h4a6 6 0 0 1 12 0h3v2Z" />
            <path d="M15 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBypassSlashed'
);
export default SvgBypassSlashed;
