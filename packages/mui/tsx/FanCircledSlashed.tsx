import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgFanCircledSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="fan_circled_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#fan_circled_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3.482a8.519 8.519 0 1 0 0 17.037 8.519 8.519 0 0 0 0-17.037ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
            />
            <path d="M12 11.3a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm.35-6.3c3.15 0 3.22 2.499 1.561 3.325a2.352 2.352 0 0 0-1.134 1.729c.335.139.63.358.861.637C16.2 9.291 19 9.844 19 12.35c0 3.15-2.506 3.22-3.325 1.561a2.408 2.408 0 0 0-1.75-1.134c-.14.334-.359.629-.637.861 1.4 2.583.84 5.362-1.666 5.362-3.122 0-3.199-2.506-1.54-3.332a2.423 2.423 0 0 0 1.134-1.715 2.1 2.1 0 0 1-.875-.644C7.758 14.695 5 14.149 5 11.65c0-3.15 2.478-3.227 3.304-1.568a2.373 2.373 0 0 0 1.736 1.127c.135-.337.357-.632.644-.854C9.291 7.8 9.844 5 12.336 5h.014Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgFanCircledSlashed'
);
export default SvgFanCircledSlashed;
