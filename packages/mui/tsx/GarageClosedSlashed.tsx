import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGarageClosedSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="garage_closed_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#garage_closed_slashed_svg__a)">
            <path d="M22 9v11h-2v-9H4v9H2V9l10-4 10 4Zm-3 3H5v2h14v-2Zm0 6H5v2h14v-2Zm0-3H5v2h14v-2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgGarageClosedSlashed'
);
export default SvgGarageClosedSlashed;
