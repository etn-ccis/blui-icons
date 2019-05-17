import { OnInit } from '@angular/core';
export declare class HeartComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    outlined: boolean;
    basePath: string;
    singletonePath: string;
    constructor();
    ngOnInit(): void;
    getPath(): string;
    rv: (value: any, min: any, max: any) => number;
}
