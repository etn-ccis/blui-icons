import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPpeLevelSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="ppe_level_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#ppe_level_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2 1 21h22L12 2Zm-2 6h3l-2 5 4-2-2 6h1l-2 3-2-3h1l1-3-3 2 1-8Z"
            />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPpeLevelSlashed'
);
export default SvgPpeLevelSlashed;
