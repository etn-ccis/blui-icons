import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPushNotification = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" d="M0 0h24v24H0z" />,
        <g fill="currentColor">
            <circle cx={18} cy={6} r={3} />
            <path d="M17 10.9V19H5V7h8.1a5.47 5.47 0 0 1-.1-1 5.47 5.47 0 0 1 .1-1H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.1a5.05 5.05 0 0 1-2 0Z" />
        </g>
    ),
    'SvgPushNotification'
);
export default SvgPushNotification;
