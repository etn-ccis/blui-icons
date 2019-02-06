import { Component, OnInit } from '@angular/core';
import { rangeValue } from '../utilities';

@Component({
  selector: 'battery-progress',
  template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path [attr.fill]="color || 'currentColor'" fill-opacity="0.3" d="M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z"/>
      <clipPath id="pxb-battery-clip">
        <path overflow="visible" d="M20,8.33C20,7.6,19.4,7,18.67,7H3.34C2.6,7,2,7.6,2,8.33v7.33C2,16.4,2.6,17,3.33,17h15.34C19.4,17,20,16.4,20,15.67V8.33z"/>
      </clipPath> 
      <rect [attr.fill]="color || 'currentColor'" x="2" y="7" clip-path="url(#pxb-battery-clip)" [attr.width]="rv(percent/100*18, 0, 100)" height="10" />
    </svg>
  `,
  styles: [],
  inputs: ['percent', 'size', 'color']
})
export class BatteryComponent implements OnInit {
  percent:number = 100;
  size:number = 24;
  color:string;
  constructor() { }

  ngOnInit() {
  }

  rv = rangeValue;

}