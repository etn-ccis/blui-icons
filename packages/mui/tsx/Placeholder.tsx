import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPlaceholder = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            d="M9 9c1.16 0 2.229.397 3.077 1.06L9.804 14H14a5 5 0 1 1-5-5Zm11 5h-6a4.99 4.99 0 0 0-1.923-3.94L15 5l5 9Z"
            fill="#727E84"
        />
    ),
    'SvgPlaceholder'
);
export default SvgPlaceholder;
