import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGradeASlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="grade_a_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#grade_a_slashed_svg__a)">
            <path d="m12 8.53-1.29 4.33h2.61L12 8.53Z" />
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm2.55 15-.73-2.38h-3.64L9.45 17H7.17L10.7 7h2.59l3.54 10h-2.28Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgGradeASlashed'
);
export default SvgGradeASlashed;
