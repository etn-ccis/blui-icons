import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgGlassDivider = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M4 20V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2M18 4H6v16h12Z" />,
        <path d="m7.77 9.91 3.24-3.25 1.06 1.06-3.24 3.25-1.06-1.06M8.184 14.24l5.664-5.663 1.06 1.06-5.663 5.665z" />,
        <path fill="none" d="M24 0v24H0V0z" />
    ),
    'SvgGlassDivider'
);
export default SvgGlassDivider;
