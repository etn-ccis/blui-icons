import { OnInit } from '@angular/core';
export declare class PieComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    ring: number;
    stroke: number;
    constructor();
    ngOnInit(): void;
    rv: (value: any, min: any, max: any) => number;
    gc: (percent: any, radius?: number) => {
        x: number;
        y: number;
    };
}
