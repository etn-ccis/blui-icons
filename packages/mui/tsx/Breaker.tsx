import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgBreaker = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" opacity={0.01} d="M0 0h24v24H0z" />,
        <path d="M1 14h6v2H1zM17 14h6v2h-6zM16.24 12.5a4.5 4.5 0 0 0-8.48 0l-2.83-1a7.5 7.5 0 0 1 14.14 0Z" />
    ),
    'SvgBreaker'
);
export default SvgBreaker;
