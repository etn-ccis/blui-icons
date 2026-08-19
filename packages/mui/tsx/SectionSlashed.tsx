import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSectionSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="section_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#section_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12Zm-5 5a1 1 0 0 1-1 1H6v8h12V6h-5v3ZM6 8h5V6H6v2Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSectionSlashed'
);
export default SvgSectionSlashed;
