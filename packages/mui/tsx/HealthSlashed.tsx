import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgHealthSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="health_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#health_slashed_svg__a)">
            <path fill="none" opacity={0.01} d="M0 0h24v24H0z" />
            <path d="M17.5 13.5h-4v4h-3v-4h-4v-3h4v-4h3v4h4ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgHealthSlashed'
);
export default SvgHealthSlashed;
