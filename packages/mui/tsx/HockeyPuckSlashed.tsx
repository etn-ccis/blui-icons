import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgHockeyPuckSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="hockey_puck_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#hockey_puck_slashed_svg__a)">
            <path d="M12 5C6.5 5 2 6.6 2 8.5S6.5 12 12 12s10-1.6 10-3.5S17.5 5 12 5M2 11.8v4.7C2 18.4 6.5 20 12 20s10-1.6 10-3.5v-4.7a8.17 8.17 0 0 1-2.3 1.1A25.06 25.06 0 0 1 12 14a25.06 25.06 0 0 1-7.7-1.1A12.29 12.29 0 0 1 2 11.8Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgHockeyPuckSlashed'
);
export default SvgHockeyPuckSlashed;
