import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgWaterOutlineSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="water_outline_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#water_outline_slashed_svg__a)">
            <path d="M12 6.36c2 2.58 4 5.87 4 7.64a4 4 0 0 1-8 0c0-1.77 2-5.06 4-7.64m0-3.16S6 10 6 14a6 6 0 0 0 12 0c0-4-6-10.8-6-10.8Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgWaterOutlineSlashed'
);
export default SvgWaterOutlineSlashed;
