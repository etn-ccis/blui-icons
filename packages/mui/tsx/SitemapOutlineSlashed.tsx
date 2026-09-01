import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSitemapOutlineSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="sitemap_outline_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#sitemap_outline_slashed_svg__a)">
            <path d="M21 16v-3c0-1.11-.89-2-2-2h-6V8h2V2H9v6h2v3H5c-1.11 0-2 .89-2 2v3H1v6h6v-6H5v-3h6v3H9v6h6v-6h-2v-3h6v3h-2v6h6v-6h-2ZM11 4h2v2h-2V4ZM5 20H3v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSitemapOutlineSlashed'
);
export default SvgSitemapOutlineSlashed;
