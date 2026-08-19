import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBalaclavaSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="balaclava_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#balaclava_slashed_svg__a)">
            <path d="M19.71 19.75A101.716 101.716 0 0 1 19 9 7 7 0 0 0 5 9a101.732 101.732 0 0 1-.71 10.75 2 2 0 0 0 2 2.25h11.43a2 2 0 0 0 1.99-2.25ZM12 14c-2.76 0-5-1.34-5-3s2.24-3 5-3 5 1.34 5 3-2.24 3-5 3Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBalaclavaSlashed'
);
export default SvgBalaclavaSlashed;
