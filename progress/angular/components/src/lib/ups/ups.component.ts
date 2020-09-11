import { Component, Input, OnChanges } from '@angular/core';
import { rangeValue } from '../utilities';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';

@Component({
    selector: 'ups-progress',
    template: `
        <pxb-progress-icon
            [size]="size"
            [labelPosition]="labelPosition"
            [percent]="percent"
            [showPercentLabel]="showPercentLabel"
            [labelColor]="labelColor"
            [labelSize]="labelSize"
            [color]="color"
        >
            <svg [attr.height]="size + 'px'" [attr.width]="size + 'px'" x="0px" y="0px" viewBox="0 0 24 24">
                <defs>
                    <clipPath id="outlined-progress-clip">
                        <path d="M4 8V4H20V8H17V9H20V12H17V13H20V16H17V17H20V20H4V17H7V16H4V13H7V12H4V9H7V8H4Z" />
                    </clipPath>
                    <clipPath [attr.id]="'outlined-border-clip-' + rangedPercent">
                        <rect x="2" y="2" width="20" [attr.height]="startY - 2" />
                    </clipPath>
                </defs>

                <mask
                    id="mask-filled"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    *ngIf="!outlined"
                >
                    <path [attr.d]="basePath" [attr.fill]="color || 'currentColor'" />
                </mask>
                <g mask="url(#mask-filled)" *ngIf="!outlined">
                    <path
                        [attr.opacity]="backgroundColor ? 1 : 0.3"
                        [attr.d]="basePath"
                        [attr.fill]="backgroundColor || color || 'currentColor'"
                    />
                    <rect
                        x="2"
                        [attr.y]="startY"
                        width="20"
                        [attr.height]="fillHeight"
                        [attr.fill]="color || 'currentColor'"
                    />
                </g>

                <g [attr.fill]="color || 'currentColor'" *ngIf="outlined">
                    <rect *ngIf="backgroundColor" x="4" y="4" width="16" height="16" [attr.fill]="backgroundColor" />
                    <path
                        fill-rule="evenodd"
                        d="M22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4ZM4 4V8H7V9H4V12H7V13H4V16H7V17H4V20H20V17H17V16H20V13H17V12H20V9H17V8H20V4H4Z"
                        [attr.clip-path]="'url(#outlined-border-clip-' + rangedPercent + ')'"
                        clip-rule="evenodd"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM20 4H4V20H20V4Z"
                    />
                    <rect
                        x="4"
                        [attr.y]="startY"
                        width="16"
                        [attr.height]="fillHeight"
                        clip-path="url(#outlined-progress-clip)"
                    />
                </g>
            </svg>
        </pxb-progress-icon>
    `,
    styleUrls: ['../pxb-progress-icon.scss'],
})
export class UpsComponent extends PxbProgressIconComponent implements OnChanges {
    @Input() outlined = false;

    rangedPercent: number;
    startY: number;
    fillHeight: number;

    basePath =
        'M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V6H19V8H22V11H19V13H22V16H19V18H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V18H5V16H2V13H5V11H2V8H5V6H2V4Z';

    ngOnChanges(): void {
        this.rangedPercent = rangeValue(this.percent, 0, 100);
        this.startY = this.outlined
            ? ((100 - this.rangedPercent) / 100) * 16 + 4
            : ((100 - this.rangedPercent) / 100) * 20 + 2;
        this.fillHeight = this.outlined ? (this.rangedPercent / 100) * 16 : (this.rangedPercent / 100) * 20;
    }
}
