import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCapacitorSymbolSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="capacitor_symbol_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#capacitor_symbol_slashed_svg__a)">
            <path d="M22 11h-7.4c.1-1.6.5-3.1 1.2-4.6L14 5.5c-2 4-2 8.9 0 12.9l1.8-.9c-.7-1.4-1.1-3-1.2-4.6H22V11ZM9 11H2v2h7v6h2V5H9v6Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgCapacitorSymbolSlashed'
);
export default SvgCapacitorSymbolSlashed;
