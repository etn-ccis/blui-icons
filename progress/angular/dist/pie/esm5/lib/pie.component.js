/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.percent = 100;
        this.size = 24;
        this.ring = 10;
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
    /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    PieComponent.prototype.rangeValue = /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function (value, min, max) {
        return Math.max(min, Math.min(value, max));
    };
    /**
     * @param {?} percent
     * @return {?}
     */
    PieComponent.prototype.getCoordinates = /**
     * @param {?} percent
     * @return {?}
     */
    function (percent) {
        /** @type {?} */
        var radius = 12;
        /** @type {?} */
        var degrees = percent * 3.6;
        return {
            x: radius + (radius * Math.cos((Math.PI / 180) * (degrees))),
            y: radius + (radius * Math.sin((Math.PI / 180) * (degrees)))
        };
    };
    PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pie-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enableBackground: 'new 0 0 24 24'; xmlSpace:'preserve'; transform:'rotate(-.25turn)'\">\n      <clipPath [attr.id]=\"'pxb-donut-clip-'+stroke\">\n        <path [attr.d]=\"'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,' + (20-stroke) +'A' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,1,1,' + (22-stroke) + ',12,' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,0,1,12,' + (22-stroke) + 'Z'\"/>\n      </clipPath>\n      <circle [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" cx=\"12\" cy=\"12\" r=\"10\" [attr.fill]=\"color || 'currentColor'\" [attr.fill-opacity]=\"percent >= 100 ? '1' : '0.3'\"></circle>\n      <path *ngIf=\"rangeValue(percent, 0, 100) > 0 && rangeValue(percent, 0, 100) < 100\" [attr.fill]=\"color || 'currentColor'\" [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" [attr.d]=\"'M 12,12 H 24 A 12,12,0,'+(rangeValue(percent, 0, 100)>=50?1:0)+',1,'+getCoordinates(rangeValue(percent, 0, 100))['x']+','+getCoordinates(rangeValue(percent, 0, 100))['y']+'Z'\" />\n    </svg>\n  ",
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpZS8iLCJzb3VyY2VzIjpbImxpYi9waWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztJQXNCaEQ7dUJBTGlCLEdBQUc7b0JBQ04sRUFBRTtvQkFFRixFQUFFO0tBRUM7Ozs7SUFFakIsK0JBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0Q7Ozs7Ozs7SUFDRCxpQ0FBVTs7Ozs7O0lBQVYsVUFBVyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7S0FDekM7Ozs7O0lBQ0QscUNBQWM7Ozs7SUFBZCxVQUFlLE9BQU87O1FBQ3BCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQzs7UUFDbEIsSUFBTSxPQUFPLEdBQUcsT0FBTyxHQUFDLEdBQUcsQ0FBQztRQUM1QixNQUFNLENBQUM7WUFDTCxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM1RCxDQUFBO0tBQ0Y7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSx3bUNBUVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUM3Qzs7Ozt1QkFmRDs7U0FnQmEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGVCYWNrZ3JvdW5kOiAnbmV3IDAgMCAyNCAyNCc7IHhtbFNwYWNlOidwcmVzZXJ2ZSc7IHRyYW5zZm9ybToncm90YXRlKC0uMjV0dXJuKSdcIj5cbiAgICAgIDxjbGlwUGF0aCBbYXR0ci5pZF09XCIncHhiLWRvbnV0LWNsaXAtJytzdHJva2VcIj5cbiAgICAgICAgPHBhdGggW2F0dHIuZF09XCInTTEyLDJBMTAsMTAsMCwxLDAsMjIsMTIsMTAsMTAsMCwwLDAsMTIsMlptMCwnICsgKDIwLXN0cm9rZSkgKydBJyArICgyMC0yKnN0cm9rZSkvMiArICcsJyArICgyMC0yKnN0cm9rZSkvMiArICcsMCwxLDEsJyArICgyMi1zdHJva2UpICsgJywxMiwnICsgKDIwLTIqc3Ryb2tlKS8yICsgJywnICsgKDIwLTIqc3Ryb2tlKS8yICsgJywwLDAsMSwxMiwnICsgKDIyLXN0cm9rZSkgKyAnWidcIi8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgICAgPGNpcmNsZSBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgW2F0dHIuZmlsbC1vcGFjaXR5XT1cInBlcmNlbnQgPj0gMTAwID8gJzEnIDogJzAuMydcIj48L2NpcmNsZT5cbiAgICAgIDxwYXRoICpuZ0lmPVwicmFuZ2VWYWx1ZShwZXJjZW50LCAwLCAxMDApID4gMCAmJiByYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkgPCAxMDBcIiBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIFthdHRyLmRdPVwiJ00gMTIsMTIgSCAyNCBBIDEyLDEyLDAsJysocmFuZ2VWYWx1ZShwZXJjZW50LCAwLCAxMDApPj01MD8xOjApKycsMSwnK2dldENvb3JkaW5hdGVzKHJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKSlbJ3gnXSsnLCcrZ2V0Q29vcmRpbmF0ZXMocmFuZ2VWYWx1ZShwZXJjZW50LCAwLCAxMDApKVsneSddKydaJ1wiIC8+XG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAncmluZyddXG59KVxuZXhwb3J0IGNsYXNzIFBpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6bnVtYmVyID0gMTAwO1xuICBzaXplOm51bWJlciA9IDI0O1xuICBjb2xvcjpzdHJpbmc7XG4gIHJpbmc6bnVtYmVyID0gMTA7XG4gIHN0cm9rZTpudW1iZXI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHJva2UgPSBNYXRoLm1heCgxLE1hdGgubWluKDEwLCBNYXRoLnJvdW5kKHRoaXMucmluZykpKTtcbiAgfVxuICByYW5nZVZhbHVlKHZhbHVlLCBtaW4sIG1heCl7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbixNYXRoLm1pbih2YWx1ZSxtYXgpKVxuICB9XG4gIGdldENvb3JkaW5hdGVzKHBlcmNlbnQpe1xuICAgIGNvbnN0IHJhZGl1cyA9IDEyO1xuICAgIGNvbnN0IGRlZ3JlZXMgPSBwZXJjZW50KjMuNjtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcmFkaXVzICsgKHJhZGl1cyAqIE1hdGguY29zKCAoTWF0aC5QSS8xODApICogKGRlZ3JlZXMpKSksXG4gICAgICB5OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5zaW4oIChNYXRoLlBJLzE4MCkgKiAoZGVncmVlcykpKVxuICAgIH1cbiAgfVxuXG59XG4iXX0=