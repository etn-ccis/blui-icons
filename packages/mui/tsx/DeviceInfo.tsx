import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDeviceInfo = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 12c-3.9 0-7 3.1-7 7 0 .7.1 1.4.3 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v7.3c-.6-.2-1.3-.3-2-.3ZM5 5v3h14V5H5Z"
        />,
        <path d="M18 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 17h-2v4h2v-4Z" />
    ),
    'SvgDeviceInfo'
);
export default SvgDeviceInfo;
