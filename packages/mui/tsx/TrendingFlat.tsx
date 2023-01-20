import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTrendingFlat = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M0 0h24v24H0Z" fill="none" />,
        <path d="m22 12-4-4v3H3v2h15v3Z" />
    ),
    'SvgTrendingFlat'
);
export default SvgTrendingFlat;
