import { Component, OnInit } from '@angular/core';
import { rangeValue } from '../utilities';

@Component({
  selector: 'battery-progress',
  template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> 
    <path [attr.fill]="color || 'currentColor'" fill-opacity="0.3" [attr.d]="getPath()"/>
      <clipPath [id]="getID()">
        <path overflow="visible" [attr.d]="getPath()"/>
      </clipPath> 
      <rect [attr.fill]="color || 'currentColor'" x="2" y="7" [attr.clip-path]="'url(#' + getID() + ')'" [attr.width]="rv(percent/100*18, 0, 100)" height="10" />
    </svg>
  `,
  styles: [],
  inputs: ['percent', 'size', 'color', 'charging']
})
export class BatteryComponent implements OnInit {
  percent:number = 100;
  size:number = 24;
  color:string;
  charging:boolean = false;

  basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
  chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
  baseID = 'pxb-battery-clip';
  chargeID = 'pxb-battery-clip-charge';

  constructor() { }

  ngOnInit() {
  }

  getPath(){
    return (this.charging ? this.chargePath : this.basePath);
  }
  getID(){
    return (this.charging ? this.chargeID : this.baseID);
  }

  rv = rangeValue;

}