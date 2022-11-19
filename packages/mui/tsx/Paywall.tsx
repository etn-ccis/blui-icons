import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPaywall = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M14 6a7.17 7.17 0 0 0-1 .08 4.49 4.49 0 0 0-9 .42V7a2 2 0 0 0-2 2v9a1.94 1.94 0 0 0 2 2h4.73A8 8 0 1 0 14 6Zm-8 .5a2.51 2.51 0 0 1 5-.24V7H6ZM14 20a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm-1.5-8v1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H15v1h-2v-1h-2.5v-2h5v-1h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1H13V9h2v1h2.5v2Z" />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgPaywall'
);
export default SvgPaywall;
