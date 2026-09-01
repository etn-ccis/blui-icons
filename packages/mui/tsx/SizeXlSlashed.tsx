import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSizeXlSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="size_xl_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#size_xl_slashed_svg__a)">
            <path d="M13.213 18.75H9.196l-2.505-4.017-2.478 4.017H.284l4.263-6.574L.539 5.9h3.85l2.32 3.973L8.941 5.9h3.964l-4.07 6.548 4.378 6.302ZM14.663 18.75V5.9h3.472v10.046h4.948v2.804h-8.42Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSizeXlSlashed'
);
export default SvgSizeXlSlashed;
