import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDoubleTriangleSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="double_triangle_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#double_triangle_slashed_svg__a)">
            <path d="M20.5 16 12 1 3.5 16h3.97L3.5 23h17l-3.97-7h3.97ZM17 21H7l2.78-5L12 12l2.22 4L17 21ZM12 8l-3.4 6H7l5-9 5 9h-1.6L12 8Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDoubleTriangleSlashed'
);
export default SvgDoubleTriangleSlashed;
