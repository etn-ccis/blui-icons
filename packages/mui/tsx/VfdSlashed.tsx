import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgVfdSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="vfd_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#vfd_slashed_svg__a)">
            <path d="M16.81 10.39h-.45v3.2h.34a1.24 1.24 0 0 0 1-.41 2 2 0 0 0 .33-1.25 1.79 1.79 0 0 0-.31-1.16 1.16 1.16 0 0 0-.91-.38Z" />
            <path d="M20.27 6H3.73A1.74 1.74 0 0 0 2 7.73v8.54A1.74 1.74 0 0 0 3.73 18h16.54A1.74 1.74 0 0 0 22 16.27V7.73A1.74 1.74 0 0 0 20.27 6ZM8 14.86H6.2L4.34 9.14h1.73L6.85 12a8.09 8.09 0 0 1 .26 1.34c0-.18.06-.41.11-.68s.11-.49.15-.65l.79-2.91h1.73Zm5.86-4.48H12v1.09h1.71v1.24H12v2.15h-1.5V9.14h3.38Zm5 3.7a3 3 0 0 1-2.22.78h-1.82V9.14h2a3 3 0 0 1 2.13.71 2.67 2.67 0 0 1 .74 2 3 3 0 0 1-.81 2.23Z" />
            <path fill="none" opacity={0.01} d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgVfdSlashed'
);
export default SvgVfdSlashed;
