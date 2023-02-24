import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDoubleTriangle = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M3.5 16 12 1l8.5 15h-6.278l-1.11-2H17l-5-9-5 9h3.889l-1.111 2H3.5Z" />,
        <path clipRule="evenodd" d="M12 8 3.5 23h17L12 8ZM7 21l5-9 5 9H7Z" />
    ),
    'SvgDoubleTriangle'
);
export default SvgDoubleTriangle;
