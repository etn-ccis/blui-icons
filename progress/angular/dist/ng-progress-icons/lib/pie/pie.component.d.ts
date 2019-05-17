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
    stroke: number;
    iconStroke: number;
    centerX: number;
    centerY: number;
    outerRadiusLarge: number;
    innerRadiusLarge: number;
    outerRadiusSmall: number;
    innerRadiusSmall: number;
    constructor();
    getPath(): string;
    ngOnInit(): void;
}
