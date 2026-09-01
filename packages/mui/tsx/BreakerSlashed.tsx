import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBreakerSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="breaker_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#breaker_slashed_svg__a)">
            <path fill="none" opacity={0.01} d="M0 0h24v24H0z" />
            <path d="M1 14h6v2H1zM17 14h6v2h-6zM16.24 12.5a4.5 4.5 0 0 0-8.48 0l-2.83-1a7.5 7.5 0 0 1 14.14 0Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgBreakerSlashed'
);
export default SvgBreakerSlashed;
