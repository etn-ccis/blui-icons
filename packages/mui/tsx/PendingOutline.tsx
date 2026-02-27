import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPendingOutline = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z" />,
        <path d="M7 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    ),
    'SvgPendingOutline'
);
export default SvgPendingOutline;
