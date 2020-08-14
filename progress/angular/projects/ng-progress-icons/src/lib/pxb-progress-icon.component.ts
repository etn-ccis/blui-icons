import {Component, Input} from '@angular/core';

@Component({
    selector: 'pxb-progress-icon',
    template: `
        <span class="pxb-progress-icon"
              [style.flexDirection]="getFlexDirection()"
              [style.display]="labelPosition === 'center' ? '' : 'inline-flex'">
            <span *ngIf="showPercentLabel"
                  class="pxb-progress-icon-label"
                  [class.center]="labelPosition === 'center'"
                  [style.color]="labelColor"
                  [style.fontSize.px]="labelSize || size/4"
                  [style.display]="labelPosition === 'center' ? '' : 'flex'"
                  [style.height.px]="labelPosition === 'center' ? size : 'unset'"
                  [style.width.px]="labelPosition === 'center' ? size : 'unset'"
                  [style.lineHeight.px]="labelPosition === 'top' || labelPosition === 'bottom' ? 'unset' : size"
                  [style.position]="labelPosition === 'center' ? 'absolute' : 'unset'"
            >{{percent}}%</span>
            <ng-content></ng-content>
        </span>
    `,
    styleUrls: ['./pxb-progress-icon.scss']
})
export class PxbProgressIconComponent {
    @Input() size = 24;
    @Input() percent = 100;
    @Input() showPercentLabel = false;
    @Input() labelPosition: 'top' | 'bottom' | 'left' | 'right' | 'center' = 'center';
    @Input() color: string;
    @Input() labelColor: string;
    @Input() labelSize: number;

    getFlexDirection(): string {
        switch (this.labelColor) {
            case 'left': return 'row';
            case 'right': return 'row-reverse';
            case 'top': return 'column';
            case 'bottom': return 'column-reverse';
            default: return '';
        }
    }
}
