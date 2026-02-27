import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
const SvgEatonPadded = (props: SvgIconProps) =>
    React.createElement(
        SvgIcon,
        {
            style: {
                height: '1em',
                width: 'auto',
            },
            ...props,
            viewBox: '0 0 24 24',
        },
        <path
            d="m8.12 10.15.53 1.92h-1.1l.57-1.92Zm-1 3.26L6.67 15H9.5l-.45-1.59H7.12ZM14.55 9H9.11v1.71h1.72V15h2.76a3.44 3.44 0 0 1-1.34-2.77A3.26 3.26 0 0 1 14.55 9Zm.95 4.46a1.17 1.17 0 0 0 1.15-1.2A1.22 1.22 0 0 0 15.52 11a1.25 1.25 0 0 0-1.17 1.28 1.149 1.149 0 0 0 1.15 1.2v-.02Zm5.71-.67L20.1 9h-2.83v6H19v-3.76L20.15 15H23V9h-1.78v3.77l-.01.02ZM4.42 15l.51-1.68H3v-.51h2.09l.49-1.61H3v-.49h2.72L6.23 9H1v6h3.42Z"
            fill="#000"
        />
    );
export default SvgEatonPadded;
