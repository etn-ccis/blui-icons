import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPanelLogSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="panel_log_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#panel_log_slashed_svg__a)">
            <path d="M15.991 2H7.979a2.005 2.005 0 0 0-2.003 2h9.013v5h5.008v11H5.976a1.999 1.999 0 0 0 2.003 2h12.018A2.004 2.004 0 0 0 22 20V8l-6.009-6Z" />
            <path d="M13.017 12.46H8.009V18h5.008v-5.54ZM13.017 6H2v5.54h11.017V6ZM7.008 12.46H2V18h5.008v-5.54Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPanelLogSlashed'
);
export default SvgPanelLogSlashed;
