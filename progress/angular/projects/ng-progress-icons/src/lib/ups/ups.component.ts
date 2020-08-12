import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { rangeValue } from '../utilities';
import {PxbProgressIcon} from "../pxb-progress-icon";

@Component({
    selector: 'ups-progress',
    template: `
        <span class="pxb-progress-icon" >
        <pxb-icon-label  *ngIf="showPercentLabel"
                         [size]="size"
                         [labelPosition]="labelPosition"
                         [percent]="percent"></pxb-icon-label>
        <svg [attr.height]="size + 'px'" [attr.width]="size + 'px'" x="0px" y="0px" viewBox="0 0 24 24">
            <path
                opacity="0.3"
                d="M2 2H22V7H19V8H22V12H19V13H22V17H19V18H22V22H2V18H5V17H2V13H5V12H2V8H5V7H2V2Z"
                [attr.fill]="color || 'currentColor'"
                *ngIf="!outlined"
            />
            <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="20"
                height="20"
                *ngIf="!outlined"
            >
                <path
                    d="M2 2H22V7H19V8H22V12H19V13H22V17H19V18H22V22H2V18H5V17H2V13H5V12H2V8H5V7H2V2Z"
                    [attr.fill]="color || 'currentColor'"
                />
            </mask>
            <g mask="url(#mask0)" *ngIf="!outlined">
                <rect
                    x="2"
                    [attr.y]="startY"
                    width="20"
                    [attr.height]="fillHeight"
                    [attr.fill]="color || 'currentColor'"
                />
            </g>

            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 2H2V22H22V2ZM4 4V8H6V9H4V12H6V13H4V16H6V17H4V20H20V17H18V16H20V13H18V12H20V9H18V8H20V4H4Z"
                [attr.fill]="color || 'currentColor'"
                *ngIf="outlined"
            />
            <rect
                x="2"
                [attr.y]="startY"
                width="20"
                [attr.height]="fillHeight"
                [attr.fill]="color || 'currentColor'"
                *ngIf="outlined"
            />
        </svg>
        </span>
    `,
    styleUrls: ['../pxb-progress-icon.scss']
})
export class UpsComponent extends PxbProgressIcon implements OnChanges {

    @Input() outlined = false;

    rangedPercent: number;
    startY: number;
    fillHeight: number;

    ngOnChanges() {
        this.rangedPercent = rangeValue(this.percent, 0, 100);
        this.startY = this.outlined
            ? ((100 - this.rangedPercent) / 100) * 16 + 4
            : ((100 - this.rangedPercent) / 100) * 20 + 2;
        this.fillHeight = this.outlined ? (this.rangedPercent / 100) * 16 : (this.rangedPercent / 100) * 20;
    }
}
