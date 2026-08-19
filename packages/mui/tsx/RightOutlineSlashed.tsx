import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgRightOutlineSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="right_outline_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#right_outline_slashed_svg__a)">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Zm2-13H9v10h2v-4h1.5l1.5 4h2l-1.61-4.04c.92-.18 1.61-.99 1.61-1.96V9c0-1.1-.9-2-2-2Zm0 4h-3V9h3v2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgRightOutlineSlashed'
);
export default SvgRightOutlineSlashed;
