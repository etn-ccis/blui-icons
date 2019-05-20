import { OnInit } from '@angular/core';
export declare class PieComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    ring: number;
    outlined: boolean;
    outlineBase: any;
    twoToneBase: any;
    clipPath: any;
    iconStroke: number;
    stroke: any;
    centerX: number;
    centerY: number;
    outerRadiusLarge: number;
    innerRadiusLarge: any;
    outerRadiusSmall: any;
    innerRadiusSmall: any;
    constructor();
    getPath(): string;
    ngOnInit(): void;
}
