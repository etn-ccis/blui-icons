import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSchemaOutlineSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="schema_outline_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#schema_outline_slashed_svg__a)">
            <path d="M4 23v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v2h3V9h7v6h-7v-2h-3v2H8.5v2H11v6H4Zm2-2h3v-2H6v2Zm0-8h3v-2H6v2Zm10 0h3v-2h-3v2ZM6 5h3V3H6v2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSchemaOutlineSlashed'
);
export default SvgSchemaOutlineSlashed;
