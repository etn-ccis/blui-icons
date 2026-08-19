import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgAmiGatewaySlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="ami_gateway_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#ami_gateway_slashed_svg__a)">
            <path d="M18 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Zm0-14a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgAmiGatewaySlashed'
);
export default SvgAmiGatewaySlashed;
