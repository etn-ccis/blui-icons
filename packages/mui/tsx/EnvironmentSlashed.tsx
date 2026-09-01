import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgEnvironmentSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="environment_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#environment_slashed_svg__a)">
            <path d="M13 17a5 5 0 1 1-8-4V5a3 3 0 0 1 6 0v8a5 5 0 0 1 2 4M7 8v6.17a3 3 0 1 0 2 0V8H7" />
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M19.5 21.5A2.51 2.51 0 0 1 17 19c0-1.67 2.5-4.5 2.5-4.5S22 17.33 22 19a2.51 2.51 0 0 1-2.5 2.5ZM19.5 9.5A2.51 2.51 0 0 1 17 7c0-1.67 2.5-4.5 2.5-4.5S22 5.33 22 7a2.51 2.51 0 0 1-2.5 2.5ZM16 15.5a2.51 2.51 0 0 1-2.5-2.5c0-1.67 2.5-4.5 2.5-4.5s2.5 2.83 2.5 4.5a2.51 2.51 0 0 1-2.5 2.5Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgEnvironmentSlashed'
);
export default SvgEnvironmentSlashed;
