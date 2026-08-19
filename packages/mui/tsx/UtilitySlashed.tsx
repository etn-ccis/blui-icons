import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgUtilitySlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="utility_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#utility_slashed_svg__a)">
            <path
                d="m20.93 20.63-4-10L15.94 8H18v2h2V6h-4.81l-1.5-4h-3.38l-1.5 4H4v4h2V8h2.06l-1 2.63-4 10 1.48 1.2 7.45-5 7.45 5ZM8.68 12h6.64l.08.2-3.4 2.26-3.4-2.26Zm3-8h.62l.75 2h-2.11Zm2.12 4 .75 2H9.44l.75-2ZM6.12 18.38l1.72-4.29 2.36 1.58Zm7.68-2.71 2.36-1.58 1.72 4.29Z"
                fill="currentColor"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgUtilitySlashed'
);
export default SvgUtilitySlashed;
