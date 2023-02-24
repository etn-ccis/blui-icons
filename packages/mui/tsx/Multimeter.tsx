import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMultimeter = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M9.156 15.217a2.5 2.5 0 0 1-3.373-3.373l3.373 3.373ZM10.217 14.156l-3.373-3.373a2.5 2.5 0 0 1 3.373 3.373Z" />,
        <path
            clipRule="evenodd"
            d="M4 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 5V4H4v3h8ZM5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />,
        <path d="M18 6h1v1h-1v13h-2V7h-1V6h1l1-4 1 4ZM22 8h-1l-1-4-1 4v14h2V9h1V8Z" />
    ),
    'SvgMultimeter'
);
export default SvgMultimeter;
