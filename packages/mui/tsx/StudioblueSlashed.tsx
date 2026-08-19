import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgStudioblueSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="studioblue_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#studioblue_slashed_svg__a)">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm2.58 11.91-9.94 4.77 6.57-6-1.76-2.54 9.92-4.81-6.53 6Z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgStudioblueSlashed'
);
export default SvgStudioblueSlashed;
