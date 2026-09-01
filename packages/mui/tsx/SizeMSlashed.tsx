import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSizeMSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="size_m_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#size_m_slashed_svg__a)">
            <path d="M10.286 18.75 7.658 9.495H7.58c.024.24.047.566.07.976.03.41.056.852.08 1.327.023.475.035.931.035 1.37v5.582H4.687V5.9h4.624l2.68 9.123h.07L14.69 5.9h4.631v12.85h-3.19v-5.634c0-.404.006-.838.017-1.3l.053-1.319c.024-.416.044-.744.062-.984h-.08l-2.592 9.237h-3.305Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSizeMSlashed'
);
export default SvgSizeMSlashed;
