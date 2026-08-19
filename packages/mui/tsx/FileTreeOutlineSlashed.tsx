import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgFileTreeOutlineSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="file_tree_outline_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#file_tree_outline_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 8H8.5v2H13V8h7v6h-7v-2H8.5v6H13v-2h7v6h-7v-2H6.5V8H4V2h7v6Zm4 12h3v-2h-3v2Zm0-8h3v-2h-3v2ZM6 6h3V4H6v2Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgFileTreeOutlineSlashed'
);
export default SvgFileTreeOutlineSlashed;
