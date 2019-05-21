/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { getCoordinates } from '../utilities';
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
    }
    /**
     * @return {?}
     */
    getPath() {
        return `M 12,12 H 24 A 12,12,0,${this.percent >= 50 ? 1 : 0},1,${getCoordinates(this.percent)['x']},${getCoordinates(this.percent)['y']}Z`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    <path *ngIf="percent > 0 && percent < 100" 
    [attr.fill]="color || 'currentColor'" 
    [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" 
    [attr.d]= "getPath()"  />

      <circle *ngIf="percent === 100 && outlined" [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" cx="12" cy="12" r="10" [attr.fill]="color || 'currentColor'"></circle>
      
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvIiwic291cmNlcyI6WyJsaWIvcGllL3BpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQStCMUQsTUFBTSxPQUFPLFlBQVk7SUEwQnZCO1FBekJBLFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVsQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFJMUIsZUFBVSxHQUFHLENBQUMsQ0FBQzs7UUFLZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQzs7UUFHYixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFRTixDQUFDOzs7O0lBQ25CLE9BQU87UUFDTCxPQUFPLDBCQUEwQixJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUE7SUFDNUksQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFDOUI7WUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBR0QsSUFBSSxDQUFDLFdBQVcsR0FBRztNQUNmLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCO01BQ2xELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLFVBQVUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0I7TUFDMUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsVUFBVSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQjs7TUFFMUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0I7TUFDbEQsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsVUFBVSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQjtNQUMxRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixVQUFVLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCOztNQUUxRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQjtNQUNsRCxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixVQUFVLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCO01BQzFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLFVBQVUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0I7O01BRTFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCO01BQ2xELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLFVBQVUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0I7TUFDMUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsVUFBVSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQjs7Q0FFL0csQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUk7SUFDaEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0I7SUFDbEQsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsVUFBVSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQjtJQUMxRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixVQUFVLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCOztDQUU3RyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRzs7Ozs7S0FLWCxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU07SUFDZixFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sVUFBVSxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU07RUFDMUQsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLGFBQWEsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNOztDQUU1RCxDQUFBO0lBQ0MsQ0FBQzs7O1lBekdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO2FBQ3pEOzs7Ozs7SUFFQywrQkFBc0I7O0lBQ3RCLDRCQUFrQjs7SUFDbEIsNkJBQWM7O0lBQ2QsNEJBQWtCOztJQUNsQixnQ0FBMEI7O0lBQzFCLG1DQUFZOztJQUNaLG1DQUFZOztJQUNaLGdDQUFTOztJQUNULGtDQUFlOztJQUNmLDhCQUFPOztJQUlQLCtCQUFhOztJQUNiLCtCQUFhOztJQUdiLHdDQUFzQjs7SUFDdEIsd0NBQWlCOztJQUdqQix3Q0FBaUI7O0lBQ2pCLHdDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlLCBnZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgXG4gICAgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgXG4gICAgeD1cIjBweFwiIHk9XCIwcHhcIiBcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgXG4gICAgc3R5bGU9XCJ0cmFuc2Zvcm06IHJvdGF0ZSgtLjI1dHVybilcIj5cblxuICAgICAgPGNsaXBQYXRoIFthdHRyLmlkXT1cIidweGItZG9udXQtY2xpcC0nK3N0cm9rZVwiPlxuICAgICAgICA8cGF0aCBbYXR0ci5kXT1cImNsaXBQYXRoXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxwYXRoIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIlxuICAgICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFxuICAgICAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIm91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwID8gJzEnIDogJzAuMydcIlxuICAgICAgW2F0dHIuZF09XCJvdXRsaW5lZCA/IG91dGxpbmVCYXNlIDogdHdvVG9uZUJhc2VcIlxuICAgIC8+XG4gICAgPHBhdGggKm5nSWY9XCJwZXJjZW50ID4gMCAmJiBwZXJjZW50IDwgMTAwXCIgXG4gICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFxuICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBcbiAgICBbYXR0ci5kXT0gXCJnZXRQYXRoKClcIiAgLz5cblxuICAgICAgPGNpcmNsZSAqbmdJZj1cInBlcmNlbnQgPT09IDEwMCAmJiBvdXRsaW5lZFwiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj48L2NpcmNsZT5cbiAgICAgIFxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ3JpbmcnLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50OiBudW1iZXIgPSAxMDA7XG4gIHNpemU6IG51bWJlciA9IDI0O1xuICBjb2xvcjogc3RyaW5nO1xuICByaW5nOiBudW1iZXIgPSAxMDtcbiAgb3V0bGluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb3V0bGluZUJhc2U7XG4gIHR3b1RvbmVCYXNlO1xuICBjbGlwUGF0aDtcbiAgaWNvblN0cm9rZSA9IDI7XG4gIHN0cm9rZTtcbiAgXG5cbiAgLy8gUmluZyBwcm9wZXJ0aWVzXG4gIGNlbnRlclggPSAxMjtcbiAgY2VudGVyWSA9IDEyO1xuXG4gIC8vIE91dGVyIHJpbmdcbiAgb3V0ZXJSYWRpdXNMYXJnZSA9IDEwO1xuICBpbm5lclJhZGl1c0xhcmdlO1xuXG4gIC8vIElubmVyIFJpbmdcbiAgb3V0ZXJSYWRpdXNTbWFsbDtcbiAgaW5uZXJSYWRpdXNTbWFsbDtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbmdldFBhdGgoKXtcbiAgcmV0dXJuIGBNIDEyLDEyIEggMjQgQSAxMiwxMiwwLCR7dGhpcy5wZXJjZW50ID49IDUwID8gMSA6IDB9LDEsJHtnZXRDb29yZGluYXRlcyh0aGlzLnBlcmNlbnQpWyd4J119LCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5wZXJjZW50KVsneSddfVpgXG59XG5uZ09uSW5pdCgpIHtcbiAgdGhpcy5zdHJva2UgPSAgTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICB0aGlzLnN0cm9rZSA9IHRoaXMub3V0bGluZWQgPyBNYXRoLm1heCh0aGlzLnN0cm9rZSwgMiAqIHRoaXMuaWNvblN0cm9rZSArIDEpIDogdGhpcy5zdHJva2U7XG4gIHRoaXMuaW5uZXJSYWRpdXNMYXJnZSA9IDEwIC0gdGhpcy5pY29uU3Ryb2tlO1xuICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlICsgdGhpcy5pY29uU3Ryb2tlO1xuICB0aGlzLmlubmVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlO1xuICBpZih0aGlzLmlubmVyUmFkaXVzU21hbGwgPT09IDApXG4gIHtcbiAgICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAwO1xuICB9XG4gXG4gXG4gIHRoaXMub3V0bGluZUJhc2UgPSBgXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c0xhcmdlfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9ICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c1NtYWxsfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9ICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c1NtYWxsfVxuICBaXG5gO1xudGhpcy50d29Ub25lQmFzZSA9ICBgXG5NICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5BICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbkEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuWlxuYDtcbnRoaXMuY2xpcFBhdGggPSBgXG5NMTIsMlxuQTEwLDEwLDAsMSwwLDIyLDEyLFxuMTAsMTAsMCwwLDAsMTIsMlxuWlxubTAsJHsyMC10aGlzLnN0cm9rZX0gXG5BICR7MTAtdGhpcy5zdHJva2V9LCR7MTAtdGhpcy5zdHJva2V9LDAsMSwxLCR7MjItdGhpcy5zdHJva2V9LDEyLFxuJHsxMC10aGlzLnN0cm9rZX0sJHsxMC10aGlzLnN0cm9rZX0sMCwwLDEsMTIsJHsyMi10aGlzLnN0cm9rZX1cblpcbmBcbiAgfVxuXG5cbn1cblxuXG4iXX0=