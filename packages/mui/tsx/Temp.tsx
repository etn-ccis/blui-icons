import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTemp = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M17 17a5 5 0 1 1-8-4V5a3 3 0 0 1 6 0v8a5 5 0 0 1 2 4m-6-9v6.17a3 3 0 1 0 2 0V8h-2" />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgTemp'
);
export default SvgTemp;
