import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgContactorSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="contactor_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#contactor_slashed_svg__a)">
            <path d="M13 8V3h-2v5H2v3h20V8h-9zM2 16h9v5h2v-5h9v-3H2v3z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgContactorSlashed'
);
export default SvgContactorSlashed;
