import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgNetworkNoData = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <g clipPath="url(#network_no_data_svg__a)">
            <path
                d="M22 13h-9v9H2L22 2v11Zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41Z"
                fill="#fff"
            />
        </g>,
        <defs>
            <clipPath id="network_no_data_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    ),
    'SvgNetworkNoData'
);
export default SvgNetworkNoData;
