(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('pie', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.pie = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PieService = (function () {
        function PieService() {
        }
        PieService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        PieService.ctorParameters = function () { return []; };
        /** @nocollapse */ PieService.ngInjectableDef = i0.defineInjectable({ factory: function PieService_Factory() { return new PieService(); }, token: PieService, providedIn: "root" });
        return PieService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PieComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var PieModule = (function () {
        function PieModule() {
        }
        PieModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.PieService = PieService;
    exports.PieComponent = PieComponent;
    exports.PieModule = PieModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcGllL2xpYi9waWUuc2VydmljZS50cyIsIm5nOi8vcGllL2xpYi9waWUuY29tcG9uZW50LnRzIiwibmc6Ly9waWUvbGliL3BpZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQaWVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGllLXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImVuYWJsZUJhY2tncm91bmQ6ICduZXcgMCAwIDI0IDI0JzsgeG1sU3BhY2U6J3ByZXNlcnZlJzsgdHJhbnNmb3JtOidyb3RhdGUoLS4yNXR1cm4pJ1wiPlxuICAgICAgPGNsaXBQYXRoIFthdHRyLmlkXT1cIidweGItZG9udXQtY2xpcC0nK3N0cm9rZVwiPlxuICAgICAgICA8cGF0aCBbYXR0ci5kXT1cIidNMTIsMkExMCwxMCwwLDEsMCwyMiwxMiwxMCwxMCwwLDAsMCwxMiwyWm0wLCcgKyAoMjAtc3Ryb2tlKSArJ0EnICsgKDIwLTIqc3Ryb2tlKS8yICsgJywnICsgKDIwLTIqc3Ryb2tlKS8yICsgJywwLDEsMSwnICsgKDIyLXN0cm9rZSkgKyAnLDEyLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLDAsMCwxLDEyLCcgKyAoMjItc3Ryb2tlKSArICdaJ1wiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8Y2lyY2xlIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5maWxsLW9wYWNpdHldPVwicGVyY2VudCA+PSAxMDAgPyAnMScgOiAnMC4zJ1wiPjwvY2lyY2xlPlxuICAgICAgPHBhdGggKm5nSWY9XCJyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkgPiAwICYmIHJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKSA8IDEwMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgW2F0dHIuZF09XCInTSAxMiwxMiBIIDI0IEEgMTIsMTIsMCwnKyhyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCk+PTUwPzE6MCkrJywxLCcrZ2V0Q29vcmRpbmF0ZXMocmFuZ2VWYWx1ZShwZXJjZW50LCAwLCAxMDApKVsneCddKycsJytnZXRDb29yZGluYXRlcyhyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkpWyd5J10rJ1onXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdyaW5nJ11cbn0pXG5leHBvcnQgY2xhc3MgUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDpudW1iZXIgPSAxMDA7XG4gIHNpemU6bnVtYmVyID0gMjQ7XG4gIGNvbG9yOnN0cmluZztcbiAgcmluZzpudW1iZXIgPSAxMDtcbiAgc3Ryb2tlOm51bWJlcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0cm9rZSA9IE1hdGgubWF4KDEsTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICB9XG4gIHJhbmdlVmFsdWUodmFsdWUsIG1pbiwgbWF4KXtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLE1hdGgubWluKHZhbHVlLG1heCkpXG4gIH1cbiAgZ2V0Q29vcmRpbmF0ZXMocGVyY2VudCl7XG4gICAgY29uc3QgcmFkaXVzID0gMTI7XG4gICAgY29uc3QgZGVncmVlcyA9IHBlcmNlbnQqMy42O1xuICAgIHJldHVybiB7XG4gICAgICB4OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5jb3MoIChNYXRoLlBJLzE4MCkgKiAoZGVncmVlcykpKSxcbiAgICAgIHk6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLnNpbiggKE1hdGguUEkvMTgwKSAqIChkZWdyZWVzKSkpXG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nOyAgXG5pbXBvcnQgeyBQaWVDb21wb25lbnQgfSBmcm9tICcuL3BpZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BpZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQaWVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBpZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3lCQUpEOzs7Ozs7O0FDQUE7UUFzQkU7MkJBTGlCLEdBQUc7d0JBQ04sRUFBRTt3QkFFRixFQUFFO1NBRUM7Ozs7UUFFakIsK0JBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9EOzs7Ozs7O1FBQ0QsaUNBQVU7Ozs7OztZQUFWLFVBQVcsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUN4QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7YUFDekM7Ozs7O1FBQ0QscUNBQWM7Ozs7WUFBZCxVQUFlLE9BQU87O2dCQUNwQixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7O2dCQUNsQixJQUFNLE9BQU8sR0FBRyxPQUFPLEdBQUMsR0FBRyxDQUFDO2dCQUM1QixPQUFPO29CQUNMLENBQUMsRUFBRSxNQUFNLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxDQUFDLEVBQUUsTUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDNUQsQ0FBQTthQUNGOztvQkFuQ0ZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHdtQ0FRVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTt3QkFDVixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7cUJBQzdDOzs7OzJCQWZEOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN4Qjs7d0JBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=