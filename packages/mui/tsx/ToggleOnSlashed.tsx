import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgToggleOnSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="toggle_on_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#toggle_on_slashed_svg__a)">
            <path d="M17 7H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            <path d="M0 0h24v24H0Z" fill="none" />
        </g>,
        <path data-name="slash-overlay" d="M2.22 2.21.8 3.63l19.6 19.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgToggleOnSlashed'
);
export default SvgToggleOnSlashed;
