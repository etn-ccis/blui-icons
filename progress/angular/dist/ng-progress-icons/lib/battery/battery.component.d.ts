import { OnInit } from '@angular/core';
export declare class BatteryComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    charging: boolean;
    outlined: boolean;
    basePath: string;
    chargePath: string;
    singletonePath: string;
    baseID: string;
    chargeID: string;
    constructor();
    ngOnInit(): void;
    getBasepath(): string;
    getClipPath(): string;
    getID(): string;
    rv: (value: any, min: any, max: any) => number;
}
