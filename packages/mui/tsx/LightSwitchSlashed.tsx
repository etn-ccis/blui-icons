import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgLightSwitchSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="light_switch_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#light_switch_slashed_svg__a)">
            <path d="M18.41 1.59A2 2 0 0 0 17 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-.59-1.41ZM17 21H7V3h10Z" />
            <path d="M15 6H9v12h6Zm-2 10h-2v-3h2Zm0-5h-2V8h2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgLightSwitchSlashed'
);
export default SvgLightSwitchSlashed;
