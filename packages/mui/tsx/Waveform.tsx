import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgWaveform = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path fill="none" d="M0 0h24v24H0z" />,
        <path
            d="M20.84 16.35a1 1 0 0 1-1-.75l-1.39-5.54a.49.49 0 0 0-1 0l-1.09 4.36a2.5 2.5 0 0 1-4.86 0l-1.09-4.36a.49.49 0 0 0-1 0l-.98 4.36a2.5 2.5 0 0 1-4.86 0L2.15 8.74a1 1 0 0 1 1.95-.48l1.42 5.68a.49.49 0 0 0 1 0l1.05-4.36a2.5 2.5 0 0 1 4.86 0l1.09 4.36a.49.49 0 0 0 1 0l1.09-4.36a2.5 2.5 0 0 1 4.86 0l1.38 5.53a1 1 0 0 1-1 1.24Z"
            fill="currentColor"
        />
    ),
    'SvgWaveform'
);
export default SvgWaveform;
