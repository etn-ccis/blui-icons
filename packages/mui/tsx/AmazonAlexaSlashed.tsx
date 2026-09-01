import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgAmazonAlexaSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="amazon_alexa_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#amazon_alexa_slashed_svg__a)">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.57 19.87v-2a1.76 1.76 0 0 0-1.08-1.57 6.83 6.83 0 1 1 9.48-6.3c0 4.43-3.44 8.61-8.4 9.87Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgAmazonAlexaSlashed'
);
export default SvgAmazonAlexaSlashed;
