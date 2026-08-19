import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPieChartTwotone50Slashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pie_chart_twotone_50_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pie_chart_twotone_50_slashed_svg__a)">
            <path d="M12 12v10a10 10 0 0 1 0-20Z" />
            <path d="M12 12V2a10 10 0 0 1 0 20Z" opacity={0.5} />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPieChartTwotone50Slashed'
);
export default SvgPieChartTwotone50Slashed;
