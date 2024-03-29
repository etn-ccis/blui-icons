import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGenerator = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.39 14.9a11.67 11.67 0 0 1-1.94.47 12.92 12.92 0 0 1-1.86.13 4.77 4.77 0 0 1-3.71-1.42A5.89 5.89 0 0 1 7.61 12a5.39 5.39 0 0 1 1.48-4 5.61 5.61 0 0 1 4.11-1.5 7.91 7.91 0 0 1 3.18.66L15.63 9a5.44 5.44 0 0 0-2.44-.58 3 3 0 0 0-2.36 1A3.85 3.85 0 0 0 9.94 12a4.28 4.28 0 0 0 .72 2.67 2.46 2.46 0 0 0 2.07.91 7.06 7.06 0 0 0 1.45-.14v-2.21h-2v-1.89h4.24Z" />
    ),
    'SvgGenerator'
);
export default SvgGenerator;
