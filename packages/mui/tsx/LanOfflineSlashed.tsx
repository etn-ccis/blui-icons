import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgLanOfflineSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="lan_offline_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#lan_offline_slashed_svg__a)">
            <path d="M16 2v7h-3v2h5v2.563l-.025.023-.975.974-.975-.974-.025-.024V13H8v2h3v7H3v-7h3v-4h5V9H8V2h8Z" />
            <path d="M19.389 15 17 17.389 14.611 15 13 16.611 15.389 19 13 21.389 14.611 23 17 20.623 19.389 23 21 21.389 18.623 19 21 16.611 19.389 15Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgLanOfflineSlashed'
);
export default SvgLanOfflineSlashed;
