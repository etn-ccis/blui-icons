import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSupport = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" d="M0 0h24v24H0z" />,
        <path d="M12 2a8 8 0 0 0-8 8v1.9A2.92 2.92 0 0 0 3 14a2.88 2.88 0 0 0 1.94 2.61C6.24 19.72 8.85 22 12 22h3v-2h-3c-2.26 0-4.31-1.7-5.34-4.39l-.21-.55-.59-.06A1 1 0 0 1 5 14a1 1 0 0 1 .5-.86l.5-.29V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5h-4.09a1.5 1.5 0 1 0-1.52 2H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2v-2a8 8 0 0 0-8-8Z" />
    ),
    'SvgSupport'
);
export default SvgSupport;
