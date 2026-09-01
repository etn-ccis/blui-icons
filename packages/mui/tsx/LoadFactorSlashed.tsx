import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgLoadFactorSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="load_factor_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#load_factor_slashed_svg__a)">
            <path d="M14.12 2.224 11.2 7.48 8.598 5.398 6.626 10h2.176l.6-1.398L11.148 10h.94l1.79-3.224L15.247 10h2.172l-3.298-7.776ZM19.965 16h-2.172l2.286 5.39 1.841-.78L19.965 16ZM6.23 16H4.056L2.08 20.606l1.838.788L6.231 16ZM3 12h2v2H3v-2ZM7 12h2v2H7v-2ZM11 12h2v2h-2v-2ZM15 12h2v2h-2v-2ZM19 12h2v2h-2v-2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgLoadFactorSlashed'
);
export default SvgLoadFactorSlashed;
