import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPushNotificationSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="push_notification_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#push_notification_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0z" />
            <g fill="currentColor">
                <circle cx={18} cy={6} r={3} />
                <path d="M17 10.9V19H5V7h8.1a5.47 5.47 0 0 1-.1-1 5.47 5.47 0 0 1 .1-1H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.1a5.05 5.05 0 0 1-2 0Z" />
            </g>
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPushNotificationSlashed'
);
export default SvgPushNotificationSlashed;
