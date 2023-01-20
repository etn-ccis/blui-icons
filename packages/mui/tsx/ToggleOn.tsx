import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgToggleOn = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M17 7H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />,
        <path d="M0 0h24v24H0Z" fill="none" />
    ),
    'SvgToggleOn'
);
export default SvgToggleOn;
