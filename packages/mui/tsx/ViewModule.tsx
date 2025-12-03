import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgViewModule = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <g clipPath="url(#view_module_svg__a)">
            <path
                d="M3 5v14h18V5H3Zm16 6h-3.33V7H19v4Zm-5.33 0h-3.33V7h3.33v4ZM8.33 7v4H5V7h3.33ZM5 17v-4h3.33v4H5Zm5.33 0v-4h3.33v4h-3.33Zm5.34 0v-4H19v4h-3.33Z"
                fill="#727E84"
            />
        </g>,
        <defs>
            <clipPath id="view_module_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    ),
    'SvgViewModule'
);
export default SvgViewModule;
