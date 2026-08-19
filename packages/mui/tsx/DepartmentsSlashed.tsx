import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDepartmentsSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="departments_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#departments_slashed_svg__a)">
            <path d="M5.041 3a1 1 0 0 1 .866-.5h3.846a1 1 0 0 1 .866.5l1.922 3.33a1 1 0 0 1 0 1l-1.922 3.33a1 1 0 0 1-.866.5H5.907a1 1 0 0 1-.866-.5L3.12 7.33a1 1 0 0 1 0-1L5.04 3ZM5.122 13.227a1 1 0 0 1 .866-.5h3.845a1 1 0 0 1 .866.5l1.923 3.33a1 1 0 0 1 0 1l-1.923 3.33a1 1 0 0 1-.866.5H5.988a1 1 0 0 1-.866-.5l-1.923-3.33a1 1 0 0 1 0-1l1.923-3.33ZM14.122 8.227a1 1 0 0 1 .866-.5h3.845a1 1 0 0 1 .866.5l1.923 3.33a1 1 0 0 1 0 1l-1.923 3.33a1 1 0 0 1-.866.5h-3.845a1 1 0 0 1-.866-.5l-1.923-3.33a1 1 0 0 1 0-1l1.923-3.33Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDepartmentsSlashed'
);
export default SvgDepartmentsSlashed;
