import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgVoltageCircledSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="voltage_circled_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#voltage_circled_slashed_svg__a)">
            <path d="M0 0h24v24H0Z" fill="none" />
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 11H4v-2h7Zm6.5 0v2.5h-2V13H13v-2h2.5V8.5h2V11H20v2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgVoltageCircledSlashed'
);
export default SvgVoltageCircledSlashed;
