import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgOutletAltSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="outlet_alt_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#outlet_alt_slashed_svg__a)">
            <path
                d="M10 12H8V7h2v5Zm6-4.5h-2v4h2v-4Zm-2.5 8.75a1.499 1.499 0 0 0-2.56-1.06c-.28.28-.44.66-.44 1.06V17h3v-.75ZM22 4v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2Zm-2 0H4v16h16V4Z"
                fillRule="evenodd"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgOutletAltSlashed'
);
export default SvgOutletAltSlashed;
