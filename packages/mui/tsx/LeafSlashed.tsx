import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgLeafSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="leaf_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#leaf_slashed_svg__a)">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66 1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5a6.22 6.22 0 0 0 1.75 3.75C7 8 17 8 17 8Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgLeafSlashed'
);
export default SvgLeafSlashed;
