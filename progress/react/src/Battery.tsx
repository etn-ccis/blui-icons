import React, { Component } from 'react';
import { rangeValue, defaultProps } from './utilities';
import * as IconTypes from './types';

const basePath: IconTypes.IconPath =
    'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
const chargePath: IconTypes.IconPath =
    'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
const outlinedPath: IconTypes.IconPath =
    'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
const baseID: IconTypes.IconID = 'pxb-battery-clip';
const chargeID: IconTypes.IconID = 'pxb-battery-clip-charge';

const getBasepath: IconTypes.GetPathFunction = (outlined) => (outlined ? outlinedPath : basePath);
const getClipPath: IconTypes.GetPathFunction = (charging) => (charging ? chargePath : basePath);

const getID: IconTypes.GetIDFunction = (charging) => (charging ? chargeID : baseID);

export class Battery extends Component<IconTypes.IconPropType> {
    maskIDleft: string;
    maskIDright: string;
    startX: number;
    fillWidth: number;

    constructor(props: IconTypes.IconPropType) {
        super(props);
        const _props = {...this.props, ...defaultProps};
        this.maskIDleft = `maskLeft-${_props.percent}`;
        this.maskIDright = `maskRight-${_props.percent}`;
        this.startX = _props.outlined ? 3.9 : 2;
        this.fillWidth = _props.outlined ? 14.2 : 18;
    }

    render(): JSX.Element {
        let { outlined, charging, size, percent, color, ...props } = {...defaultProps, ...this.props};

        return (
            <svg height={`${size}px`} width={`${size}px`} x="0px" y="0px" viewBox="0 0 24 24" {...props}>
                <defs>
                    {outlined && (
                        <mask id={this.maskIDleft}>
                            <rect width="100%" height="100%" fill="white" />
                            <polygon fill="black" points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 " />
                        </mask>
                    )}
                    {outlined && (
                        <mask id={this.maskIDright}>
                            <rect width="100%" height="100%" fill="white" />
                            <rect
                                x={this.startX}
                                y="7"
                                fill="black"
                                width={`${Math.min(
                                    (rangeValue(percent, 0, 100) * this.fillWidth) / 100,
                                    this.fillWidth
                                )}`}
                                height="10"
                            />
                        </mask>
                    )}
                    <clipPath id={getID(charging || defaultProps.charging)}>
                        <path overflow="visible" d={getClipPath(charging)} />
                    </clipPath>
                </defs>
                <path
                    fill={color || 'currentColor'}
                    fillOpacity={outlined || percent >= 100 ? '1' : 0.3}
                    clipPath={`url(#${getID(charging)})`}
                    d={getBasepath(outlined)}
                />

                <g fill={color || 'currentColor'}>
                    <rect
                        x={this.startX}
                        y="7"
                        clipPath={`url(#${getID(charging)})`}
                        width={`${Math.min((rangeValue(percent, 0, 100) * this.fillWidth) / 100, this.fillWidth)}`}
                        height="10"
                        mask={outlined && charging ? `url(#${this.maskIDleft})` : undefined}
                    />
                    {outlined && charging && (
                        <polygon points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13" mask={`url(#${this.maskIDright})`} />
                    )}
                </g>
            </svg>
        );
    }
}
