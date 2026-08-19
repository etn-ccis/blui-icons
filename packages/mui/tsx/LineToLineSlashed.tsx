import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgLineToLineSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="line_to_line_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#line_to_line_slashed_svg__a)">
            <path d="M2.5 17V7h2.1v8.2h4.1V17H2.5zm7.3-2.9v-1.7h3.7v1.7H9.8zm5.5 2.9V7h2.1v8.2h4.1V17h-6.2z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgLineToLineSlashed'
);
export default SvgLineToLineSlashed;
