import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgOutletSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="outlet_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#outlet_slashed_svg__a)">
            <path d="M8 7h2v5H8ZM4.22 2h15.56A2.23 2.23 0 0 1 22 4.22v15.56A2.22 2.22 0 0 1 19.78 22H4.22A2.23 2.23 0 0 1 2 19.78V4.22A2.22 2.22 0 0 1 4.22 2ZM12 4a8 8 0 1 0 5.66 2.34A8 8 0 0 0 12 4Zm2 3.5h2v4h-2Zm-3.5 8.75a1.5 1.5 0 0 1 3 0V17h-3Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgOutletSlashed'
);
export default SvgOutletSlashed;
