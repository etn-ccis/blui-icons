export declare type IconPath = string;
export declare type IconID = string;
export declare type GetPathFunction = (arg0: boolean) => IconPath;
export declare type GetIDFunction = (arg0: boolean) => IconID;
export declare type IconPropType = {
    percent?: number;
    size?: number;
    charging?: boolean;
    outlined?: boolean;
    color?: string;
    ring?: number;
    style?: object;
};
