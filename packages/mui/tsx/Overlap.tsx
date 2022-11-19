import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgOverlap = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M9 5a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z" />,
        <path d="M15 5a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z" />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgOverlap'
);
export default SvgOverlap;
