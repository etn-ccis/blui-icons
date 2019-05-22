/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { rangeValue, getCoordinates } from '../utilities';
export class PieComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
        this.ring = 10;
        this.outlined = false;
        this.iconStroke = 2;
        // Ring properties
        this.centerX = 12;
        this.centerY = 12;
        // Outer ring
        this.outerRadiusLarge = 10;
        this.rv = rangeValue;
    }
    /**
     * @return {?}
     */
    getPath() {
        return `M 12,12 H 24 A 12,12,0,${this.rv(this.percent, 0, 100) >= 50 ? 1 : 0},1,${getCoordinates(this.rv(this.percent, 0, 100))['x']},${getCoordinates(this.rv(this.percent, 0, 100))['y']}Z`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
        this.innerRadiusLarge = 10 - this.iconStroke;
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }
        this.outlineBase = `
  M ${this.centerX} ${this.centerY - this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY - this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY + this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY - this.innerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY - this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusSmall}
  Z
  M ${this.centerX} ${this.centerY - this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY + this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY - this.innerRadiusSmall}
  Z
`;
        this.twoToneBase = `
M ${this.centerX} ${this.centerY - this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusLarge}
Z
`;
        this.clipPath = `
M12,2
A10,10,0,1,0,22,12,
10,10,0,0,0,12,2
Z
m0,${20 - this.stroke} 
A ${10 - this.stroke},${10 - this.stroke},0,1,1,${22 - this.stroke},12,
${10 - this.stroke},${10 - this.stroke},0,0,1,12,${22 - this.stroke}
Z
`;
    }
}
PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'pie-progress',
                template: `
    <svg [attr.height]="size+'px'" 
    [attr.width]="size+'px'" 
    x="0px" y="0px" 
    viewBox="0 0 24 24" 
    style="transform: rotate(-.25turn)">

      <clipPath [attr.id]="'pxb-donut-clip-'+stroke">
        <path [attr.d]="clipPath"/>
      </clipPath>
      <path [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'"
      [attr.fill]="color || 'currentColor'" 
      [attr.fill-opacity]="outlined || percent >= 100 ? '1' : '0.3'"
      [attr.d]="outlined ? outlineBase : twoToneBase"
    />
    <path *ngIf="rv(percent, 0, 100) > 0 && rv(percent, 0, 100) < 100" 
    [attr.fill]="color || 'currentColor'" 
    [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" 
    [attr.d]= "getPath()"  />

      <circle *ngIf="rv(percent, 0, 100) === 100 && outlined" [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" cx="12" cy="12" r="10" [attr.fill]="color || 'currentColor'"></circle>
      
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color', 'ring', 'outlined']
            },] },
];
/** @nocollapse */
PieComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    PieComponent.prototype.percent;
    /** @type {?} */
    PieComponent.prototype.size;
    /** @type {?} */
    PieComponent.prototype.color;
    /** @type {?} */
    PieComponent.prototype.ring;
    /** @type {?} */
    PieComponent.prototype.outlined;
    /** @type {?} */
    PieComponent.prototype.outlineBase;
    /** @type {?} */
    PieComponent.prototype.twoToneBase;
    /** @type {?} */
    PieComponent.prototype.clipPath;
    /** @type {?} */
    PieComponent.prototype.iconStroke;
    /** @type {?} */
    PieComponent.prototype.stroke;
    /** @type {?} */
    PieComponent.prototype.centerX;
    /** @type {?} */
    PieComponent.prototype.centerY;
    /** @type {?} */
    PieComponent.prototype.outerRadiusLarge;
    /** @type {?} */
    PieComponent.prototype.innerRadiusLarge;
    /** @type {?} */
    PieComponent.prototype.outerRadiusSmall;
    /** @type {?} */
    PieComponent.prototype.innerRadiusSmall;
    /** @type {?} */
    PieComponent.prototype.rv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvIiwic291cmNlcyI6WyJsaWIvcGllL3BpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBK0IxRCxNQUFNLE9BQU8sWUFBWTtJQTBCdkI7UUF6QkEsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUN0QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUkxQixlQUFVLEdBQVcsQ0FBQyxDQUFDOztRQUt2QixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQzs7UUFHYixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUE2RHRCLE9BQUUsR0FBRyxVQUFVLENBQUM7SUFyREEsQ0FBQzs7OztJQUNqQixPQUFPO1FBQ0wsT0FBTywwQkFBMEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFBO0lBQy9MLENBQUM7Ozs7SUFDRCxRQUFRO0lBRVIsQ0FBQzs7OztJ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SUFHakIsd0NBQWlCOztJQUNqQix3Q0FBaUI7O0lBd0RqQiwwQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlLCBnZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgXG4gICAgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgXG4gICAgeD1cIjBweFwiIHk9XCIwcHhcIiBcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgXG4gICAgc3R5bGU9XCJ0cmFuc2Zvcm06IHJvdGF0ZSgtLjI1dHVybilcIj5cblxuICAgICAgPGNsaXBQYXRoIFthdHRyLmlkXT1cIidweGItZG9udXQtY2xpcC0nK3N0cm9rZVwiPlxuICAgICAgICA8cGF0aCBbYXR0ci5kXT1cImNsaXBQYXRoXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxwYXRoIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIlxuICAgICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFxuICAgICAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIm91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwID8gJzEnIDogJzAuMydcIlxuICAgICAgW2F0dHIuZF09XCJvdXRsaW5lZCA/IG91dGxpbmVCYXNlIDogdHdvVG9uZUJhc2VcIlxuICAgIC8+XG4gICAgPHBhdGggKm5nSWY9XCJydihwZXJjZW50LCAwLCAxMDApID4gMCAmJiBydihwZXJjZW50LCAwLCAxMDApIDwgMTAwXCIgXG4gICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFxuICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBcbiAgICBbYXR0ci5kXT0gXCJnZXRQYXRoKClcIiAgLz5cblxuICAgICAgPGNpcmNsZSAqbmdJZj1cInJ2KHBlcmNlbnQsIDAsIDEwMCkgPT09IDEwMCAmJiBvdXRsaW5lZFwiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj48L2NpcmNsZT5cbiAgICAgIFxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ3JpbmcnLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50OiBudW1iZXIgPSAxMDA7XG4gIHNpemU6IG51bWJlciA9IDI0O1xuICBjb2xvcjogc3RyaW5nO1xuICByaW5nOiBudW1iZXIgPSAxMDtcbiAgb3V0bGluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb3V0bGluZUJhc2U6IHN0cmluZztcbiAgdHdvVG9uZUJhc2U6IHN0cmluZztcbiAgY2xpcFBhdGg6IHN0cmluZztcbiAgaWNvblN0cm9rZTogbnVtYmVyID0gMjtcbiAgc3Ryb2tlOiBudW1iZXI7XG5cblxuICAvLyBSaW5nIHByb3BlcnRpZXNcbiAgY2VudGVyWCA9IDEyO1xuICBjZW50ZXJZID0gMTI7XG5cbiAgLy8gT3V0ZXIgcmluZ1xuICBvdXRlclJhZGl1c0xhcmdlID0gMTA7XG4gIGlubmVyUmFkaXVzTGFyZ2U7XG5cbiAgLy8gSW5uZXIgUmluZ1xuICBvdXRlclJhZGl1c1NtYWxsO1xuICBpbm5lclJhZGl1c1NtYWxsO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gYE0gMTIsMTIgSCAyNCBBIDEyLDEyLDAsJHt0aGlzLnJ2KHRoaXMucGVyY2VudCwgMCwgMTAwKSA+PSA1MCA/IDEgOiAwfSwxLCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5ydih0aGlzLnBlcmNlbnQsIDAsIDEwMCkpWyd4J119LCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5ydih0aGlzLnBlcmNlbnQsIDAsIDEwMCkpWyd5J119WmBcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc3Ryb2tlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5vdXRsaW5lZCA/IE1hdGgubWF4KHRoaXMuc3Ryb2tlLCAyICogdGhpcy5pY29uU3Ryb2tlICsgMSkgOiB0aGlzLnN0cm9rZTtcbiAgICB0aGlzLmlubmVyUmFkaXVzTGFyZ2UgPSAxMCAtIHRoaXMuaWNvblN0cm9rZTtcbiAgICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlICsgdGhpcy5pY29uU3Ryb2tlO1xuICAgIHRoaXMuaW5uZXJSYWRpdXNTbWFsbCA9IDEwIC0gdGhpcy5zdHJva2U7XG4gICAgaWYgKHRoaXMuaW5uZXJSYWRpdXNTbWFsbCA9PT0gMCkge1xuICAgICAgdGhpcy5vdXRlclJhZGl1c1NtYWxsID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLm91dGxpbmVCYXNlID0gYFxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSArIHRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSArIHRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSArIHRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSArIHRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgWlxuYDtcbiAgICB0aGlzLnR3b1RvbmVCYXNlID0gYFxuTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5BICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZICsgdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cblpcbmA7XG4gICAgdGhpcy5jbGlwUGF0aCA9IGBcbk0xMiwyXG5BMTAsMTAsMCwxLDAsMjIsMTIsXG4xMCwxMCwwLDAsMCwxMiwyXG5aXG5tMCwkezIwIC0gdGhpcy5zdHJva2V9IFxuQSAkezEwIC0gdGhpcy5zdHJva2V9LCR7MTAgLSB0aGlzLnN0cm9rZX0sMCwxLDEsJHsyMiAtIHRoaXMuc3Ryb2tlfSwxMixcbiR7MTAgLSB0aGlzLnN0cm9rZX0sJHsxMCAtIHRoaXMuc3Ryb2tlfSwwLDAsMSwxMiwkezIyIC0gdGhpcy5zdHJva2V9XG5aXG5gXG4gIH1cblxuICBydiA9IHJhbmdlVmFsdWU7XG5cbn1cblxuXG4iXX0=