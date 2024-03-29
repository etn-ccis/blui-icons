import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgOutlet = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M8 7h2v5H8ZM4.22 2h15.56A2.23 2.23 0 0 1 22 4.22v15.56A2.22 2.22 0 0 1 19.78 22H4.22A2.23 2.23 0 0 1 2 19.78V4.22A2.22 2.22 0 0 1 4.22 2ZM12 4a8 8 0 1 0 5.66 2.34A8 8 0 0 0 12 4Zm2 3.5h2v4h-2Zm-3.5 8.75a1.5 1.5 0 0 1 3 0V17h-3Z" />
    ),
    'SvgOutlet'
);
export default SvgOutlet;
