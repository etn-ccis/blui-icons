import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBoxingGloveSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="boxing_glove_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#boxing_glove_slashed_svg__a)">
            <path d="M19 16V6h3v10h-3M12 4H7S2 4 2 8v6a3.54 3.54 0 0 0 2.07 3.31A4 4 0 0 1 8 14h3v2H8a2 2 0 0 0 0 4h5c4 0 4-4 4-4V6s-1-2-5-2Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBoxingGloveSlashed'
);
export default SvgBoxingGloveSlashed;
