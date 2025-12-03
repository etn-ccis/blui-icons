import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgViewSidebar = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <g clipPath="url(#view_sidebar_svg__a)">
            <path
                d="M2 4v16h20V4H2Zm18 4.67h-2.5V6H20v2.67Zm-2.5 2H20v2.67h-2.5v-2.67ZM4 6h11.5v12H4V6Zm13.5 12v-2.67H20V18h-2.5Z"
                fill="#727E84"
            />
        </g>,
        <defs>
            <clipPath id="view_sidebar_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    ),
    'SvgViewSidebar'
);
export default SvgViewSidebar;
