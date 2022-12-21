import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgHealth = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" opacity={0.01} d="M0 0h24v24H0z" />,
        <path d="M17.5 13.5h-4v4h-3v-4h-4v-3h4v-4h3v4h4ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
    ),
    'SvgHealth'
);
export default SvgHealth;
