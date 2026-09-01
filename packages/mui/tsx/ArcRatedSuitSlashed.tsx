import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgArcRatedSuitSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="arc_rated_suit_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#arc_rated_suit_slashed_svg__a)">
            <path d="M12 2H9.25a1.33 1.33 0 0 0-.87.35L1.75 9l1.78 1.76L8 6.26V22h3v-9h2v9h3V6.26l4.47 4.49L22.25 9l-6.63-6.65a1.31 1.31 0 0 0-.87-.35H12Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgArcRatedSuitSlashed'
);
export default SvgArcRatedSuitSlashed;
