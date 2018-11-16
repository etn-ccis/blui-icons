(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('battery', ['exports', '@angular/core'], factory) :
    (factory((global.battery = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BatteryService = (function () {
        function BatteryService() {
        }
        BatteryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        BatteryService.ctorParameters = function () { return []; };
        /** @nocollapse */ BatteryService.ngInjectableDef = i0.defineInjectable({ factory: function BatteryService_Factory() { return new BatteryService(); }, token: BatteryService, providedIn: "root" });
        return BatteryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BatteryComponent = (function () {
        function BatteryComponent() {
            this.percent = 100;
            this.size = 24;
        }
        /**
         * @return {?}
         */
        BatteryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} value
         * @param {?} min
         * @param {?} max
         * @return {?}
         */
        BatteryComponent.prototype.rangeValue = /**
         * @param {?} value
         * @param {?} min
         * @param {?} max
         * @return {?}
         */
            function (value, min, max) {
                return Math.max(min, Math.min(value, max));
            };
        BatteryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'battery-progress',
                        template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n      <path [attr.fill]=\"color || 'currentColor'\" fill-opacity=\"0.3\" d=\"M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z\"/>\n      <clipPath id=\"pxb-battery-clip\">\n        <path overflow=\"visible\" d=\"M20,8.33C20,7.6,19.4,7,18.67,7H3.34C2.6,7,2,7.6,2,8.33v7.33C2,16.4,2.6,17,3.33,17h15.34C19.4,17,20,16.4,20,15.67V8.33z\"/>\n      </clipPath> \n      <rect [attr.fill]=\"color || 'currentColor'\" x=\"2\" y=\"7\" clip-path=\"url(#pxb-battery-clip)\" [attr.width]=\"rangeValue(percent/100*18, 0, 100)\" height=\"10\" />\n    </svg>\n  ",
                        styles: [],
                        inputs: ['percent', 'size', 'color']
                    },] },
        ];
        /** @nocollapse */
        BatteryComponent.ctorParameters = function () { return []; };
        return BatteryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BatteryModule = (function () {
        function BatteryModule() {
        }
        BatteryModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [BatteryComponent],
                        exports: [BatteryComponent]
                    },] },
        ];
        return BatteryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.BatteryService = BatteryService;
    exports.BatteryComponent = BatteryComponent;
    exports.BatteryModule = BatteryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2JhdHRlcnkvbGliL2JhdHRlcnkuc2VydmljZS50cyIsIm5nOi8vYmF0dGVyeS9saWIvYmF0dGVyeS5jb21wb25lbnQudHMiLCJuZzovL2JhdHRlcnkvbGliL2JhdHRlcnkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmF0dGVyeVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXR0ZXJ5LXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgIDxwYXRoIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBmaWxsLW9wYWNpdHk9XCIwLjNcIiBkPVwiTTIwLDEwVjguM0MyMCw3LjYsMTkuNCw3LDE4LjcsN0gzLjNDMi42LDcsMiw3LjYsMiw4LjN2Ny4zQzIsMTYuNCwyLjYsMTcsMy4zLDE3aDE1LjNjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjE0aDJ2LTRIMjB6XCIvPlxuICAgICAgPGNsaXBQYXRoIGlkPVwicHhiLWJhdHRlcnktY2xpcFwiPlxuICAgICAgICA8cGF0aCBvdmVyZmxvdz1cInZpc2libGVcIiBkPVwiTTIwLDguMzNDMjAsNy42LDE5LjQsNywxOC42Nyw3SDMuMzRDMi42LDcsMiw3LjYsMiw4LjMzdjcuMzNDMiwxNi40LDIuNiwxNywzLjMzLDE3aDE1LjM0QzE5LjQsMTcsMjAsMTYuNCwyMCwxNS42N1Y4LjMzelwiLz5cbiAgICAgIDwvY2xpcFBhdGg+IFxuICAgICAgPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIHg9XCIyXCIgeT1cIjdcIiBjbGlwLXBhdGg9XCJ1cmwoI3B4Yi1iYXR0ZXJ5LWNsaXApXCIgW2F0dHIud2lkdGhdPVwicmFuZ2VWYWx1ZShwZXJjZW50LzEwMCoxOCwgMCwgMTAwKVwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvciddXG59KVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50Om51bWJlciA9IDEwMDtcbiAgc2l6ZTpudW1iZXIgPSAyNDtcbiAgY29sb3I6c3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcmFuZ2VWYWx1ZSh2YWx1ZSwgbWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4odmFsdWUsbWF4KSlcbiAgfVxuXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhdHRlcnlDb21wb25lbnQgfSBmcm9tICcuL2JhdHRlcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCYXR0ZXJ5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0JhdHRlcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2QkFKRDs7Ozs7OztBQ0FBO1FBb0JFOzJCQUhpQixHQUFHO3dCQUNOLEVBQUU7U0FFQzs7OztRQUVqQixtQ0FBUTs7O1lBQVI7YUFDQzs7Ozs7OztRQUVELHFDQUFVOzs7Ozs7WUFBVixVQUFXLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2FBQ3pDOztvQkF6QkZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUsd3hCQVFUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3dCQUNWLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO3FCQUNyQzs7OzsrQkFmRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUM1Qjs7NEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=