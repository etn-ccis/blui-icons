import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSwitchgearSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="switchgear_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#switchgear_slashed_svg__a)">
            <path d="M20 4.5H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2ZM10 11h4v2h-4v-2Zm0 4h4v2.5h-4V15Zm4-6h-4V6.5h4V9ZM4 6.5h4V11H4V6.5ZM4 13h4v4.5H4V13Zm16 4.5h-4V15h4v2.5Zm0-4.5h-4v-2h4v2Zm0-4h-4V6.5h4V9Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSwitchgearSlashed'
);
export default SvgSwitchgearSlashed;
