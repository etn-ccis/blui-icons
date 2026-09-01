import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMultimeterSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="multimeter_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#multimeter_slashed_svg__a)">
            <path d="m5.78 11.84 3.38 3.38c-.35.18-.74.28-1.16.28A2.5 2.5 0 0 1 5.5 13c0-.42.1-.81.28-1.16ZM8 10.5c-.42 0-.81.1-1.16.28l3.38 3.38c.18-.35.28-.74.28-1.16A2.5 2.5 0 0 0 8 10.5Zm5.41-7.91c.38.37.59.88.59 1.41v16c0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59H4c-.53 0-1.04-.21-1.41-.59C2.21 21.04 2 20.53 2 20V4c0-.53.21-1.04.59-1.41C2.96 2.21 3.47 2 4 2h8c.53 0 1.04.21 1.41.59ZM6 19c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1Zm3 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1Zm3 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1Zm0-6c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4Zm0-9H4v3h8V4Zm7 2h-1l-1-4-1 4h-1v1h1v13h2V7h1V6Zm2 2-1-4-1 4v14h2V9h1V8h-1Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgMultimeterSlashed'
);
export default SvgMultimeterSlashed;
