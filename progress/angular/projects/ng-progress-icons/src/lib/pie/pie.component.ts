import { Component, OnInit } from '@angular/core';
import { rangeValue, getCoordinates } from '../utilities';

@Component({
  selector: 'pie-progress',
  template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="transform: rotate(-.25turn)">
      <clipPath [attr.id]="'pxb-donut-clip-'+stroke">
        <path [attr.d]="clipPath"/>
      </clipPath>
      <path [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'"
      [attr.fill]="color || 'currentColor'" 
      [attr.fill-opacity]="outlined || percent >= 100 ? '1' : '0.3'"
      [attr.d]="outlined ? outlineBase : twoToneBase"
    />
    <path *ngIf="percent > 0 && percent < 100" 
    [attr.fill]="color || 'currentColor'" 
    [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" 
    [attr.d]= "getPath()"  />

      <circle *ngIf="percent === 100 && outlined" [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" cx="12" cy="12" r="10" [attr.fill]="color || 'currentColor'"></circle>
      
    </svg>
  `,
  styles: [],
  inputs: ['percent', 'size', 'color', 'ring', 'outlined']
})
export class PieComponent implements OnInit {
  percent: number = 100;
  size: number = 24;
  color: string;
  ring: number = 10;
  outlined: boolean = false;
  outlineBase;
  twoToneBase;
  clipPath;

  stroke = Math.max(1,Math.min(10, Math.round(this.ring)));
  iconStroke = 2;
  

  // Ring properties
  centerX = 12;
  centerY = 12;

  // Outer ring
  outerRadiusLarge = 10;
  innerRadiusLarge = 10 - this.iconStroke;

  // Inner Ring
  outerRadiusSmall = 10 - this.stroke + this.iconStroke;
  innerRadiusSmall = 10 - this.stroke;
  

  constructor() { }
getPath(){
  return `M 12,12 H 24 A 12,12,0,${this.percent >= 50 ? 1 : 0},1,${getCoordinates(this.percent)['x']},${getCoordinates(this.percent)['y']}Z`
}
  ngOnInit() {
    this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
    if(this.innerRadiusSmall === 0)
  {
    this.outerRadiusSmall = 0;
  }
  console.log(this.outlined);
  this.stroke = Math.max(this.stroke, 2 * this.iconStroke + 1)
  this.outlineBase = `
  M ${this.centerX} ${this.centerY-this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY+this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY-this.outerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY-this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY+this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY-this.innerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY-this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY+this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY-this.outerRadiusSmall}
  Z
  M ${this.centerX} ${this.centerY-this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY+this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY-this.innerRadiusSmall}
  Z
`;
this.twoToneBase =  `
M ${this.centerX} ${this.centerY-this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY+this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY-this.outerRadiusLarge}
Z
`;
this.clipPath = `
M12,2
A10,10,0,1,0,22,12,
10,10,0,0,0,12,2
Z
m0,${20-this.stroke} 
A ${10-this.stroke},${10-this.stroke},0,1,1,${22-this.stroke},12,
${10-this.stroke},${10-this.stroke},0,0,1,12,${22-this.stroke}
Z
`
  }


}
