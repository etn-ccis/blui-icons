import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCurrentDcSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="current_dc_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#current_dc_slashed_svg__a)">
            <path d="M2 2v2h20V2H2Zm0 4v2h5V6H2Zm7 0v2h6V6H9Zm8 0v2h5V6h-5Zm-2.2 16.1-.8-2.6h-4l-.8 2.6H6.7L10.6 11h2.9l3.9 11.1h-2.6Zm-1.3-4.6c-.068 0-1.5-4.8-1.5-4.8l-1.4 4.8h2.9Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgCurrentDcSlashed'
);
export default SvgCurrentDcSlashed;
