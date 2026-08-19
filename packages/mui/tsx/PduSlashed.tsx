import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPduSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pdu_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pdu_slashed_svg__a)">
            <path d="M22 9H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2ZM3 13H2v-2h1Zm3 0H4v-2h2Zm4 0H8v-2h2Zm4 0h-2v-2h2Zm4 0h-2v-2h2Zm4 0h-2v-2h2Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPduSlashed'
);
export default SvgPduSlashed;
