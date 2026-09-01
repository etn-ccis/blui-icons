import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgVideoAlertSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="video_alert_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#video_alert_slashed_svg__a)">
            <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4ZM10.001 15a.61.61 0 0 1-.61-.62h1.23a.622.622 0 0 1-.62.62Zm2.46-.92h-4.92v-.31l.62-.62v-1.53a1.87 1.87 0 0 1 1.38-1.95v-.21a.47.47 0 0 1 .46-.46.46.46 0 0 1 .46.46v.21a1.88 1.88 0 0 1 1.39 1.95v1.53l.61.62v.31Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgVideoAlertSlashed'
);
export default SvgVideoAlertSlashed;
