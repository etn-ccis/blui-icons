import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgProtocolSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="protocol_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#protocol_slashed_svg__a)">
            <path
                d="M15 19a1 1 0 0 0-1-1h-1v-1h3a2 2 0 0 0 2-2V8l-5-5H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3v1h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2ZM12 4.5 16.5 9H12Z"
                fillRule="evenodd"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgProtocolSlashed'
);
export default SvgProtocolSlashed;
