import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPowerDcSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="power_dc_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#power_dc_slashed_svg__a)">
            <path d="M2 2v2h20V2H2Zm0 4v2h5V6H2Zm7 0v2h6V6H9Zm8 0v2h5V6h-5Zm-.3 16.1H14l-2-8.4-2 8.4H7.3L4.5 11h2.3l1.9 8.9 2.1-8.9H13l2.1 9 1.9-8.9h2.3l-2.6 11Z" />
        </g>,
        <path data-name="slash-overlay" d="M2.22 2.21.8 3.63l19.6 19.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPowerDcSlashed'
);
export default SvgPowerDcSlashed;
