import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMotor = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.89 14.5h-2.13v-4.41c0-.23 0-.82.08-1.75h-.05l-1.73 6.16h-2.2l-1.75-6.17h-.06a18.74 18.74 0 0 1 .13 2.45v3.72H7.12V7.93h3.09L12 14l1.79-6.07h3.1Z"
            fillRule="evenodd"
        />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgMotor'
);
export default SvgMotor;
