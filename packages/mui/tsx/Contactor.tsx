import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgContactor = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M13 8V3h-2v5H2v3h20V8h-9zM2 16h9v5h2v-5h9v-3H2v3z" />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgContactor'
);
export default SvgContactor;
