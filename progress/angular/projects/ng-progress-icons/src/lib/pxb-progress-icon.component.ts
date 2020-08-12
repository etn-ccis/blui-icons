import {Component, Input} from '@angular/core';

@Component({
    selector: 'pxb-progress-icon',
    template: `
        <span class="pxb-progress-icon" 
              [style.flexDirection]="getFlexDirection()"
              [style.display]="labelPosition === 'center' ? '' : 'inline-flex'">
            <span style="text-align: center; z-index: 2;" *ngIf="showPercentLabel"
                  [style.fontSize.px]="size/4"
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
