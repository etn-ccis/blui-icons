import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBypassBatterySlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="bypass_battery_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#bypass_battery_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17.5 9.1H19v-6h-6v1.5h3.5L12 9.1l-6-6-1 1 7 7 5.5-5.5ZM18 14v6H4v-6h14m.7-2H3.3A1.324 1.324 0 0 0 2 13.3v7.3A1.347 1.347 0 0 0 3.3 22h15.3a1.324 1.324 0 0 0 1.3-1.3V19h2v-4h-2v-1.7a1.181 1.181 0 0 0-1.2-1.3Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBypassBatterySlashed'
);
export default SvgBypassBatterySlashed;
