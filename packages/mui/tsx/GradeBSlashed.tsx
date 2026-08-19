import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGradeBSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="grade_b_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#grade_b_slashed_svg__a)">
            <path d="M12 12.59h-1.33v2.61h1.38a2 2 0 0 0 1.3-.34 1.24 1.24 0 0 0 .41-1c0-.86-.59-1.27-1.76-1.27ZM13.15 10.65a1 1 0 0 0 .39-.89.88.88 0 0 0-.42-.82 2.68 2.68 0 0 0-1.33-.25h-1.12v2.22h1.23a2.33 2.33 0 0 0 1.25-.26Z" />
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3 14.18a4.3 4.3 0 0 1-2.69.77H8.55V7h3.12a6 6 0 0 1 3.08.61 2.09 2.09 0 0 1 1 1.92 2.42 2.42 0 0 1-.46 1.47 1.62 1.62 0 0 1-1.12.69v.07a2.21 2.21 0 0 1 1.37.79 2.61 2.61 0 0 1 .46 1.5 2.53 2.53 0 0 1-1 2.13Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgGradeBSlashed'
);
export default SvgGradeBSlashed;
