import { OnInit } from '@angular/core';
export declare class BatteryComponent implements OnInit {
    percent: number;
    size: number;
    color: string;
    charging: boolean;
    outlined: boolean;
    maskIDleft: string;
    maskIDright: string;
    startX: number;
    fillWidth: number;
    basePath: string;
    chargePath: string;
    outlinedPath: string;
    baseID: string;
    chargeID: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    getBasepath(): string;
    getClipPath(): string;
    getID(): string;
    rv: (value: any, min: any, max: any) => number;
}
