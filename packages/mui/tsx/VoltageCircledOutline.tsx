import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgVoltageCircledOutline = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M12 4a8 8 0 1 1-8 8 8 8 0 0 1 8-8m0-2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />,
        <path d="M11 11H6v2h5v-2zM18 11h-5v2h5v-2z" />,
        <path d="M16.5 9.5h-2v5h2v-5z" />,
        <path d="M0 0h24v24H0Z" fill="none" />
    ),
    'SvgVoltageCircledOutline'
);
export default SvgVoltageCircledOutline;
