import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryComponent } from './battery/battery.component';
import { HeartComponent } from './heart/heart.component';
import { PieComponent } from './pie/pie.component';
import {PxbProgressIconComponent} from "./pxb-progress-icon.component";
import { UpsComponent } from './ups/ups.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PxbProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
    exports: [PxbProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
})
export class NgProgressIconsModule {}
