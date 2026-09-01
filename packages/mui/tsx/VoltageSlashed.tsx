import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgVoltageSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="voltage_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#voltage_slashed_svg__a)">
            <path d="M9 11H2v2h7v-2zM19.5 8.5h-2V11H15v2h2.5v2.5h2V13H22v-2h-2.5V8.5z" />
            <path d="M9 11H2v2h7v-2zM19.5 8.5h-2V11H15v2h2.5v2.5h2V13H22v-2h-2.5V8.5z" />
            <path d="M0 0h24v24H0Z" fill="none" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgVoltageSlashed'
);
export default SvgVoltageSlashed;
