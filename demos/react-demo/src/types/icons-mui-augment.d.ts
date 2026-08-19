declare module '@brightlayer-ui/icons-mui' {
    import type { FC } from 'react';

    export type SlashedSvgIconProps = {
        iconSrc: string;
        size?: number;
        slashColor?: string;
        alt?: string;
    };

    export const SlashedSvgIcon: FC<SlashedSvgIconProps>;
}
