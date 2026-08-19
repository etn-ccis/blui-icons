import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgHeatShrinkTubeSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="heat_shrink_tube_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#heat_shrink_tube_slashed_svg__a)">
            <path d="M12 2c-1.93 0-4 .53-4 2v16c0 1.47 2.07 2 4 2 1.93 0 4-.53 4-2V4c0-1.47-2.07-2-4-2Zm0 2.67c-1.1 0-2-.3-2-.67 0-.37.9-.67 2-.67s2 .3 2 .67c0 .37-.9.67-2 .67Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgHeatShrinkTubeSlashed'
);
export default SvgHeatShrinkTubeSlashed;
