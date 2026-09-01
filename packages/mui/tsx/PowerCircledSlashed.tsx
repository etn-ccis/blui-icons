import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPowerCircledSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="power_circled_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#power_circled_slashed_svg__a)">
            <path d="M0 0h24v24H0Z" fill="none" />
            <path d="M12.63 8.69h-1v3h.71a2.36 2.36 0 0 0 1.48-.39 1.36 1.36 0 0 0 .49-1.14 1.44 1.44 0 0 0-.41-1.12 2 2 0 0 0-1.27-.35Z" />
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.48 10.6a4.41 4.41 0 0 1-2.91.86h-.92v3.61H9.5V6.93h3.24a4.29 4.29 0 0 1 2.8.8 2.89 2.89 0 0 1 1 2.36 3.12 3.12 0 0 1-1.06 2.51Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPowerCircledSlashed'
);
export default SvgPowerCircledSlashed;
