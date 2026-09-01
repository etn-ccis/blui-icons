import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDepartmentSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="department_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#department_slashed_svg__a)">
            <path d="M16.423 3.34a1 1 0 0 1 .866.5l4.422 7.66a1 1 0 0 1 0 1l-4.422 7.66a1 1 0 0 1-.866.5H7.577a1 1 0 0 1-.866-.5L2.29 12.5a1 1 0 0 1 0-1L6.71 3.84a1 1 0 0 1 .866-.5h8.846Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDepartmentSlashed'
);
export default SvgDepartmentSlashed;
