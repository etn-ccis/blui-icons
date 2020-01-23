import { Component } from 'react';
declare type HeartPropType = {
    percent: number;
    size: number;
    outlined: boolean;
    color: string;
    charging: boolean;
};
export declare class Heart extends Component<HeartPropType> {
    startY: number;
    fillHeight: number;
    constructor(props: HeartPropType);
    defaultProps: {
        percentage: number;
        size: number;
        outlined: boolean;
    };
    render(): JSX.Element;
}
export {};
