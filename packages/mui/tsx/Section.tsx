import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSection = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12Zm-5 5a1 1 0 0 1-1 1H6v8h12V6h-5v3ZM6 8h5V6H6v2Z"
        />
    ),
    'SvgSection'
);
export default SvgSection;
