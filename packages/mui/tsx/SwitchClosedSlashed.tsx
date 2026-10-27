import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSwitchClosedSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="switch_closed_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#switch_closed_slashed_svg__a)">
            <path d="M6 14v-1h12v1h4v2H2v-2h4Z" />
        </g>,
        <path data-name="slash-overlay" d="M2.22 2.21.8 3.63l19.6 19.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSwitchClosedSlashed'
);
export default SvgSwitchClosedSlashed;
