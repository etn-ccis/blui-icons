import {Component, Input} from '@angular/core';

@Component({
    selector: 'pxb-progress-icon',
    template: `
        <span class="pxb-progress-icon" 
              [style.flexDirection]="getFlexDirection()"
              [style.display]="labelPosition === 'center' ? '' : 'inline-flex'">
            <pxb-icon-label  *ngIf="showPercentLabel"
                [size]="size"
                [labelPosition]="labelPosition"
                [percent]="percent"></pxb-icon-label>
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

    getFlexDirection(): string {
        if (this.labelPosition === 'left') {
            return 'row';
        } else if (this.labelPosition === 'right') {
            return 'row-reverse';
        } else if (this.labelPosition === 'top') {
            return 'column';
        } else if (this.labelPosition === 'bottom') {
            return 'column-reverse';
        }
    }
}
