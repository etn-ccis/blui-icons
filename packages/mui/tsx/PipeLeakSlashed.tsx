import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPipeLeakSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pipe_leak_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pipe_leak_slashed_svg__a)">
            <path d="M2 5v8h2v-2h6l2-2-2-2H4V5H2m18 0v2h-8l2 2-2 2h8v2h2V5h-2m-8 8s-2 2.17-2 3.5a2 2 0 0 0 2 2 2 2 0 0 0 2-2c0-1.33-2-3.5-2-3.5Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPipeLeakSlashed'
);
export default SvgPipeLeakSlashed;
