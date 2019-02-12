import { OnInit } from '@angular/core';
export declare class BatteryComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    constructor();
    ngOnInit(): void;
    rv: (value: any, min: any, max: any) => number;
}
