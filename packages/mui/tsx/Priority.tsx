import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPriority = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" d="M0 0h24v24H0z" />,
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-6 10h-2V7h2Zm0 4h-2v-2h2Z" />
    ),
    'SvgPriority'
);
export default SvgPriority;
