/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { getCoordinates } from '../utilities';
var PieComponent = /** @class */ (function () {
    function PieComponent() {
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
    PieComponent.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return "M 12,12 H 24 A 12,12,0," + (this.percent >= 50 ? 1 : 0) + ",1," + getCoordinates(this.percent)['x'] + "," + getCoordinates(this.percent)['y'] + "Z";
    };
    /**
     * @return {?}
     */
    PieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
        this.innerRadiusLarge = 10 - this.iconStroke;
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }
        this.outlineBase = "\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  Z\n";
        this.twoToneBase = "\nM " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nZ\n";
        this.clipPath = "\nM12,2\nA10,10,0,1,0,22,12,\n10,10,0,0,0,12,2\nZ\nm0," + (20 - this.stroke) + " \nA " + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,1,1," + (22 - this.stroke) + ",12,\n" + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,0,1,12," + (22 - this.stroke) + "\nZ\n";
    };
    PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pie-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" \n    [attr.width]=\"size+'px'\" \n    x=\"0px\" y=\"0px\" \n    viewBox=\"0 0 24 24\" \n    style=\"transform: rotate(-.25turn)\">\n\n      <clipPath [attr.id]=\"'pxb-donut-clip-'+stroke\">\n        <path [attr.d]=\"clipPath\"/>\n      </clipPath>\n      <path [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\"\n      [attr.fill]=\"color || 'currentColor'\" \n      [attr.fill-opacity]=\"outlined || percent >= 100 ? '1' : '0.3'\"\n      [attr.d]=\"outlined ? outlineBase : twoToneBase\"\n    />\n    <path *ngIf=\"percent > 0 && percent < 100\" \n    [attr.fill]=\"color || 'currentColor'\" \n    [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" \n    [attr.d]= \"getPath()\"  />\n\n      <circle *ngIf=\"percent === 100 && outlined\" [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" cx=\"12\" cy=\"12\" r=\"10\" [attr.fill]=\"color || 'currentColor'\"></circle>\n      \n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color', 'ring', 'outlined']
                },] },
    ];
    /** @nocollapse */
    PieComponent.ctorParameters = function () { return []; };
    return PieComponent;
}());
export { PieComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvIiwic291cmNlcyI6WyJsaWIvcGllL3BpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxRDtJQXVERTtRQXpCQSxZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFFbEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSTFCLGVBQVUsR0FBRyxDQUFDLENBQUM7O1FBS2YsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7O1FBR2IscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBUU4sQ0FBQzs7OztJQUNuQiw4QkFBTzs7O0lBQVA7UUFDRSxPQUFPLDZCQUEwQixJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUE7SUFDNUksQ0FBQzs7OztJQUNELCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUM5QjtZQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFHRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQ2YsSUFBSSxDQUFDLE9BQU8sVUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0IsZUFDbEQsSUFBSSxDQUFDLGdCQUFnQixTQUFJLElBQUksQ0FBQyxnQkFBZ0IsZUFBVSxJQUFJLENBQUMsT0FBTyxVQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixlQUMxRyxJQUFJLENBQUMsZ0JBQWdCLFNBQUksSUFBSSxDQUFDLGdCQUFnQixlQUFVLElBQUksQ0FBQyxPQUFPLFVBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCLG9CQUUxRyxJQUFJLENBQUMsT0FBTyxVQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixlQUNsRCxJQUFJLENBQUMsZ0JBQWdCLFNBQUksSUFBSSxDQUFDLGdCQUFnQixlQUFVLElBQUksQ0FBQyxPQUFPLFVBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCLGVBQzFHLElBQUksQ0FBQyxnQkFBZ0IsU0FBSSxJQUFJLENBQUMsZ0JBQWdCLGVBQVUsSUFBSSxDQUFDLE9BQU8sVUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0Isb0JBRTFHLElBQUksQ0FBQyxPQUFPLFVBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCLGVBQ2xELElBQUksQ0FBQyxnQkFBZ0IsU0FBSSxJQUFJLENBQUMsZ0JBQWdCLGVBQVUsSUFBSSxDQUFDLE9BQU8sVUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0IsZUFDMUcsSUFBSSxDQUFDLGdCQUFnQixTQUFJLElBQUksQ0FBQyxnQkFBZ0IsZUFBVSxJQUFJLENBQUMsT0FBTyxVQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixvQkFFMUcsSUFBSSxDQUFDLE9BQU8sVUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0IsZUFDbEQsSUFBSSxDQUFDLGdCQUFnQixTQUFJLElBQUksQ0FBQyxnQkFBZ0IsZUFBVSxJQUFJLENBQUMsT0FBTyxVQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixlQUMxRyxJQUFJLENBQUMsZ0JBQWdCLFNBQUksSUFBSSxDQUFDLGdCQUFnQixlQUFVLElBQUksQ0FBQyxPQUFPLFVBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCLGFBRS9HLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFJLFNBQ2hCLElBQUksQ0FBQyxPQUFPLFVBQUksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZ0JBQWdCLGFBQ2xELElBQUksQ0FBQyxnQkFBZ0IsU0FBSSxJQUFJLENBQUMsZ0JBQWdCLGVBQVUsSUFBSSxDQUFDLE9BQU8sVUFBSSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxnQkFBZ0IsYUFDMUcsSUFBSSxDQUFDLGdCQUFnQixTQUFJLElBQUksQ0FBQyxnQkFBZ0IsZUFBVSxJQUFJLENBQUMsT0FBTyxVQUFJLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixXQUU3RyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyw0REFLWCxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sZUFDZixFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sV0FBSSxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0saUJBQVUsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLGdCQUMxRCxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sV0FBSSxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sb0JBQWEsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLFdBRTVELENBQUE7SUFDQyxDQUFDOztnQkF6R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsazdCQXVCVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtvQkFDVixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO2lCQUN6RDs7OztJQWdGRCxtQkFBQztDQUFBLEFBNUdELElBNEdDO1NBL0VZLFlBQVk7OztJQUN2QiwrQkFBc0I7O0lBQ3RCLDRCQUFrQjs7SUFDbEIsNkJBQWM7O0lBQ2QsNEJBQWtCOztJQUNsQixnQ0FBMEI7O0lBQzFCLG1DQUFZOztJQUNaLG1DQUFZOztJQUNaLGdDQUFTOztJQUNULGtDQUFlOztJQUNmLDhCQUFPOztJQUlQLCtCQUFhOztJQUNiLCtCQUFhOztJQUdiLHdDQUFzQjs7SUFDdEIsd0NBQWlCOztJQUdqQix3Q0FBaUI7O0lBQ2pCLHdDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlLCBnZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgXG4gICAgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgXG4gICAgeD1cIjBweFwiIHk9XCIwcHhcIiBcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgXG4gICAgc3R5bGU9XCJ0cmFuc2Zvcm06IHJvdGF0ZSgtLjI1dHVybilcIj5cblxuICAgICAgPGNsaXBQYXRoIFthdHRyLmlkXT1cIidweGItZG9udXQtY2xpcC0nK3N0cm9rZVwiPlxuICAgICAgICA8cGF0aCBbYXR0ci5kXT1cImNsaXBQYXRoXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxwYXRoIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIlxuICAgICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFxuICAgICAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIm91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwID8gJzEnIDogJzAuMydcIlxuICAgICAgW2F0dHIuZF09XCJvdXRsaW5lZCA/IG91dGxpbmVCYXNlIDogdHdvVG9uZUJhc2VcIlxuICAgIC8+XG4gICAgPHBhdGggKm5nSWY9XCJwZXJjZW50ID4gMCAmJiBwZXJjZW50IDwgMTAwXCIgXG4gICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFxuICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBcbiAgICBbYXR0ci5kXT0gXCJnZXRQYXRoKClcIiAgLz5cblxuICAgICAgPGNpcmNsZSAqbmdJZj1cInBlcmNlbnQgPT09IDEwMCAmJiBvdXRsaW5lZFwiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj48L2NpcmNsZT5cbiAgICAgIFxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ3JpbmcnLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50OiBudW1iZXIgPSAxMDA7XG4gIHNpemU6IG51bWJlciA9IDI0O1xuICBjb2xvcjogc3RyaW5nO1xuICByaW5nOiBudW1iZXIgPSAxMDtcbiAgb3V0bGluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb3V0bGluZUJhc2U7XG4gIHR3b1RvbmVCYXNlO1xuICBjbGlwUGF0aDtcbiAgaWNvblN0cm9rZSA9IDI7XG4gIHN0cm9rZTtcbiAgXG5cbiAgLy8gUmluZyBwcm9wZXJ0aWVzXG4gIGNlbnRlclggPSAxMjtcbiAgY2VudGVyWSA9IDEyO1xuXG4gIC8vIE91dGVyIHJpbmdcbiAgb3V0ZXJSYWRpdXNMYXJnZSA9IDEwO1xuICBpbm5lclJhZGl1c0xhcmdlO1xuXG4gIC8vIElubmVyIFJpbmdcbiAgb3V0ZXJSYWRpdXNTbWFsbDtcbiAgaW5uZXJSYWRpdXNTbWFsbDtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbmdldFBhdGgoKXtcbiAgcmV0dXJuIGBNIDEyLDEyIEggMjQgQSAxMiwxMiwwLCR7dGhpcy5wZXJjZW50ID49IDUwID8gMSA6IDB9LDEsJHtnZXRDb29yZGluYXRlcyh0aGlzLnBlcmNlbnQpWyd4J119LCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5wZXJjZW50KVsneSddfVpgXG59XG5uZ09uSW5pdCgpIHtcbiAgdGhpcy5zdHJva2UgPSAgTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICB0aGlzLnN0cm9rZSA9IHRoaXMub3V0bGluZWQgPyBNYXRoLm1heCh0aGlzLnN0cm9rZSwgMiAqIHRoaXMuaWNvblN0cm9rZSArIDEpIDogdGhpcy5zdHJva2U7XG4gIHRoaXMuaW5uZXJSYWRpdXNMYXJnZSA9IDEwIC0gdGhpcy5pY29uU3Ryb2tlO1xuICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlICsgdGhpcy5pY29uU3Ryb2tlO1xuICB0aGlzLmlubmVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlO1xuICBpZih0aGlzLmlubmVyUmFkaXVzU21hbGwgPT09IDApXG4gIHtcbiAgICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAwO1xuICB9XG4gXG4gXG4gIHRoaXMub3V0bGluZUJhc2UgPSBgXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c0xhcmdlfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9ICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c1NtYWxsfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9ICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c1NtYWxsfVxuICBaXG5gO1xudGhpcy50d29Ub25lQmFzZSA9ICBgXG5NICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5BICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbkEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuWlxuYDtcbnRoaXMuY2xpcFBhdGggPSBgXG5NMTIsMlxuQTEwLDEwLDAsMSwwLDIyLDEyLFxuMTAsMTAsMCwwLDAsMTIsMlxuWlxubTAsJHsyMC10aGlzLnN0cm9rZX0gXG5BICR7MTAtdGhpcy5zdHJva2V9LCR7MTAtdGhpcy5zdHJva2V9LDAsMSwxLCR7MjItdGhpcy5zdHJva2V9LDEyLFxuJHsxMC10aGlzLnN0cm9rZX0sJHsxMC10aGlzLnN0cm9rZX0sMCwwLDEsMTIsJHsyMi10aGlzLnN0cm9rZX1cblpcbmBcbiAgfVxuXG5cbn1cblxuXG4vLyBleHBvcnQgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAocGVyY2VudCwgcmFkaXVzID0gMTIpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICB4OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5jb3MoIChwZXJjZW50LzEwMCkgKiAyKk1hdGguUEkpICksXG4vLyAgICAgICAgIHk6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLnNpbiggKHBlcmNlbnQvMTAwKSAqIDIqTWF0aC5QSSkgKVxuLy8gICAgIH1cbi8vIH0iXX0=