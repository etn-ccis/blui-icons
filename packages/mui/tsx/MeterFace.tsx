import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMeterFace = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path
            d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1-4H5V5h14Zm-2-6h-5V7h5Zm0 4H9v-2h8Z"
            fillRule="evenodd"
        />,
        <path fill="none" d="M0 0h24v24H0z" />
    ),
    'SvgMeterFace'
);
export default SvgMeterFace;
