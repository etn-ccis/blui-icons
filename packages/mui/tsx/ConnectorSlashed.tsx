import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgConnectorSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="connector_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#connector_slashed_svg__a)">
            <path d="M2 19c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 5 16c.233 0 .458.025.675.075.217.05.425.125.625.225l10-10c-.1-.2-.175-.408-.225-.625A2.993 2.993 0 0 1 16 5c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 19 2c.833 0 1.542.292 2.125.875S22 4.167 22 5s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 19 8c-.233 0-.458-.025-.675-.075A2.8 2.8 0 0 1 17.7 7.7l-10 10c.1.2.175.408.225.625.05.217.075.442.075.675 0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 5 22a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 2 19Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgConnectorSlashed'
);
export default SvgConnectorSlashed;
