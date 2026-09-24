import React from 'react';
import { useColorScheme, useTheme } from '@mui/material/styles';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { twoToneColors, TwoToneStatus } from './twoToneColors';

export type { TwoToneStatus } from './twoToneColors';

export type TwoToneIconProps = Omit<SvgIconProps, 'color'> & {
    /** A two-tone icon component from `@brightlayer-ui/icons-mui` (or any MUI `*TwoTone` icon). */
    icon: React.ElementType<SvgIconProps>;
    /** The status color scheme to apply. Defaults to `neutral`. */
    status?: TwoToneStatus;
};

/**
 * Wrapper that applies a status color scheme to a two-tone icon.
 */
export const TwoToneIcon: React.FC<TwoToneIconProps> = ({ icon: Icon, status = 'neutral', sx, ...props }) => {
    const { mode } = useColorScheme();
    const themeMode = useTheme().palette.mode;
    const colorMode = mode === 'dark' || mode === 'light' ? mode : themeMode;
    const { isolated, container } = twoToneColors[status][colorMode];

    return (
        <Icon
            {...props}
            sx={{
                color: isolated,
                '& [fill-opacity], & [opacity]': { fill: container, fillOpacity: 1, opacity: 1 },
                ...sx,
            }}
        />
    );
};

export default TwoToneIcon;
