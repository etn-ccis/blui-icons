import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgPowerFactor = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M16 4V2h2v2h2v2h-2v2h-2V6h-2V4h2ZM10 4H4v2h6V4Z" />,
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.736 16.96c.77-.65 1.156-1.59 1.156-2.82 0-1.182-.362-2.07-1.086-2.663-.719-.6-1.77-.899-3.156-.899H4V22h2.422v-4.063h1.04c1.416 0 2.507-.325 3.273-.976ZM7.22 15.954h-.797v-3.39h1.102c.661 0 1.146.135 1.453.406.313.27.469.69.469 1.258 0 .562-.185.992-.555 1.289-.37.291-.927.437-1.672.437Z"
        />,
        <path d="M14 22h2.383v-4.516h3.875v-1.976h-3.875v-2.945h4.164v-1.985H14V22Z" />
    ),
    'SvgPowerFactor'
);
export default SvgPowerFactor;
