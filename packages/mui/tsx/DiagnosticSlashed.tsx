import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDiagnosticSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="diagnostic_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#diagnostic_slashed_svg__a)">
            <path
                d="M15.5 14h-.8l-.3-.3A6.26 6.26 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16a6.26 6.26 0 0 0 4.2-1.6l.3.3v.8l5 5 1.5-1.5Zm-6-9a4.48 4.48 0 0 1 4.39 3.5h-2.43l-1.07 1.6L8.22 6 6.91 8.5h-1.8A4.48 4.48 0 0 1 9.5 5Zm0 9A4.48 4.48 0 0 1 5 10h2.82l.41-.78 2 3.79 2-3H14A4.47 4.47 0 0 1 9.5 14Z"
                fillRule="evenodd"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDiagnosticSlashed'
);
export default SvgDiagnosticSlashed;
