import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSwitch = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" d="M0 0h24v24H0z" />,
        <path d="M23 14v2h-6v-2Zm-9-5.07-1.41-1.42-.7-.7-7.08 7.07-.1.12H1v2h6v-.07l7-7Z" />
    ),
    'SvgSwitch'
);
export default SvgSwitch;
