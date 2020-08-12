import { Input } from '@angular/core';

export class PxbProgressIcon {
    @Input() size = 24;
    @Input() percent = 100;
    @Input() showPercentLabel = false;
    @Input() labelPosition: 'top' | 'bottom' | 'left' | 'right' | 'center' = 'center';
    @Input() color: string;
}
