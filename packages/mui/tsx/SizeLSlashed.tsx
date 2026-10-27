import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSizeLSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="size_l_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#size_l_slashed_svg__a)">
            <path d="M8.15 18.75V5.9h3.472v10.046h4.948v2.804H8.15Z" />
        </g>,
        <path data-name="slash-overlay" d="M2.22 2.21.8 3.63l19.6 19.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSizeLSlashed'
);
export default SvgSizeLSlashed;
