import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDistributionBox = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M8 18h2v3H8v-3ZM12 18h2v3h-2v-3Z" />,
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3h-2v5h2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Zm8 2-3 4h2v3l3-4h-2V7Z"
        />,
        <path d="M19 9h2v3h-2V9ZM4 6h2v3H4V6ZM4 12h2v3H4v-3Z" />
    ),
    'SvgDistributionBox'
);
export default SvgDistributionBox;
