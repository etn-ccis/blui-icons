import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGlassDividerSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="glass_divider_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#glass_divider_slashed_svg__a)">
            <path d="M4 20V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2M18 4H6v16h12Z" />
            <path d="m7.77 9.91 3.24-3.25 1.06 1.06-3.24 3.25-1.06-1.06M8.184 14.24l5.664-5.663 1.06 1.06-5.663 5.665z" />
            <path fill="none" d="M24 0v24H0V0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgGlassDividerSlashed'
);
export default SvgGlassDividerSlashed;
