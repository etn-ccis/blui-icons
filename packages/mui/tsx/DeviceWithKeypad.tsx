import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDeviceWithKeypad = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" d="M0 0h24v24H0z" />,
        <path
            d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM9 19H7v-2h2v2Zm0-4H7v-2h2v2Zm8 4h-6v-2h6v2Zm-6-4v-2h2v2h-2Zm6 0h-2v-2h2v2Zm0-4H7V5h10v6Z"
            fillRule="evenodd"
        />
    ),
    'SvgDeviceWithKeypad'
);
export default SvgDeviceWithKeypad;
