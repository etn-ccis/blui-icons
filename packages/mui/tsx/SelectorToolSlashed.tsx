import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSelectorToolSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="selector_tool_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#selector_tool_slashed_svg__a)">
            <path d="M3.127 6.892c-.656-2.23 1.332-4.308 3.55-3.82l.215.055 11.93 3.51c2.643.777 2.965 4.39.501 5.621l-4.71 2.355-2.355 4.71c-1.231 2.464-4.844 2.142-5.622-.5L3.127 6.893Zm3.195-1.825a1.01 1.01 0 0 0-1.255 1.255l3.508 11.93c.243.826 1.317.972 1.789.31l.086-.143 2.505-5.012c.098-.195.257-.354.452-.452l5.012-2.505c.821-.41.714-1.616-.167-1.875L6.322 5.067Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSelectorToolSlashed'
);
export default SvgSelectorToolSlashed;
