import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBatteryDisabledSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="battery_disabled_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#battery_disabled_slashed_svg__a)">
            <path d="M3.33 3.33 2 4.67l5 5V21c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.33L19.33 22l1.34-1.33L3.33 3.33ZM15 20H9v-8.33l6 6V20ZM17 5v9.33l-2-2V6H9v.33L7.15 4.48C7.32 4.19 7.64 4 8 4h2V2h4v2h2c.55 0 1 .45 1 1Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBatteryDisabledSlashed'
);
export default SvgBatteryDisabledSlashed;
