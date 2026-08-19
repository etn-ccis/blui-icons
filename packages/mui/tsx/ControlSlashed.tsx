import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgControlSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="control_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#control_slashed_svg__a)">
            <path d="M11 4v3h2V4h-2ZM19 15h3v-2h-3v2ZM12 19a5 5 0 0 0 4.172-7.757l-3.465 3.464-1.414-1.414 3.464-3.465A5 5 0 1 0 12 19ZM5 15H2v-2h3v2ZM18.293 6.293l-2 2 1.414 1.414 2-2-1.414-1.414ZM6.293 9.707l-2-2 1.414-1.414 2 2-1.414 1.414Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgControlSlashed'
);
export default SvgControlSlashed;
