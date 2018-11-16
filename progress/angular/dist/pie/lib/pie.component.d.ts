import { OnInit } from '@angular/core';
export declare class PieComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    ring: number;
    stroke: number;
    constructor();
    ngOnInit(): void;
    rangeValue(value: any, min: any, max: any): number;
    getCoordinates(percent: any): {
        x: number;
        y: number;
    };
}
