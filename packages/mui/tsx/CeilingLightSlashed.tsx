import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCeilingLightSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="ceiling_light_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#ceiling_light_slashed_svg__a)">
            <path d="M8 9h3V4h2v5h3l4 8H4Zm6 9a2 2 0 0 1-4 0Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgCeilingLightSlashed'
);
export default SvgCeilingLightSlashed;
