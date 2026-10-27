import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgStoveSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="stove_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#stove_slashed_svg__a)">
            <path d="M6 14h2l3 3H9l-3-3ZM4 4h1V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2v1h-3v-1H7v1H4v-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm14 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm6-1H4v4h16V6ZM4 19h16v-7H4v7ZM6 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 7h2l3 3h-2l-3-3Z" />
        </g>,
        <path data-name="slash-overlay" d="M2.22 2.21.8 3.63l19.6 19.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgStoveSlashed'
);
export default SvgStoveSlashed;
