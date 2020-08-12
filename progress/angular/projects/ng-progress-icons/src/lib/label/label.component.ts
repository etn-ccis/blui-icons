import {Component, Input} from '@angular/core';

@Component({
    selector: 'pxb-icon-label',
    template: `
        <span style="text-align: center; z-index: 2;"
               [style.fontSize.px]="size/4"
               [style.display]="labelPosition === 'center' ? '' : 'flex'"
               [style.height.px]="labelPosition === 'center' ? size : 'unset'"
               [style.width.px]="labelPosition === 'center' ? size : 'unset'"
               [style.lineHeight.px]="labelPosition === 'top' || labelPosition === 'bottom' ? 'unset' : size"
               [style.position]="labelPosition === 'center' ? 'absolute' : 'unset'"
        >{{percent}}%</span>
    `,
    styleUrls: ['../pxb-progress-icon.scss']
})
export class LabelComponent  {
    @Input() size: number;
    @Input() labelPosition;
    @Input() percent;
}
