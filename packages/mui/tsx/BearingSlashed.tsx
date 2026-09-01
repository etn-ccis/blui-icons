import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBearingSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="bearing_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#bearing_slashed_svg__a)">
            <g fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5.67 15.64a1.5 1.5 0 1 0-2.13 0 1.49 1.49 0 0 0 2.13 0 8 8 0 0 1-11.28 0 1.5 1.5 0 1 0 0-2.13 1.49 1.49 0 0 0 0 2.13 8 8 0 0 1 0-11.28 1.5 1.5 0 1 0 2.13 0 1.49 1.49 0 0 0-2.13 0 8 8 0 0 1 11.28 0 1.5 1.5 0 1 0 0 2.13 1.49 1.49 0 0 0 0-2.13 8 8 0 0 1 0 11.28Z" />
                <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
                <circle cx={12} cy={5.5} r={1.5} />
                <circle cx={12} cy={18.5} r={1.5} />
                <circle cx={5.5} cy={12} r={1.5} />
                <circle cx={18.5} cy={12} r={1.5} />
            </g>
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBearingSlashed'
);
export default SvgBearingSlashed;
