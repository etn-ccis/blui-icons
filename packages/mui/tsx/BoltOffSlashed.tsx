import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBoltOffSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="bolt_off_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#bolt_off_slashed_svg__a)">
            <path d="m13.791 16.071 4.917 4.917 1.402-1.403L4.402 3.878 3 5.28l5.537 5.537-1.364 2.403c-.02.04.12-.22-.07.12-.19.34-.2.66.38.66h3.5l-1 7h1s.934-1.644 2.808-4.929ZM16.883 10.66l-1.03 1.803L13.388 10h3.094c.49 0 .56.33.47.51l-.07.15ZM13.983 3l-.95 6.645-2.44-2.442L12.982 3h1Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBoltOffSlashed'
);
export default SvgBoltOffSlashed;
