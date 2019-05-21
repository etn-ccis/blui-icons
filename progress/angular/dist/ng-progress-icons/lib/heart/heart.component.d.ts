import { OnInit } from '@angular/core';
export declare class HeartComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    outlined: boolean;
    startY: any;
    startX: any;
    basePath: string;
    outlinedPath: string;
    constructor();
    ngOnInit(): void;
    getPath(): string;
    rv: (value: any, min: any, max: any) => number;
}
