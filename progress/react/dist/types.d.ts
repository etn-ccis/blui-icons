import { SVGAttributes } from 'react';
export declare type IconPath = string;
export declare type IconID = string;
export declare type GetPathFunction = (arg0: boolean) => IconPath;
export declare type GetIDFunction = (arg0: boolean) => IconID;
export declare type ProgressIconProps = SVGAttributes<SVGElement> & {
    percent?: number;
    size?: number;
    outlined?: boolean;
    color?: string;
};
export declare type PieProgressProps = ProgressIconProps & {
    ring?: number;
};
export declare type HeartProgressProps = ProgressIconProps;
export declare type BatteryProgressProps = ProgressIconProps & {
    charging?: boolean;
};
