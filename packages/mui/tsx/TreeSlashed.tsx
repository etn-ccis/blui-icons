import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTreeSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="tree_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#tree_slashed_svg__a)">
            <path d="M11 21v-4.3c-.5.2-1 .3-1.5.3C7 17 5 15 5 12.5c0-1.3.5-2.4 1.4-3.2-.3-.6-.4-1.2-.4-1.8C6 5 8 3 10.5 3c1.6 0 2.9.8 3.8 2h.2c3 0 5.5 2.5 5.5 5.5S17.5 16 14.5 16c-.5 0-1-.1-1.5-.2V21h-2z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTreeSlashed'
);
export default SvgTreeSlashed;
