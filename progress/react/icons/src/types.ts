import { SVGAttributes } from 'react';

export type ProgressIconProps = SVGAttributes<SVGElement> & {
    backgroundColor?: string;
    classes?: {
        progressIcon?: string;
        progressIconLabel?: string;
        centered?: string;
    };
    color?: string;
    labelColor?: string;
    labelPosition?: 'top' | 'bottom' | 'left' | 'right';
    labelSize?: number;
    outlined?: boolean;
    percent?: number;
    showPercentLabel?: boolean;
    size?: number;
};

export type PieProgressProps = ProgressIconProps & {
    ring?: number;
};
export type HeartProgressProps = ProgressIconProps;
export type BatteryProgressProps = ProgressIconProps & {
    charging?: boolean;
};
export type UpsProgressProps = ProgressIconProps;
