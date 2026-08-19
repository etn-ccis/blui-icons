import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCircuitOpenSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="circuit_open_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#circuit_open_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m12.788 4.116-1.21 1.593L9.328 4H7v4.126a4.002 4.002 0 0 1 0 7.748V20h10v-5h-1v-2h4v2h-1v5l-.01.204a2 2 0 0 1-1.786 1.785L17 22H7l-.204-.01a2 2 0 0 1-1.785-1.786L5 20v-4.126a4.002 4.002 0 0 1 0-7.748V4a2 2 0 0 1 2-2h3l2.788 2.116ZM6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
            />
            <path d="M17 2a2 2 0 0 1 2 2v5h3v2h-8V9h3V4h-3V2h3Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgCircuitOpenSlashed'
);
export default SvgCircuitOpenSlashed;
