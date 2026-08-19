import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgUtilityDisabledSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="utility_disabled_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#utility_disabled_slashed_svg__a)">
            <path
                d="m13.8 8 .75 2h-1.72l2 2h.49l.08.2-.22.15 4.06 4.07-2.31-5.79L15.94 8H18v2h2V6h-4.81l-1.5-4h-3.38L8.82 5.99 10.83 8h2.97Zm-2.12-4h.62l.75 2h-2.11l.74-2ZM2.81 2.81 1.4 4.22 4 6.83V10h2V8.83l1.26 1.26-4.2 10.54 1.48 1.2 7.45-5 6.12 4.11 1.67 1.67 1.41-1.42L2.81 2.81Zm3.31 15.57 1.72-4.29 2.36 1.58-4.08 2.71ZM8.6 12.2l.08-.2h.49l1.73 1.73-2.3-1.53Z"
                fillRule="evenodd"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgUtilityDisabledSlashed'
);
export default SvgUtilityDisabledSlashed;
