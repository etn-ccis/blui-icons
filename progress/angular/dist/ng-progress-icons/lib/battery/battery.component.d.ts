import { OnInit } from '@angular/core';
export declare class BatteryComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    charging: boolean;
    basePath: string;
    chargePath: string;
    baseID: string;
    chargeID: string;
    constructor();
    ngOnInit(): void;
    getPath(): string;
    getID(): string;
    rv: (value: any, min: any, max: any) => number;
}
