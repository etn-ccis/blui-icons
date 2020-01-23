import { Component } from 'react';
declare type BatteryPropType = {
    percent: number;
    size: number;
    charging: boolean;
    outlined: boolean;
    color?: string;
};
export declare class Battery extends Component<BatteryPropType> {
    maskIDleft: string;
    maskIDright: string;
    startX: number;
    fillWidth: number;
    static defaultProps: BatteryPropType;
    constructor(props: BatteryPropType);
    render(): JSX.Element;
}
export {};
