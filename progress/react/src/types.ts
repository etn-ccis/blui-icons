import { SVGProps, HTMLAttributes, SVGAttributes } from 'react';

export type IconPath = string;
export type IconID = string;

export type GetPathFunction = (arg0: boolean) => IconPath;
export type GetIDFunction = (arg0: boolean) => IconID;

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
