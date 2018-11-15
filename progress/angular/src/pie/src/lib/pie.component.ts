import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie-progress',
  template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enableBackground: 'new 0 0 24 24'; xmlSpace:'preserve'; transform:'rotate(-.25turn)'">
      <clipPath [attr.id]="'pxb-donut-clip-'+stroke">
        <path [attr.d]="'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,' + (20-stroke) +'A' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,1,1,' + (22-stroke) + ',12,' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,0,1,12,' + (22-stroke) + 'Z'"/>
      </clipPath>
      <circle [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" cx="12" cy="12" r="10" [attr.fill]="color || 'currentColor'" [attr.fill-opacity]="percent >= 100 ? '1' : '0.3'"></circle>
      <path *ngIf="rangeValue(percent, 0, 100) > 0 && rangeValue(percent, 0, 100) < 100" [attr.fill]="color || 'currentColor'" [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" [attr.d]="'M 12,12 H 24 A 12,12,0,'+(rangeValue(percent, 0, 100)>=50?1:0)+',1,'+getCoordinates(rangeValue(percent, 0, 100))['x']+','+getCoordinates(rangeValue(percent, 0, 100))['y']+'Z'" />
    </svg>
  `,
  styles: [],
  inputs: ['percent', 'size', 'color', 'ring']
})
export class PieComponent implements OnInit {
  percent:number = 100;
  size:number = 24;
  color:string;
  ring:number = 10;
  stroke:number;
  constructor() { }

  ngOnInit() {
    this.stroke = Math.max(1,Math.min(10, Math.round(this.ring)));
  }
  rangeValue(value, min, max){
    return Math.max(min,Math.min(value,max))
  }
  getCoordinates(percent){
    const radius = 12;
    const degrees = percent*3.6;
    return {
      x: radius + (radius * Math.cos( (Math.PI/180) * (degrees))),
      y: radius + (radius * Math.sin( (Math.PI/180) * (degrees)))
    }
  }

}
