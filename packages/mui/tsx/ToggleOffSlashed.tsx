import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgToggleOffSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="toggle_off_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#toggle_off_slashed_svg__a)">
            <path d="M17 7H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10ZM7 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            <path d="M0 0h24v24H0Z" fill="none" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgToggleOffSlashed'
);
export default SvgToggleOffSlashed;
