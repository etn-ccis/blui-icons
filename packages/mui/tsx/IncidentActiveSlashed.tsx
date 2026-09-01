import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgIncidentActiveSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="incident_active_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#incident_active_slashed_svg__a)">
            <path d="M0 0h24v24H0Z" fill="none" />
            <path d="M3 12a6 6 0 0 1 4-5.65V4.26a8 8 0 0 0 0 15.48v-2.09A6 6 0 0 1 3 12Z" />
            <path d="M15 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm-2.77 2.79.71.71a3.46 3.46 0 0 0-1.44 2.81h-1a4.49 4.49 0 0 1 1.73-3.52ZM15 17a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1Zm4-2h-8v-1l1.33-1v-2.33A2.66 2.66 0 0 1 14 8.2V8a1 1 0 0 1 2 0v.2a2.66 2.66 0 0 1 1.67 2.47V13L19 14Zm-.5-4.69a3.46 3.46 0 0 0-1.44-2.81l.71-.71a4.49 4.49 0 0 1 1.73 3.52Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgIncidentActiveSlashed'
);
export default SvgIncidentActiveSlashed;
