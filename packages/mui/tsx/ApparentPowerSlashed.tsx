import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgApparentPowerSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="apparent_power_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#apparent_power_slashed_svg__a)">
            <path d="M21.42 3v4.24L20 5.83 5.83 20H3L18.59 4.41 17.17 3ZM5.11 11H3.42V3H6a3.37 3.37 0 0 1 2.21.63 2.27 2.27 0 0 1 .73 1.87 2.42 2.42 0 0 1-.81 2 3.41 3.41 0 0 1-2.29.69h-.73Zm0-4.23h.56a1.84 1.84 0 0 0 1.17-.31 1.09 1.09 0 0 0 .39-.9 1.1 1.1 0 0 0-.33-.88 1.49 1.49 0 0 0-1-.29h-.79ZM18.42 20h3v-1h-3Zm-5 0h3v-1h-3Zm7-8h1V9h-1Zm0 5h1v-3h-1Zm-12 3h3v-1h-2Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgApparentPowerSlashed'
);
export default SvgApparentPowerSlashed;
