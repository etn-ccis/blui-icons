import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGradeCSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="grade_c_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#grade_c_slashed_svg__a)">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm.88 13.32a7.73 7.73 0 0 0 2.55-.53v1.78a7.09 7.09 0 0 1-2.75.51 4.19 4.19 0 0 1-3.33-1.32A5.61 5.61 0 0 1 8.19 12a6.23 6.23 0 0 1 .57-2.73 4.05 4.05 0 0 1 1.63-1.79 4.8 4.8 0 0 1 2.49-.63 6.73 6.73 0 0 1 2.93.7l-.69 1.73A10.67 10.67 0 0 0 14 8.77a3.44 3.44 0 0 0-1.12-.2 2.15 2.15 0 0 0-1.85.9 4.18 4.18 0 0 0-.66 2.53c0 2.21.84 3.32 2.51 3.32Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgGradeCSlashed'
);
export default SvgGradeCSlashed;
