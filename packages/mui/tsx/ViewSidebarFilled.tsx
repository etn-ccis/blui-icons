import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgViewSidebarFilled = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <g clipPath="url(#view_sidebar_filled_svg__a)">
            <path d="M16 20H2V4h14v16Zm2-12h4V4h-4v4Zm0 12h4v-4h-4v4Zm0-6h4v-4h-4v4Z" fill="#727E84" />
        </g>,
        <defs>
            <clipPath id="view_sidebar_filled_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    ),
    'SvgViewSidebarFilled'
);
export default SvgViewSidebarFilled;
