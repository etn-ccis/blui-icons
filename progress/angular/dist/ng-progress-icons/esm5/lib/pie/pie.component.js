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
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.iconStroke = 2;
        // Ring properties
        this.centerX = 12;
        this.centerY = 12;
        // Outer ring
        this.outerRadiusLarge = 10;
        this.innerRadiusLarge = 10 - this.iconStroke;
        // Inner Ring
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
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
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }
        console.log(this.outlined);
        this.stroke = Math.max(this.stroke, 2 * this.iconStroke + 1);
        this.outlineBase = "\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  Z\n";
        this.twoToneBase = "\nM " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nZ\n";
        this.clipPath = "\nM12,2\nA10,10,0,1,0,22,12,\n10,10,0,0,0,12,2\nZ\nm0," + (20 - this.stroke) + " \nA " + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,1,1," + (22 - this.stroke) + ",12,\n" + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,0,1,12," + (22 - this.stroke) + "\nZ\n";
    };
    PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pie-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"transform: rotate(-.25turn)\">\n      <clipPath [attr.id]=\"'pxb-donut-clip-'+stroke\">\n        <path [attr.d]=\"clipPath\"/>\n      </clipPath>\n      <path [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\"\n      [attr.fill]=\"color || 'currentColor'\" \n      [attr.fill-opacity]=\"outlined || percent >= 100 ? '1' : '0.3'\"\n      [attr.d]=\"outlined ? outlineBase : twoToneBase\"\n    />\n    <path *ngIf=\"percent > 0 && percent < 100\" \n    [attr.fill]=\"color || 'currentColor'\" \n    [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" \n    [attr.d]= \"getPath()\"  />\n\n      <circle *ngIf=\"percent === 100 && outlined\" [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" cx=\"12\" cy=\"12\" r=\"10\" [attr.fill]=\"color || 'currentColor'\"></circle>\n      \n    </svg>\n  ",
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
    PieComponent.prototype.stroke;
    /** @type {?} */
    PieComponent.prototype.iconStroke;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvIiwic291cmNlcyI6WyJsaWIvcGllL3BpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxRDtJQW1ERTtRQTFCQSxZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFFbEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSzFCLFdBQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsZUFBVSxHQUFHLENBQUMsQ0FBQzs7UUFJZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQzs7UUFHYixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O1FBR3hDLHFCQUFnQixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEQscUJBQWdCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFHcEIsQ0FBQzs7OztJQUNuQiw4QkFBTzs7O0lBQVA7UUFDRSxPQUFPLDZCQUEwQixJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMs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ZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlLCBnZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJ0cmFuc2Zvcm06IHJvdGF0ZSgtLjI1dHVybilcIj5cbiAgICAgIDxjbGlwUGF0aCBbYXR0ci5pZF09XCIncHhiLWRvbnV0LWNsaXAtJytzdHJva2VcIj5cbiAgICAgICAgPHBhdGggW2F0dHIuZF09XCJjbGlwUGF0aFwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8cGF0aCBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCJcbiAgICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBcbiAgICAgIFthdHRyLmZpbGwtb3BhY2l0eV09XCJvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCA/ICcxJyA6ICcwLjMnXCJcbiAgICAgIFthdHRyLmRdPVwib3V0bGluZWQgPyBvdXRsaW5lQmFzZSA6IHR3b1RvbmVCYXNlXCJcbiAgICAvPlxuICAgIDxwYXRoICpuZ0lmPVwicGVyY2VudCA+IDAgJiYgcGVyY2VudCA8IDEwMFwiIFxuICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBcbiAgICBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgXG4gICAgW2F0dHIuZF09IFwiZ2V0UGF0aCgpXCIgIC8+XG5cbiAgICAgIDxjaXJjbGUgKm5nSWY9XCJwZXJjZW50ID09PSAxMDAgJiYgb3V0bGluZWRcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCI+PC9jaXJjbGU+XG4gICAgICBcbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdyaW5nJywgJ291dGxpbmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDogbnVtYmVyID0gMTAwO1xuICBzaXplOiBudW1iZXIgPSAyNDtcbiAgY29sb3I6IHN0cmluZztcbiAgcmluZzogbnVtYmVyID0gMTA7XG4gIG91dGxpbmVkOiBib29sZWFuID0gZmFsc2U7XG4gIG91dGxpbmVCYXNlO1xuICB0d29Ub25lQmFzZTtcbiAgY2xpcFBhdGg7XG5cbiAgc3Ryb2tlID0gTWF0aC5tYXgoMSxNYXRoLm1pbigxMCwgTWF0aC5yb3VuZCh0aGlzLnJpbmcpKSk7XG4gIGljb25TdHJva2UgPSAyO1xuICBcblxuICAvLyBSaW5nIHByb3BlcnRpZXNcbiAgY2VudGVyWCA9IDEyO1xuICBjZW50ZXJZID0gMTI7XG5cbiAgLy8gT3V0ZXIgcmluZ1xuICBvdXRlclJhZGl1c0xhcmdlID0gMTA7XG4gIGlubmVyUmFkaXVzTGFyZ2UgPSAxMCAtIHRoaXMuaWNvblN0cm9rZTtcblxuICAvLyBJbm5lciBSaW5nXG4gIG91dGVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlICsgdGhpcy5pY29uU3Ryb2tlO1xuICBpbm5lclJhZGl1c1NtYWxsID0gMTAgLSB0aGlzLnN0cm9rZTtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbmdldFBhdGgoKXtcbiAgcmV0dXJuIGBNIDEyLDEyIEggMjQgQSAxMiwxMiwwLCR7dGhpcy5wZXJjZW50ID49IDUwID8gMSA6IDB9LDEsJHtnZXRDb29yZGluYXRlcyh0aGlzLnBlcmNlbnQpWyd4J119LCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5wZXJjZW50KVsneSddfVpgXG59XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Ryb2tlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICAgIGlmKHRoaXMuaW5uZXJSYWRpdXNTbWFsbCA9PT0gMClcbiAge1xuICAgIHRoaXMub3V0ZXJSYWRpdXNTbWFsbCA9IDA7XG4gIH1cbiAgY29uc29sZS5sb2codGhpcy5vdXRsaW5lZCk7XG4gIHRoaXMuc3Ryb2tlID0gTWF0aC5tYXgodGhpcy5zdHJva2UsIDIgKiB0aGlzLmljb25TdHJva2UgKyAxKVxuICB0aGlzLm91dGxpbmVCYXNlID0gYFxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5pbm5lclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9ICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5vdXRlclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9ICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5pbm5lclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgWlxuYDtcbnRoaXMudHdvVG9uZUJhc2UgPSAgYFxuTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5BICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cblpcbmA7XG50aGlzLmNsaXBQYXRoID0gYFxuTTEyLDJcbkExMCwxMCwwLDEsMCwyMiwxMixcbjEwLDEwLDAsMCwwLDEyLDJcblpcbm0wLCR7MjAtdGhpcy5zdHJva2V9IFxuQSAkezEwLXRoaXMuc3Ryb2tlfSwkezEwLXRoaXMuc3Ryb2tlfSwwLDEsMSwkezIyLXRoaXMuc3Ryb2tlfSwxMixcbiR7MTAtdGhpcy5zdHJva2V9LCR7MTAtdGhpcy5zdHJva2V9LDAsMCwxLDEyLCR7MjItdGhpcy5zdHJva2V9XG5aXG5gXG4gIH1cblxuXG59XG4iXX0=