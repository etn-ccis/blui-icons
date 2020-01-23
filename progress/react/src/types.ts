export type IconPath = string;
export type IconID = string;

export type GetPathFunction = (arg0: boolean) => IconPath;
export type GetIDFunction = (arg0: boolean) => IconID;

export type IconPropType = {
    percent?: number,
    size?: number,
    charging?: boolean,
    outlined?: boolean,
    color?: string,
    ring?: number,
    style?: object
};
