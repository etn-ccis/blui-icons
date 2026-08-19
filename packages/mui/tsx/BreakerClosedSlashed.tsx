import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBreakerClosedSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="breaker_closed_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#breaker_closed_slashed_svg__a)">
            <path d="M16.226 16c-.187-.755-.872-1.645-1.631-2.18a4.507 4.507 0 0 0-5.19 0c-.759.535-1.286 1.186-1.63 2.18H1v-1.995h4.36a7.508 7.508 0 0 1 10.969-2.632c1.266.893 1.99 1.957 2.311 2.632H23V16h-6.774Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBreakerClosedSlashed'
);
export default SvgBreakerClosedSlashed;
