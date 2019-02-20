/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { rangeValue, getCoordinates } from '../utilities';
var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.percent = 100;
        this.size = 24;
        this.ring = 10;
        this.rv = rangeValue;
        this.gc = getCoordinates;
    }
    /**
     * @return {?}
     */
    PieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
    };
    PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pie-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"transform: rotate(-.25turn)\">\n      <clipPath [attr.id]=\"'pxb-donut-clip-'+stroke\">\n        <path [attr.d]=\"'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,' + (20-stroke) +'A' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,1,1,' + (22-stroke) + ',12,' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,0,1,12,' + (22-stroke) + 'Z'\"/>\n      </clipPath>\n      <circle [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" cx=\"12\" cy=\"12\" r=\"10\" [attr.fill]=\"color || 'currentColor'\" [attr.fill-opacity]=\"percent >= 100 ? '1' : '0.3'\"></circle>\n      <path *ngIf=\"rv(percent, 0, 100) > 0 && rv(percent, 0, 100) < 100\" [attr.fill]=\"color || 'currentColor'\" [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" [attr.d]=\"'M 12,12 H 24 A 12,12,0,'+(rv(percent, 0, 100)>=50?1:0)+',1,'+gc(rv(percent, 0, 100))['x']+','+gc(rv(percent, 0, 100))['y']+'Z'\" />\n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color', 'ring']
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
    PieComponent.prototype.stroke;
    /** @type {?} */
    PieComponent.prototype.rv;
    /** @type {?} */
    PieComponent.prototype.gc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvIiwic291cmNlcyI6WyJsaWIvcGllL3BpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUQ7SUFvQkU7UUFMQSxZQUFPLEdBQVUsR0FBRyxDQUFDO1FBQ3JCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQU9qQixPQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ2hCLE9BQUUsR0FBRyxjQUFjLENBQUM7SUFOSixDQUFDOzs7O0lBRWpCLCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwrK0JBUVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUM3Qzs7OztJQWNELG1CQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FiWSxZQUFZOzs7SUFDdkIsK0JBQXFCOztJQUNyQiw0QkFBaUI7O0lBQ2pCLDZCQUFhOztJQUNiLDRCQUFpQjs7SUFDakIsOEJBQWM7O0lBTWQsMEJBQWdCOztJQUNoQiwwQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSwgZ2V0Q29vcmRpbmF0ZXMgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaWUtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwidHJhbnNmb3JtOiByb3RhdGUoLS4yNXR1cm4pXCI+XG4gICAgICA8Y2xpcFBhdGggW2F0dHIuaWRdPVwiJ3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlXCI+XG4gICAgICAgIDxwYXRoIFthdHRyLmRdPVwiJ00xMiwyQTEwLDEwLDAsMSwwLDIyLDEyLDEwLDEwLDAsMCwwLDEyLDJabTAsJyArICgyMC1zdHJva2UpICsnQScgKyAoMjAtMipzdHJva2UpLzIgKyAnLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLDAsMSwxLCcgKyAoMjItc3Ryb2tlKSArICcsMTIsJyArICgyMC0yKnN0cm9rZSkvMiArICcsJyArICgyMC0yKnN0cm9rZSkvMiArICcsMCwwLDEsMTIsJyArICgyMi1zdHJva2UpICsgJ1onXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxjaXJjbGUgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLmZpbGwtb3BhY2l0eV09XCJwZXJjZW50ID49IDEwMCA/ICcxJyA6ICcwLjMnXCI+PC9jaXJjbGU+XG4gICAgICA8cGF0aCAqbmdJZj1cInJ2KHBlcmNlbnQsIDAsIDEwMCkgPiAwICYmIHJ2KHBlcmNlbnQsIDAsIDEwMCkgPCAxMDBcIiBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIFthdHRyLmRdPVwiJ00gMTIsMTIgSCAyNCBBIDEyLDEyLDAsJysocnYocGVyY2VudCwgMCwgMTAwKT49NTA/MTowKSsnLDEsJytnYyhydihwZXJjZW50LCAwLCAxMDApKVsneCddKycsJytnYyhydihwZXJjZW50LCAwLCAxMDApKVsneSddKydaJ1wiIC8+XG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAncmluZyddXG59KVxuZXhwb3J0IGNsYXNzIFBpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6bnVtYmVyID0gMTAwO1xuICBzaXplOm51bWJlciA9IDI0O1xuICBjb2xvcjpzdHJpbmc7XG4gIHJpbmc6bnVtYmVyID0gMTA7XG4gIHN0cm9rZTpudW1iZXI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHJva2UgPSBNYXRoLm1heCgxLE1hdGgubWluKDEwLCBNYXRoLnJvdW5kKHRoaXMucmluZykpKTtcbiAgfVxuICBydiA9IHJhbmdlVmFsdWU7XG4gIGdjID0gZ2V0Q29vcmRpbmF0ZXM7XG59XG4iXX0=