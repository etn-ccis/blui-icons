import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgViewSidebarSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="view_sidebar_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#view_sidebar_slashed_svg__a)">
            <path d="M18 8V4h2a2 2 0 0 1 2 2v2h-4Zm0 6v-4h4v4h-4ZM4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v16H4Zm14 0v-4h4v2a2 2 0 0 1-2 2h-2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgViewSidebarSlashed'
);
export default SvgViewSidebarSlashed;
