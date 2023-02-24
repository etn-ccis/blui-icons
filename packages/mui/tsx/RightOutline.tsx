import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgRightOutline = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8Zm0-2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />,
        <path
            clipRule="evenodd"
            d="M14 7H9v10h2v-4h1.5l1.5 4h2l-1.615-4.037A2 2 0 0 0 16 11V9a2 2 0 0 0-2-2Zm0 2h-3v2h3V9Z"
        />
    ),
    'SvgRightOutline'
);
export default SvgRightOutline;
