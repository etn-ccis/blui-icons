import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDcSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="dc_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#dc_slashed_svg__a)">
            <path d="M2 9v2h20V9H2Zm0 4v2h5v-2H2Zm7 0v2h6v-2H9Zm8 0v2h5v-2h-5Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDcSlashed'
);
export default SvgDcSlashed;
