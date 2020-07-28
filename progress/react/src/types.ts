import { SVGAttributes } from 'react';

export type ProgressIconProps = SVGAttributes<SVGElement> & {
    percent?: number;
    size?: number;
    outlined?: boolean;
    color?: string;
};

export type PieProgressProps = ProgressIconProps & {
    ring?: number;
};
export type HeartProgressProps = ProgressIconProps;
export type BatteryProgressProps = ProgressIconProps & {
    charging?: boolean;
};
