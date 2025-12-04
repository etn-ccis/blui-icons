import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgCostCircled = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11.41 8v-1.91c1.74-.33 3.11-1.33 3.12-3.16 0-2.52-2.16-3.39-4.18-3.91-2.02-.52-2.67-1.07-2.67-1.91 0-.96.9-1.64 2.4-1.64 1.58 0 2.17.76 2.22 1.87h1.96c-.06-1.53-.99-2.94-2.85-3.39V4h-2.67v1.93c-1.72.37-3.11 1.49-3.11 3.21 0 2.05 1.7 3.07 4.18 3.67 2.23.53 2.67 1.31 2.67 2.14 0 .61-.44 1.59-2.4 1.59-1.83 0-2.55-.82-2.65-1.87H7.47c.11 1.94 1.56 3.04 3.27 3.4V20h2.67Z"
            fill="#fff"
        />
    ),
    'SvgCostCircled'
);
export default SvgCostCircled;
