import React from 'react';
import { Box } from '@mui/material';

type SlashedSvgIconProps = {
    iconSrc: string;
    slashSrc: string;
    size?: number;
    alt?: string;
};

export const SlashedSvgIcon: React.FC<SlashedSvgIconProps> = ({ iconSrc, slashSrc, size = 48, alt = '' }) => (
    <Box sx={{ position: 'relative', width: size, height: size }}>
        <img src={iconSrc} alt={alt} width={size} height={size} />
        <img
            src={slashSrc}
            alt=""
            aria-hidden="true"
            width={size}
            height={size}
            style={{ position: 'absolute', inset: 0 }}
        />
    </Box>
);
