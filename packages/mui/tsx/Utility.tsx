import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgUtility = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            d="m20.93 20.63-4-10L15.94 8H18v2h2V6h-4.81l-1.5-4h-3.38l-1.5 4H4v4h2V8h2.06l-1 2.63-4 10 1.48 1.2 7.45-5 7.45 5ZM8.68 12h6.64l.08.2-3.4 2.26-3.4-2.26Zm3-8h.62l.75 2h-2.11Zm2.12 4 .75 2H9.44l.75-2ZM6.12 18.38l1.72-4.29 2.36 1.58Zm7.68-2.71 2.36-1.58 1.72 4.29Z"
            fill="currentColor"
        />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgUtility'
);
export default SvgUtility;
