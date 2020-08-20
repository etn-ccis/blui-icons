import {Component, Input, OnChanges} from '@angular/core';
import color from 'color';

@Component({
    selector: 'pxb-progress-icon',
    template: `
        <span class="pxb-progress-icon"
              [style.flexDirection]="getFlexDirection()"
              [style.display]="labelPosition === 'center' ? '' : 'inline-flex'">
            <span *ngIf="showPercentLabel"
                  class="pxb-progress-icon-label"
                  [class.inverted]="inverted"
                  [class.center]="labelPosition === 'center'"
                  [style.color]="labelColor"
                  [ngStyle]="{'-webkit-text-stroke-width.px': labelPosition === 'center' ? size / 60 : 0}"
                  [style.fontSize.px]="labelSize || size/4"
                  [style.height.px]="labelPosition === 'center' ? size : 'unset'"
                  [style.width.px]="labelPosition === 'center' ? size : 'unset'"
                  [style.lineHeight.px]="labelPosition === 'top' || labelPosition === 'bottom' ? 'unset' : size"
                  [style.webkitTextStrokeColor]="getStrokeColor()"
                  [style.webkitTextFillColor]="labelColor"
            >{{percent}}%</span>
            <ng-content></ng-content>
        </span>
    `,
    styleUrls: ['./pxb-progress-icon.scss']
})
export class PxbProgressIconComponent implements OnChanges {
    @Input() size = 24;
    @Input() percent = 100;
    @Input() showPercentLabel = false;
    @Input() labelPosition: 'top' | 'bottom' | 'left' | 'right' | 'center' = 'center';
    @Input() color: string;
    @Input() labelColor: string;
    @Input() labelSize: number;

    inverted: boolean;

    ngOnChanges(): void {
        if (color) {
            // Inverted class applies only to center-aligned label.
            this.inverted = this.labelPosition === 'center' && color(this.color).isDark();
        }
    }

    getStrokeColor(): string {
        if (this.labelPosition === 'center' && this.labelColor && color) {
            return color(this.labelColor).isDark() ? 'white' : 'black';
        }
        return '';
    }

    getFlexDirection(): string {
        switch (this.labelPosition) {
            case 'left':
                return 'row';
            case 'right':
                return 'row-reverse';
            case 'top':
                return 'column';
            case 'bottom':
                return 'column-reverse';
            default:
                return '';
        }
    }
}
