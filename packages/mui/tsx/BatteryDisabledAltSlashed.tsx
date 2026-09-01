import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBatteryDisabledAltSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="battery_disabled_alt_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#battery_disabled_alt_slashed_svg__a)">
            <path d="M2.81 5.64 4.17 7H3.3c-.34.01-.67.15-.91.39-.25.24-.38.57-.39.91v7.3a1.318 1.318 0 0 0 .36.97c.12.13.26.24.43.31.16.07.33.11.51.12h10.87l4.19 4.19 1.42-1.41L4.22 4.22 2.81 5.64ZM12.17 15H4V9h2.17l6 6Zm9.73-5v4h-2v1.7c0 .34-.15.67-.39.91-.01.01-.02.02-.04.03l-1.65-1.65h.17v-6h-6.17l-2-2h8.87c.34 0 .67.15.91.39s.38.57.39.91v1.7h1.9Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBatteryDisabledAltSlashed'
);
export default SvgBatteryDisabledAltSlashed;
