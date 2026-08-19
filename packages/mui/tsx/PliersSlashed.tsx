import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPliersSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="pliers_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#pliers_slashed_svg__a)">
            <path d="M9.4 12.2s2.3 3.1 4.4 5.2c.9.9 1.8 1.5 2.5 2 .8.5 1 1.6.3 2.3-.4.4-1.1.6-1.6.3-.8-.4-2-1.2-3.3-2.4-2.1-2.1-4.4-5.2-4.4-5.2l2.1-2.2Zm2.8-2.8s3.1 2.3 5.2 4.4c.9.9 1.5 1.8 2 2.5.5.8 1.6 1 2.3.3.4-.4.6-1.1.3-1.6-.4-.8-1.2-2-2.4-3.3-2.1-2.1-5.2-4.4-5.2-4.4l-2.2 2.1Zm-1.8-3.9L7.6 2.7 4.1 2l-.5.5 2.3 2.3c.5-.1 1 0 1.4.4.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.4-1.5L2.5 3.6l-.5.5.7 3.5 2.8 2.8 1.4 2.8 1.9-1.9-1-1.8 1.6-1.6 1.9.9 1.9-1.9-2.8-1.4Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgPliersSlashed'
);
export default SvgPliersSlashed;
