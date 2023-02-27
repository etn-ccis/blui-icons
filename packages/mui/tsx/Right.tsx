import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgRight = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M11 9h3v2h-3V9Z" />,
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9 7h5a2 2 0 0 1 2 2v2a2 2 0 0 1-1.615 1.963L16 17h-2l-1.5-4H11v4H9V7Z"
        />
    ),
    'SvgRight'
);
export default SvgRight;
