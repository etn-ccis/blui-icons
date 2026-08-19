import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgHammerSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="hammer_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#hammer_slashed_svg__a)">
            <path d="M2 19.63 13.43 8.2l-.71-.7 1.42-1.43L12 3.89c1.2-1.19 3.09-1.19 4.27 0l3.6 3.61-1.42 1.41h2.84l.71.71-3.55 3.59-.71-.71V9.62l-1.47 1.42-.71-.71L4.13 21.76 2 19.63Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgHammerSlashed'
);
export default SvgHammerSlashed;
