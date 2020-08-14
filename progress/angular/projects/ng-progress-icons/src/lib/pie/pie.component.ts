import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { rangeValue, getCoordinates } from '../utilities';
import {PxbProgressIconComponent} from "../pxb-progress-icon.component";

@Component({
    selector: 'pie-progress',
    template: `
        <pxb-progress-icon [size]="size" [labelPosition]="labelPosition" [percent]="percent" [showPercentLabel]="showPercentLabel" [labelColor]="labelColor" [labelSize]="labelSize">
        <svg
            [attr.height]="size + 'px'"
            [attr.width]="size + 'px'"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            style="transform: rotate(-.25turn)"
        >
            <clipPath [attr.id]="'pxb-donut-clip-' + stroke">
                <path [attr.d]="clipPath" />
            </clipPath>
            <path
                [attr.clip-path]="'url(#pxb-donut-clip-' + stroke + ')'"
                [attr.fill]="color || 'currentColor'"
                [attr.fill-opacity]="outlined || percent >= 100 ? '1' : '0.3'"
                [attr.d]="outlined ? outlineBase : twoToneBase"
            />
            <path
                *ngIf="rv(percent, 0, 100) > 0 && rv(percent, 0, 100) < 100"
                [attr.fill]="color || 'currentColor'"
                [attr.clip-path]="'url(#pxb-donut-clip-' + stroke + ')'"
                [attr.d]="getPath()"
            />

            <circle
                *ngIf="rv(percent, 0, 100) === 100 && outlined"
                [attr.clip-path]="'url(#pxb-donut-clip-' + stroke + ')'"
                cx="12"
                cy="12"
                r="10"
                [attr.fill]="color || 'currentColor'"
            ></circle>
        </svg>
        </pxb-progress-icon>
    `,
    styleUrls: ['../pxb-progress-icon.scss']
})
export class PieComponent extends PxbProgressIconComponent implements OnChanges {
    @Input() ring = 10;
    @Input() outlined = false;

    rv = rangeValue;

    outlineBase: string;
    twoToneBase: string;
    clipPath: string;
    iconStroke = 2;
    stroke: number;

    // Ring properties
    centerX = 12;
    centerY = 12;

    // Outer ring
    outerRadiusLarge = 10;
    innerRadiusLarge;

    // Inner Ring
    outerRadiusSmall;
    innerRadiusSmall;

    getPath() {
        return `M 12,12 H 24 A 12,12,0,${this.rv(this.percent, 0, 100) >= 50 ? 1 : 0},1,${
            getCoordinates(this.rv(this.percent, 0, 100))['x']
        },${getCoordinates(this.rv(this.percent, 0, 100))['y']}Z`;
    }

    ngOnChanges() {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
        this.innerRadiusLarge = 10 - this.iconStroke;
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }

        this.outlineBase = `
  M ${this.centerX} ${this.centerY - this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY - this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY + this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY - this.innerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY - this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusSmall}
  Z
  M ${this.centerX} ${this.centerY - this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY + this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY - this.innerRadiusSmall}
  Z
`;
        this.twoToneBase = `
M ${this.centerX} ${this.centerY - this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusLarge}
Z
`;
        this.clipPath = `
M12,2
A10,10,0,1,0,22,12,
10,10,0,0,0,12,2
Z
m0,${20 - this.stroke} 
A ${10 - this.stroke},${10 - this.stroke},0,1,1,${22 - this.stroke},12,
${10 - this.stroke},${10 - this.stroke},0,0,1,12,${22 - this.stroke}
Z
`;
    }
}
