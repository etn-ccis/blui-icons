import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { NgProgressIconsComponent } from './ng-progress-icons.component';
import { BatteryComponent } from './battery/battery.component';
import { HeartComponent } from './heart/heart.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgProgressIconsComponent, BatteryComponent, HeartComponent, PieComponent],
  exports: [
    NgProgressIconsComponent, 
    BatteryComponent, HeartComponent, PieComponent
  ]
})
export class NgProgressIconsModule { }
