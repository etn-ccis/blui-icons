import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDimmer = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            d="M15 14H9v-2h2V5h2v7h2Zm-4 5h2v-4h-2Zm8-16v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Zm-2 0H7v18h10Z"
            fillRule="evenodd"
        />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgDimmer'
);
export default SvgDimmer;
