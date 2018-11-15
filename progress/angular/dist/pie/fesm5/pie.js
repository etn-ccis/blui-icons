import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PieService = /** @class */ (function () {
    function PieService() {
    }
    PieService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    PieService.ctorParameters = function () { return []; };
    /** @nocollapse */ PieService.ngInjectableDef = defineInjectable({ factory: function PieService_Factory() { return new PieService(); }, token: PieService, providedIn: "root" });
    return PieService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PieModule = /** @class */ (function () {
    function PieModule() {
    }
    PieModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [PieComponent],
                    exports: [PieComponent]
                },] },
    ];
    return PieModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { PieService, PieComponent, PieModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9waWUvbGliL3BpZS5zZXJ2aWNlLnRzIiwibmc6Ly9waWUvbGliL3BpZS5jb21wb25lbnQudHMiLCJuZzovL3BpZS9saWIvcGllLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBpZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaWUtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlQmFja2dyb3VuZDogJ25ldyAwIDAgMjQgMjQnOyB4bWxTcGFjZToncHJlc2VydmUnOyB0cmFuc2Zvcm06J3JvdGF0ZSgtLjI1dHVybiknXCI+XG4gICAgICA8Y2xpcFBhdGggW2F0dHIuaWRdPVwiJ3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlXCI+XG4gICAgICAgIDxwYXRoIFthdHRyLmRdPVwiJ00xMiwyQTEwLDEwLDAsMSwwLDIyLDEyLDEwLDEwLDAsMCwwLDEyLDJabTAsJyArICgyMC1zdHJva2UpICsnQScgKyAoMjAtMipzdHJva2UpLzIgKyAnLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLDAsMSwxLCcgKyAoMjItc3Ryb2tlKSArICcsMTIsJyArICgyMC0yKnN0cm9rZSkvMiArICcsJyArICgyMC0yKnN0cm9rZSkvMiArICcsMCwwLDEsMTIsJyArICgyMi1zdHJva2UpICsgJ1onXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxjaXJjbGUgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLmZpbGwtb3BhY2l0eV09XCJwZXJjZW50ID49IDEwMCA/ICcxJyA6ICcwLjMnXCI+PC9jaXJjbGU+XG4gICAgICA8cGF0aCAqbmdJZj1cInJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKSA+IDAgJiYgcmFuZ2VWYWx1ZShwZXJjZW50LCAwLCAxMDApIDwgMTAwXCIgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBbYXR0ci5kXT1cIidNIDEyLDEyIEggMjQgQSAxMiwxMiwwLCcrKHJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKT49NTA/MTowKSsnLDEsJytnZXRDb29yZGluYXRlcyhyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkpWyd4J10rJywnK2dldENvb3JkaW5hdGVzKHJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKSlbJ3knXSsnWidcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ3JpbmcnXVxufSlcbmV4cG9ydCBjbGFzcyBQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50Om51bWJlciA9IDEwMDtcbiAgc2l6ZTpudW1iZXIgPSAyNDtcbiAgY29sb3I6c3RyaW5nO1xuICByaW5nOm51bWJlciA9IDEwO1xuICBzdHJva2U6bnVtYmVyO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Ryb2tlID0gTWF0aC5tYXgoMSxNYXRoLm1pbigxMCwgTWF0aC5yb3VuZCh0aGlzLnJpbmcpKSk7XG4gIH1cbiAgcmFuZ2VWYWx1ZSh2YWx1ZSwgbWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4odmFsdWUsbWF4KSlcbiAgfVxuICBnZXRDb29yZGluYXRlcyhwZXJjZW50KXtcbiAgICBjb25zdCByYWRpdXMgPSAxMjtcbiAgICBjb25zdCBkZWdyZWVzID0gcGVyY2VudCozLjY7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLmNvcyggKE1hdGguUEkvMTgwKSAqIChkZWdyZWVzKSkpLFxuICAgICAgeTogcmFkaXVzICsgKHJhZGl1cyAqIE1hdGguc2luKCAoTWF0aC5QSS8xODApICogKGRlZ3JlZXMpKSlcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7ICBcbmltcG9ydCB7IFBpZUNvbXBvbmVudCB9IGZyb20gJy4vcGllLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGllQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BpZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUGllTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7cUJBSkQ7Ozs7Ozs7QUNBQTtJQXNCRTt1QkFMaUIsR0FBRztvQkFDTixFQUFFO29CQUVGLEVBQUU7S0FFQzs7OztJQUVqQiwrQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvRDs7Ozs7OztJQUNELGlDQUFVOzs7Ozs7SUFBVixVQUFXLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN4QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7S0FDekM7Ozs7O0lBQ0QscUNBQWM7Ozs7SUFBZCxVQUFlLE9BQU87O1FBQ3BCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQzs7UUFDbEIsSUFBTSxPQUFPLEdBQUcsT0FBTyxHQUFDLEdBQUcsQ0FBQztRQUM1QixPQUFPO1lBQ0wsQ0FBQyxFQUFFLE1BQU0sSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFFLE1BQU0sSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUQsQ0FBQTtLQUNGOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsd21DQVFUO29CQUNELE1BQU0sRUFBRSxFQUFFO29CQUNWLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztpQkFDN0M7Ozs7dUJBZkQ7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztvQkFWRDs7Ozs7Ozs7Ozs7Ozs7OyJ9