import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgProgressIconsComponent } from './ng-progress-icons.component';
import { BatteryComponent } from './battery/battery.component';
import { HeartComponent } from './heart/heart.component';
import { PieComponent } from './pie/pie.component';
import {PxbProgressIconComponent} from "./pxb-progress-icon.component";
import { UpsComponent } from './ups/ups.component';
import {LabelComponent} from './label/label.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PxbProgressIconComponent, LabelComponent, NgProgressIconsComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
    exports: [NgProgressIconsComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
})
export class NgProgressIconsModule {}
