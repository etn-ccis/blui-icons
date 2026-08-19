import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSlashOverlay = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <g data-name="slash-overlay" strokeWidth={2}>
            <path d="m3.51 4.92 15.6 15.6" stroke="currentColor" />
            <path d="m4.92 3.51 15.6 15.6" stroke="#FFF" />
        </g>
    ),
    'SvgSlashOverlay'
);
export default SvgSlashOverlay;
