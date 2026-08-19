import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPieChart05Slashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pie_chart_05_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pie_chart_05_slashed_svg__a)">
            <path d="M12 4a8 8 0 1 1-8 8 8 8 0 0 1 8-8m0-2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 12 8.91 2.49A9.56 9.56 0 0 1 12 2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPieChart05Slashed'
);
export default SvgPieChart05Slashed;
