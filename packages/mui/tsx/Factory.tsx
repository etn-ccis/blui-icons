import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgFactory = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M4 18v2h4v-2H4m0-4v2h10v-2H4m6 4v2h4v-2h-4m6-4v2h4v-2h-4m0 4v2h4v-2h-4M2 22V8l5 4V8l5 4V8l5 4 1-10h3l1 10v10H2z" />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgFactory'
);
export default SvgFactory;
