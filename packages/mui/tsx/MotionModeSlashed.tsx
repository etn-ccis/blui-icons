import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMotionModeSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="motion_mode_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#motion_mode_slashed_svg__a)">
            <path d="M5 4.85v14.3a10.27 10.27 0 0 1-.8-.9c-.25-.317-.483-.642-.7-.975V6.725c.217-.333.45-.658.7-.975.25-.317.517-.617.8-.9Zm4-2.4v19.1c-.35-.117-.692-.246-1.025-.387A8.878 8.878 0 0 1 7 20.675V3.325c.317-.183.642-.346.975-.488.333-.141.675-.27 1.025-.387Zm7 18.725V2.825c1.767.783 3.208 1.992 4.325 3.625S22 9.933 22 12c0 2.067-.558 3.917-1.675 5.55S17.767 20.392 16 21.175ZM12 22a10.051 10.051 0 0 1-1-.05V2.05a10.078 10.078 0 0 1 3 .15v19.6a10.325 10.325 0 0 1-2 .2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgMotionModeSlashed'
);
export default SvgMotionModeSlashed;
