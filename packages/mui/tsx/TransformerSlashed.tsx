import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTransformerSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="transformer_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#transformer_slashed_svg__a)">
            <path d="M8 2H7v2h1c.7 0 1.2.6 1.2 1.2S8.7 6.5 8 6.5H7v2h1c.7 0 1.2.6 1.2 1.2S8.7 11 8 11H3v2h5c.7 0 1.2.6 1.2 1.2s-.5 1.3-1.2 1.3H7v2h1c.7 0 1.2.6 1.2 1.2S8.7 20 8 20H7v2h1c1.8 0 3.2-1.5 3.2-3.2 0-.9-.4-1.7-.9-2.2.6-.6.9-1.4.9-2.2 0-.8-.4-1.7-.9-2.2.6-.6.9-1.4.9-2.2 0-.8-.4-1.7-.9-2.2.6-.6.9-1.4.9-2.2C11.2 3.5 9.8 2 8 2ZM16 13h5v-2h-5c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h1v-2h-1c-.7 0-1.2-.6-1.2-1.2S15.3 4 16 4h1V2h-1c-1.8 0-3.2 1.5-3.2 3.2 0 .9.4 1.7.9 2.2-.6.6-.9 1.4-.9 2.2 0 .8.4 1.7.9 2.2-.6.6-.9 1.4-.9 2.2 0 .8.4 1.7.9 2.2-.6.6-.9 1.4-.9 2.2 0 1.8 1.5 3.2 3.2 3.2h1v-2h-1c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h1v-2h-1c-.7 0-1.2-.6-1.2-1.2s.5-1 1.2-1Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTransformerSlashed'
);
export default SvgTransformerSlashed;
