import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGloveSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="glove_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#glove_slashed_svg__a)">
            <path d="M12.997 2a1 1 0 1 0-2 0v9h-1V4a1 1 0 0 0-2 0v9.5h-.5c-.333-1-1.1-3.1-1.5-3.5-.5-.5-1-.5-1.5-.5s-1 .5-.5 1.5c.294.81.64 1.918.97 2.972.417 1.334.807 2.581 1.03 3.028.4.8 1.5 2 2 2.5V22a1 1 0 0 0 1 1h6a2 2 0 0 0 2-2v-1H12v-1h4.997c1-.5 2-2 2-6V6a1 1 0 1 0-2 0v5h-1V3a1 1 0 1 0-2 0v8h-1V2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgGloveSlashed'
);
export default SvgGloveSlashed;
