import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDistanceApartSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="distance_apart_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#distance_apart_slashed_svg__a)">
            <path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 11.43V12h8v-.57ZM18 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 11.43V12h8v-.57ZM19 19v-2.01L5 17v2l-3-3 3-3v2.01L19 15v-2l3 3-3 3Z" />
        </g>,
        <path data-name="slash-overlay" d="M2.22 2.21.8 3.63l19.6 19.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDistanceApartSlashed'
);
export default SvgDistanceApartSlashed;
