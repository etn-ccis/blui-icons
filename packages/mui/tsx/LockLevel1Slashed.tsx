import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgLockLevel1Slashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="lock_level_1_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#lock_level_1_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1c2.76 0 5 2.24 5 5v2h1c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h1V6c0-2.76 2.24-5 5-5Zm-.075 10.148-2.696 2.197 1.101 1.353.892-.736c.075-.068.152-.141.23-.22.082-.079.17-.174.264-.285-.01.186-.02.396-.027.629a41.15 41.15 0 0 0-.005.639V19h2.153v-7.852h-1.912ZM12 3c-1.71 0-3 1.29-3 3v2h6V6c0-1.71-1.29-3-3-3Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgLockLevel1Slashed'
);
export default SvgLockLevel1Slashed;
