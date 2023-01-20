import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
const SvgEaton = (props: SvgIconProps) =>
    React.createElement(
        SvgIcon,
        {
            style: {
                height: '1em',
                width: 'auto',
            },
            ...props,
            viewBox: '0 0 24 7',
        },
        <path d="m7.769 1.257.58 2.094H7.145l.624-2.094ZM6.71 4.815l-.53 1.736h3.094l-.499-1.736H6.711ZM14.785 0h-5.94v1.864h1.875V6.55h3.015c-.187-.116-1.465-1.13-1.465-3.027.003-1.576.955-3.119 2.515-3.524Zm1.03 4.871c.7 0 1.263-.581 1.263-1.317 0-.735-.527-1.392-1.239-1.392-.71 0-1.27.665-1.27 1.395s.526 1.317 1.248 1.317l-.002-.003Zm6.229-.752L20.837 0h-3.086v6.55h1.928V2.447h.014l1.194 4.105H24V0h-1.944v4.12h-.012ZM3.736 6.551l.556-1.837H2.227V4.16h2.235l.53-1.76H2.227v-.533h2.919L5.709 0H0v6.55h3.736Z" />
    );
export default SvgEaton;
