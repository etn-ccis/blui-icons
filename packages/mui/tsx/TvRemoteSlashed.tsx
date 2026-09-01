import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTvRemoteSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="tv_remote_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#tv_remote_slashed_svg__a)">
            <path d="M9 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h6c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2h-2v2h-2V2H9Zm2 4h2v2h2v2h-2v2h-2v-2H9V8h2V6Zm-2 8h2v2H9v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2H9v-2Zm4 0h2v2h-2v-2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTvRemoteSlashed'
);
export default SvgTvRemoteSlashed;
