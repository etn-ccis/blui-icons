import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgVoltageCircled = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M0 0h24v24H0Z" fill="none" />,
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 11H4v-2h7Zm6.5 0v2.5h-2V13H13v-2h2.5V8.5h2V11H20v2Z" />
    ),
    'SvgVoltageCircled'
);
export default SvgVoltageCircled;
