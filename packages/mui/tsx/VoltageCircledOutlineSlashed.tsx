import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgVoltageCircledOutlineSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="voltage_circled_outline_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#voltage_circled_outline_slashed_svg__a)">
            <path d="M12 4a8 8 0 1 1-8 8 8 8 0 0 1 8-8m0-2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
            <path d="M11 11H6v2h5v-2zM18 11h-5v2h5v-2z" />
            <path d="M16.5 9.5h-2v5h2v-5z" />
            <path d="M0 0h24v24H0Z" fill="none" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgVoltageCircledOutlineSlashed'
);
export default SvgVoltageCircledOutlineSlashed;
