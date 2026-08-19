import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMaintenanceSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="maintenance_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#maintenance_slashed_svg__a)">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5.75 14.59-1.25 1.25a.54.54 0 0 1-.76 0l-5-4.95a3.54 3.54 0 0 1-4.4-4.83l2.39 2.33 1.63-1.63L8 6.43a3.6 3.6 0 0 1 4 .7 3.49 3.49 0 0 1 .82 3.75l4.94 4.95a.49.49 0 0 1-.01.76Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgMaintenanceSlashed'
);
export default SvgMaintenanceSlashed;
