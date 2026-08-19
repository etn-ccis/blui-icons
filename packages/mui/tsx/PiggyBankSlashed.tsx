import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPiggyBankSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="piggy_bank_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#piggy_bank_slashed_svg__a)">
            <path d="M13 1c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3m7 13c0-2.4-1.8-4.4-4.5-5.4-.5.8-1.4 1.4-2.5 1.4-1.2 0-2.3-.8-2.8-1.8-.2 0-.5.1-.7.1L7 7v2.3c-1.5.9-2.6 2.2-2.9 3.7H2v4h3.1c.5.6 1.2 1.2 1.9 1.7V22h2v-2.4c.9.3 1.9.4 3 .4s2.1-.2 3-.4V22h2v-3.3c1.1-.7 2-1.6 2.5-2.7H22v-2h-2M7 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPiggyBankSlashed'
);
export default SvgPiggyBankSlashed;
