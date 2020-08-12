import {Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
    selector: 'pxb-icon-label',
    template: `
        <span style="text-align: center; position: absolute; z-index: 2"
               [style.fontSize.px]="size/4"
               [style.height.px]="size"
               [style.lineHeight.px]="size"
               [style.width.px]="size"
               [style.right]="labelPosition === 'left' ? 0 : 'unset'"
        >{{percent}}%</span>
    `,
    styleUrls: ['../pxb-progress-icon.scss']
})
export class LabelComponent  {
    @Input() size: number;
    @Input() labelPosition;
    @Input() percent;
}
