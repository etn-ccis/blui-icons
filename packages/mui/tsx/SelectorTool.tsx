import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSelectorTool = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            d="M3.127 6.892c-.656-2.23 1.332-4.308 3.55-3.82l.215.055 11.93 3.51c2.643.777 2.965 4.39.501 5.621l-4.71 2.355-2.355 4.71c-1.231 2.464-4.844 2.142-5.622-.5L3.127 6.893Zm3.195-1.825a1.01 1.01 0 0 0-1.255 1.255l3.508 11.93c.243.826 1.317.972 1.789.31l.086-.143 2.505-5.012c.098-.195.257-.354.452-.452l5.012-2.505c.821-.41.714-1.616-.167-1.875L6.322 5.067Z"
            fill="#000"
        />
    ),
    'SvgSelectorTool'
);
export default SvgSelectorTool;
