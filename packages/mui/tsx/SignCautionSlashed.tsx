import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSignCautionSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="sign_caution_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#sign_caution_slashed_svg__a)">
            <path d="M2 3h20v10h-4v8h-2v-8H8v8H6v-8H2V3m16.97 8L20 9.97V7.15L16.15 11h2.82m-5.65 0 6-6H16.5l-6 6h2.82m-5.66 0 6-6h-2.83l-6 6h2.83M5.18 5 4 6.18V9l4-4H5.18Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSignCautionSlashed'
);
export default SvgSignCautionSlashed;
