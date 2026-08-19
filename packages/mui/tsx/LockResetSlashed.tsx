import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgLockResetSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="lock_reset_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#lock_reset_slashed_svg__a)">
            <path d="M13.16 3.17a8.83 8.83 0 1 1-7.4 13.63l1.4-1.11a7.05 7.05 0 1 0-1-4.57H8.6l-3.3 3.29L2 11.12h2.38a8.83 8.83 0 0 1 8.78-7.95m2.57 7.21a.81.81 0 0 1 .81.81v3.9a.82.82 0 0 1-.82.82H11a.79.79 0 0 1-.75-.82V11a.79.79 0 0 1 .74-.81v-.73a2.39 2.39 0 0 1 2.71-2.37 2.47 2.47 0 0 1 2.1 2.48v.81m-1.11-.84A1.22 1.22 0 0 0 14 8.4a1.29 1.29 0 0 0-1.86 1.09v.89h2.57Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgLockResetSlashed'
);
export default SvgLockResetSlashed;
