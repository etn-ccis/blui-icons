import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgToggleOnOutlinedSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="toggle_on_outlined_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#toggle_on_outlined_slashed_svg__a)">
            <path d="M17 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2m0-3a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10M7 9a3 3 0 0 0 0 6h10a3 3 0 0 0 0-6Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgToggleOnOutlinedSlashed'
);
export default SvgToggleOnOutlinedSlashed;
