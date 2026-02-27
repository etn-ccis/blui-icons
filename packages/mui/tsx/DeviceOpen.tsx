import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDeviceOpen = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" fill="#000" />,
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-7 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
            fill="#000"
        />
    ),
    'SvgDeviceOpen'
);
export default SvgDeviceOpen;
