import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgEthernetPortSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="ethernet_port_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#ethernet_port_slashed_svg__a)">
            <path d="M7 15h2v3h2v-3h2v3h2v-3h2v3h2V9h-4V6H9v3H5v9h2v-3ZM4.38 3h15.25A2.37 2.37 0 0 1 22 5.38v14.25A2.37 2.37 0 0 1 19.63 22H4.38A2.37 2.37 0 0 1 2 19.63V5.38C2 4.06 3.06 3 4.38 3Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgEthernetPortSlashed'
);
export default SvgEthernetPortSlashed;
