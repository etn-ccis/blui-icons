import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgArrowSelectorToolSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="arrow_selector_tool_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#arrow_selector_tool_slashed_svg__a)">
            <path d="m13.775 22-3.625-7.8L6 20V2l14 11h-7.1l3.6 7.725L13.775 22Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgArrowSelectorToolSlashed'
);
export default SvgArrowSelectorToolSlashed;
