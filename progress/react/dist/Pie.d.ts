import { Component } from 'react';
declare type PiePropType = {
    outlined: boolean;
    ring: number;
    size: number;
    percent: number;
    color: string;
    style: object;
};
export declare class Pie extends Component<PiePropType> {
    defaultProps: {
        percentage: number;
        size: number;
        ring: number;
        outlined: boolean;
    };
    render(): JSX.Element;
}
export {};
