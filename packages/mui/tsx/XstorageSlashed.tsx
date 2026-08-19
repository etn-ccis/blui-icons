import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgXstorageSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="xstorage_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#xstorage_slashed_svg__a)">
            <path d="M0 0h24v24H0Z" fill="none" />
            <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11l3-3V4a2 2 0 0 0-2-2Zm-6 17c-2.76 0-5-3.13-5-7s2.24-7 5-7 5 3.13 5 7-2.24 7-5 7Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgXstorageSlashed'
);
export default SvgXstorageSlashed;
