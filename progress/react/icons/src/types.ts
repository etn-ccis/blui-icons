import { SVGAttributes } from 'react';

export type ProgressIconProps = SVGAttributes<SVGElement> & {
    percent?: number;
    size?: number;
    outlined?: boolean;
    color?: string;
    showPercentLabel?: boolean;
    labelPosition?: 'top' | 'bottom' | 'left' | 'right';
    labelColor?: string;
    labelSize?: number;
    classes?: {
        progressIcon?: string;
        progressIconLabel?: string;
        centered?: string;
    };
};

export type PieProgressProps = ProgressIconProps & {
    ring?: number;
};
export type HeartProgressProps = ProgressIconProps;
export type BatteryProgressProps = ProgressIconProps & {
    charging?: boolean;
};
export type UpsProgressProps = ProgressIconProps;
