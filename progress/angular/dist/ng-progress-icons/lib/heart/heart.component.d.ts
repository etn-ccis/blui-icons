import { OnInit } from '@angular/core';
export declare class HeartComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    outlined: boolean;
    startY: any;
    fillHeight: any;
    basePath: string;
    outlinedPath: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    getPath(): string;
    rv: (value: any, min: any, max: any) => number;
}
