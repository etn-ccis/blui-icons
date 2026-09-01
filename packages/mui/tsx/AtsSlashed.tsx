import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgAtsSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="ats_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#ats_slashed_svg__a)">
            <path
                d="M19.8 11A2.91 2.91 0 0 0 17 9a3 3 0 0 0-2 .74L11 7.5a2.74 2.74 0 0 0 0-.5 3 3 0 0 0-3-3 2.91 2.91 0 0 0-2.8 2H2v2h3.2A2.91 2.91 0 0 0 8 10a3 3 0 0 0 2-.74l4 2.24a2.74 2.74 0 0 0 0 .5 3 3 0 0 0 3 3 2.91 2.91 0 0 0 2.8-2H22v-2ZM8 8a.94.94 0 0 1-1-1 .94.94 0 0 1 1-1 .94.94 0 0 1 1 1 .94.94 0 0 1-1 1Zm9 5a1 1 0 1 1 1-1 .94.94 0 0 1-1 1Zm-9 1a2.91 2.91 0 0 0-2.8 2H2v2h3.2A2.91 2.91 0 0 0 8 20a3 3 0 0 0 0-6Zm0 4a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z"
                fillRule="evenodd"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgAtsSlashed'
);
export default SvgAtsSlashed;
