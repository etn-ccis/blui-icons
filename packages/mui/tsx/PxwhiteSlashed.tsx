import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPxwhiteSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pxwhite_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pxwhite_slashed_svg__a)">
            <path d="M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11Zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z" />
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16.71 11a2 2 0 0 0 .29-1 2 2 0 0 0-2-2 2 2 0 0 0-1.6.82A4 4 0 0 0 11 8a4 4 0 0 0-4 4 2 2 0 0 0 0 4h9.5a2.49 2.49 0 0 0 .21-5Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPxwhiteSlashed'
);
export default SvgPxwhiteSlashed;
