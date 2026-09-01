import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgOverallsSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="overalls_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#overalls_slashed_svg__a)">
            <path d="M16 9.26a2 2 0 0 1-2-2V2h-1v4h-2V2h-1v5.26a2 2 0 0 1-2 2V22h3v-9h2v9h3V9.26Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgOverallsSlashed'
);
export default SvgOverallsSlashed;
