import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBypassAltSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="bypass_alt_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#bypass_alt_slashed_svg__a)">
            <path d="M17.5 12H19V6h-6v1.5h3.5L12 12 6 6 5 7l7 7 5.5-5.5V12ZM4 16h16v2H4v-2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBypassAltSlashed'
);
export default SvgBypassAltSlashed;
