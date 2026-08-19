import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTennisSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="tennis_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#tennis_slashed_svg__a)">
            <path d="M12 2a9.81 9.81 0 0 1 6.5 2.4A10.13 10.13 0 0 0 15 12a10.13 10.13 0 0 0 3.5 7.6A10 10 0 0 1 12 22a9.81 9.81 0 0 1-6.5-2.4A10.13 10.13 0 0 0 9 12a10.13 10.13 0 0 0-3.5-7.6A9.81 9.81 0 0 1 12 2m10 10a9.79 9.79 0 0 1-2.1 6.1A7.64 7.64 0 0 1 17 12a8 8 0 0 1 2.9-6.2A10.52 10.52 0 0 1 22 12M2 12a10.52 10.52 0 0 1 2.1-6.2A8 8 0 0 1 7 12a7.64 7.64 0 0 1-2.9 6.1A9.79 9.79 0 0 1 2 12Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTennisSlashed'
);
export default SvgTennisSlashed;
