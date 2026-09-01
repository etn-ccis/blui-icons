import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGradeFSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="grade_f_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#grade_f_slashed_svg__a)">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.14 6.69H11.5v2.58h3.39V13H11.5v4H9.42V7h5.72Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgGradeFSlashed'
);
export default SvgGradeFSlashed;
