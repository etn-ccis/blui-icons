import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSchemaSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="schema_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#schema_slashed_svg__a)">
            <path d="M4 23v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v2h3V9h7v6h-7v-2h-3v2H8.5v2H11v6H4Z" />
        </g>,
        <path data-name="slash-overlay" d="M2.22 2.21.8 3.63l19.6 19.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSchemaSlashed'
);
export default SvgSchemaSlashed;
