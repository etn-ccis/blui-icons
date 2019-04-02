import { OnInit } from '@angular/core';
export declare class BatteryComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    charging: boolean;
    constructor();
    ngOnInit(): void;
    rv: (value: any, min: any, max: any) => number;
}
