import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgUnlockLevel1Slashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="unlock_level_1_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#unlock_level_1_slashed_svg__a)">
            <path d="M12 1c2.76 0 5 2.24 5 5v2h1c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h9V6c0-1.66-1.34-3-3-3S9 4.34 9 6H7c0-2.76 2.24-5 5-5Zm-.071 10.505-2.575 2.097 1.051 1.292.852-.703a6.091 6.091 0 0 0 .472-.482c-.01.178-.019.377-.026.6-.003.222-.006.425-.006.61V19h2.057v-7.495h-1.825Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgUnlockLevel1Slashed'
);
export default SvgUnlockLevel1Slashed;
