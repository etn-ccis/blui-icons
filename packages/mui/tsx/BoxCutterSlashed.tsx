import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBoxCutterSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="box_cutter_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#box_cutter_slashed_svg__a)">
            <path d="M7.22 11.91c-.33.33-.51.74-.56 1.17l5.51 2.36 8.49-8.48c.78-.79.78-2.05 0-2.83l-1.42-1.42c-.78-.78-2.04-.78-2.83 0l-9.19 9.2ZM5 16v5.75l5.81-5.22-5-2L5 16ZM17.12 4.83c.38-.39 1.03-.39 1.42 0 .39.4.39 1.03 0 1.42-.39.39-1.04.39-1.42 0-.39-.39-.39-1.02 0-1.42Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBoxCutterSlashed'
);
export default SvgBoxCutterSlashed;
