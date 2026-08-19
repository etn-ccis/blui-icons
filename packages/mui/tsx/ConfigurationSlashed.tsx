import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgConfigurationSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="configuration_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#configuration_slashed_svg__a)">
            <path d="M7 3H5v6h2V3Zm12 0h-2v10h2V3ZM3 13h2v8h2v-8h2v-2H3v2Zm12-6h-2V3h-2v4H9v2h6V7Zm-4 14h2V11h-2v10Zm4-6v2h2v4h2v-4h2v-2h-6Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgConfigurationSlashed'
);
export default SvgConfigurationSlashed;
