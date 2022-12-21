import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPump = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" opacity={0.01} d="M0 0h24v24H0z" />,
        <path d="M18 12a6 6 0 0 0-5.74-6l3-3-1.43-1.39-6.11 6.11a6 6 0 0 0 4 10.23l-3 3 1.42 1.41 6.11-6.11A6 6 0 0 0 18 12Zm-6 4a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
    ),
    'SvgPump'
);
export default SvgPump;
