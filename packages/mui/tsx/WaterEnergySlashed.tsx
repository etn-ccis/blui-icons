import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgWaterEnergySlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="water_energy_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#water_energy_slashed_svg__a)">
            <path d="M11 18h1l4-6h-3V8h-1l-4 6h3v4Zm1 4c-2.283 0-4.188-.783-5.713-2.35C4.763 18.083 4 16.133 4 13.8c0-1.667.662-3.48 1.987-5.438C7.313 6.405 9.317 4.284 12 2c2.683 2.283 4.688 4.404 6.012 6.363C19.337 10.32 20 12.133 20 13.8c0 2.333-.762 4.283-2.288 5.85C16.188 21.217 14.283 22 12 22Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgWaterEnergySlashed'
);
export default SvgWaterEnergySlashed;
