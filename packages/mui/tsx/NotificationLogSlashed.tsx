import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgNotificationLogSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="notification_log_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#notification_log_slashed_svg__a)">
            <path d="M16 2H8a2 2 0 0 0-2 2h9v5h5v11H6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
            <path d="m11.325 14.488 1.366 1.334v.672H2v-.672l1.355-1.334V11.16A4.055 4.055 0 0 1 6.36 6.953v-.456a.998.998 0 1 1 1.995 0v.456a4.066 4.066 0 0 1 2.97 4.207v3.328ZM8.267 18.11a1.334 1.334 0 0 1-2.277-.944h2.667c0 .354-.14.693-.39.943Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgNotificationLogSlashed'
);
export default SvgNotificationLogSlashed;
