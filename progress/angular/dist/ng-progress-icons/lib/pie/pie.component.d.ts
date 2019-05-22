import { OnInit } from '@angular/core';
export declare class PieComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    ring: number;
    outlined: boolean;
    outlineBase: string;
    twoToneBase: string;
    clipPath: string;
    iconStroke: number;
    stroke: number;
    centerX: number;
    centerY: number;
    outerRadiusLarge: number;
    innerRadiusLarge: any;
    outerRadiusSmall: any;
    innerRadiusSmall: any;
    constructor();
    getPath(): string;
    ngOnInit(): void;
    ngOnChanges(): void;
    rv: (value: any, min: any, max: any) => number;
}
