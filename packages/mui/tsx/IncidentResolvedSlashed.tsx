import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgIncidentResolvedSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="incident_resolved_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#incident_resolved_slashed_svg__a)">
            <path d="M15 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6Z" />
            <path d="M0 0h24v24H0Z" fill="none" />
            <path d="M3 12a6 6 0 0 1 4-5.65V4.26a8 8 0 0 0 0 15.48v-2.09A6 6 0 0 1 3 12ZM17.67 13v-2.33A2.66 2.66 0 0 0 16 8.2V8a1 1 0 0 0-2 0v.2a2.66 2.66 0 0 0-1.67 2.47V13L11 14v1h8v-1ZM15 17a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgIncidentResolvedSlashed'
);
export default SvgIncidentResolvedSlashed;
