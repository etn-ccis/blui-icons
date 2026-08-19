import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgFactorySlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="factory_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#factory_slashed_svg__a)">
            <path d="M4 18v2h4v-2H4m0-4v2h10v-2H4m6 4v2h4v-2h-4m6-4v2h4v-2h-4m0 4v2h4v-2h-4M2 22V8l5 4V8l5 4V8l5 4 1-10h3l1 10v10H2z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgFactorySlashed'
);
export default SvgFactorySlashed;
